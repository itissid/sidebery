#!/usr/bin/env python3
"""Check the fork's bundled panel-icon contract with the standard library."""

import argparse
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET


def check(root: Path) -> None:
    assets = root / 'src/assets/browser-work'
    files = sorted(assets.glob('*.svg'))
    if len(files) != 48:
        raise ValueError(f'expected 48 SVG assets, found {len(files)}')
    defaults = (root / 'src/defaults.ts').read_text()
    start = defaults.index('export const PANEL_ICON_OPTS = [')
    end = defaults.index('\n]', start)
    options = defaults[start:end]
    values = re.findall(r"value:\s*'(browser_work_[^']+)'", options)
    expected = {f'browser_work_{p.stem}' for p in files}
    if len(values) != 48 or set(values) != expected:
        raise ValueError('picker values do not match the 48 bundled SVG assets')
    for file in files:
        icon_id = f'browser_work_{file.stem}'
        if not re.search(r"icon:\s*'#" + re.escape(icon_id) + r"'", options):
            raise ValueError(f'{icon_id}: missing picker SVG reference')
        svg = ET.fromstring(file.read_text())
        if svg.attrib.get('id') != icon_id or svg.attrib.get('viewBox') != '0 0 24 24':
            raise ValueError(f'{file.name}: unexpected SVG identity or viewBox')
        allowed = {'svg', 'g', 'path', 'circle', 'ellipse', 'rect', 'line', 'polyline', 'polygon'}
        for node in svg.iter():
            if node.tag.rsplit('}', 1)[-1] not in allowed:
                raise ValueError(f'{file.name}: unexpected non-vector element {node.tag}')
            for key, value in node.attrib.items():
                name = key.rsplit('}', 1)[-1].lower()
                if name.startswith('on') or name in {'href', 'src', 'style'} or 'url(' in value.lower():
                    raise ValueError(f'{file.name}: unexpected active/external attribute {key}')
    pages = [
        'src/sidebar/sidebar.html',
        'src/page.setup/setup.html',
        'src/popup.panel-config/panel-config.html',
        'src/page.group/group.html',
        'src/popup.sync/sync.html',
    ]
    for page in pages:
        content = (root / page).read_text()
        for file in files:
            marker = f'<inject>svg://src/assets/browser-work/{file.name}#browser_work_{file.stem}</inject>'
            if content.count(marker) != 1:
                raise ValueError(f'{page}: expected one definition for {file.stem}')
    license_text = (assets / 'LICENSE.txt').read_text()
    if 'MIT License' not in license_text or 'Paweł Kuna' not in license_text:
        raise ValueError('Tabler icon license is missing')


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    try:
        check(args.root)
    except (ValueError, OSError, ET.ParseError) as error:
        print(f'FAIL: {error}', file=sys.stderr)
        return 1
    print('PASS: 48 vector icons, matching picker entries, five injection pages, and MIT attribution')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
