export * from './defaults/containers'
export * from './defaults/menu'
export * from './defaults/panels'
export * from './defaults/settings'

export const PRE_SCROLL = 64
export const ADDON_HOST = /* @__PURE__ */ browser.runtime.getURL('')
export const SIDEBAR_URL = /* @__PURE__ */ browser.runtime.getURL('/sidebar/sidebar.html')
export const GROUP_PATH = '/sidebery/group.html'
export const GROUP_URL = /* @__PURE__ */ browser.runtime.getURL(GROUP_PATH)
export const PLACEHOLDER_PATH = '/sidebery/url.html'
export const PLACEHOLDER_URL = /* @__PURE__ */ browser.runtime.getURL(PLACEHOLDER_PATH)
export const SETUP_PATH = '/page.setup/setup.html'
export const SETUP_URL = /* @__PURE__ */ browser.runtime.getURL(SETUP_PATH)
export const SEARCH_URL = /* @__PURE__ */ browser.runtime.getURL('/popup.search/search.html')
export const EDITING_POPUP_URL = /* @__PURE__ */ browser.runtime.getURL(
  '/popup.editing/editing.html'
)
export const RGB_COLORS: Record<browser.ColorName, string> = {
  blue: '#37adff',
  turquoise: '#00c79a',
  cyan: '#00c79a',
  green: '#51cd00',
  yellow: '#ffcb00',
  orange: '#ff9f00',
  red: '#ff613d',
  pink: '#ff4bda',
  purple: '#af51f5',
  toolbar: '#686868',
  gray: '#686868',
}
export const COLOR_NAMES: browser.ColorName[] = [
  'blue',
  'turquoise',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
  'purple',
  'toolbar',
]
export const IMG_RE = /(\.png|\.jpe?g|\.gif|\.webp|\.svg)([?#].*)?$/i
export const VID_RE = /(\.mp4|\.webm)([?#].*)?$/i
export const MUS_RE = /(\.mp3|\.flac)([?#].*)?$/i
export const FILE_RE = /(^file:.*|\.pdf)([?#].*)?$/
export const PAGE_HASH_RE =
  /#(?<prefix>.*?)(?:(?::id:|%3Aid%3A).+?)?(?:(?:~!(?<chId>(?:\w|-){12})!ch!~)?$|(?:~!(?<chunkBody>[A-Za-z0-9+/_-]+={0,3})\.(?<chunkN>\d{1,8})\.(?<msgId>(?:\w|-){12})!(?<srcMark>\w)!(?<dstMark>\w)!~)$)/
export const PAGE_CH_ID_RE = /#(?:.*?)(?:(?::id:|%3Aid%3A).+?)?(?:~!(?<chId>(?:\w|-){12})!ch!~)$/
export const GROUP_RE = /\/sidebery\/group\.html/
export const URL_PAGE_RE = /\/sidebery\/url\.html/
export const SETTINGS_RE = /\/page\.setup\/setup\.html/
export const FOLDER_NAME_DATA_RE = /^(.*) \[(.*)\]$/
export const CONTAINER_IN_BOOKMARK_RE = / \[(".+","\w+","\w+"(,"\w+")?)\]/
export const COLOR_IN_BOOKMARK_RE = / \[(c\d)\]/
export const TITLE_IN_BOOKMARK_RE = / \[\*\]/
export const GROUP_INITIAL_TITLE = '...'
export const INITIAL_TITLE_RE = /^[0-9A-Za-z-]{1,63}(\.[0-9A-Za-z-]{1,63})+\//
export const SITE_URL_RE =
  /^([0-9A-Za-z-]{1,63}:\/\/[0-9A-Za-z-]{1,63}(\.[0-9A-Za-z-]{1,63})+)(\/|$)/
export const BTN_ICONS: Record<string, string> = {
  tabs_panel: 'icon_tabs',
  bookmarks_panel: 'icon_bookmarks',
  settings: 'icon_settings',
  history: 'icon_clock',
  sync: 'icon_sync',
  sp: 'icon_ellipsis',
  sd: 'icon_ellipsis',
  hdn: 'icon_hide',
  add_tp: 'icon_add_tabs_panel',
  search: 'icon_search',
  collapse: 'icon_collapse_all',
  create_snapshot: 'icon_snapshot',
  remute_audio_tabs: 'icon_mute',
}

export const LOCALHOST_RE = /^localhost(:\d+)?/
export const DOMAIN_RE = /^[0-9A-Za-z-]{1,63}:\/\/(?:www\.)?(.*?)(\/|$)/
export const LINUX_HOME_RE = /^\/home\/(.+?)\//
export const PATH_SEP_RE = /\/|\\/
export const RE_STR_RE = /^\/(?<re>.*)\/(?<flags>[dgimsuvy]{1,8})?$/

export const NOID: ID = -1
export const SAMEID: ID = -5
export const NEWID: ID = -10
export const ASKID: ID = -11
export const MOVEID: ID = -12

export const CONTAINER_ICON_OPTS = [
  { value: 'fingerprint', icon: '#fingerprint' },
  { value: 'briefcase', icon: '#briefcase' },
  { value: 'dollar', icon: '#dollar' },
  { value: 'cart', icon: '#cart' },
  { value: 'circle', icon: '#circle' },
  { value: 'gift', icon: '#gift' },
  { value: 'vacation', icon: '#vacation' },
  { value: 'food', icon: '#food' },
  { value: 'fruit', icon: '#fruit' },
  { value: 'pet', icon: '#pet' },
  { value: 'tree', icon: '#tree' },
  { value: 'chill', icon: '#chill' },
  { value: 'fence', icon: '#fence' },
]
export const PANEL_ICON_OPTS = [
  { value: 'icon_books', icon: '#icon_books' },
  { value: 'icon_code', icon: '#icon_code' },
  { value: 'icon_circle', icon: '#icon_circle' },
  { value: 'icon_play', icon: '#icon_play' },
  { value: 'icon_mail', icon: '#icon_mail' },
  { value: 'icon_man', icon: '#icon_man' },
  { value: 'icon_archive', icon: '#icon_archive' },
  { value: 'icon_clipboard', icon: '#icon_clipboard' },
  { value: 'icon_book', icon: '#icon_book' },
  { value: 'icon_coffee', icon: '#icon_coffee' },
  { value: 'icon_search', icon: '#icon_search' },
  { value: 'icon_lock', icon: '#icon_lock' },
  { value: 'icon_edu', icon: '#icon_edu' },
  { value: 'icon_flask', icon: '#icon_flask' },
  { value: 'icon_gamepad', icon: '#icon_gamepad' },
  { value: 'fingerprint', icon: '#fingerprint' },
  { value: 'briefcase', icon: '#briefcase' },
  { value: 'dollar', icon: '#dollar' },
  { value: 'cart', icon: '#cart' },
  { value: 'circle', icon: '#circle' },
  { value: 'gift', icon: '#gift' },
  { value: 'vacation', icon: '#vacation' },
  { value: 'food', icon: '#food' },
  { value: 'fruit', icon: '#fruit' },
  { value: 'pet', icon: '#pet' },
  { value: 'tree', icon: '#tree' },
  { value: 'chill', icon: '#chill' },
  { value: 'fence', icon: '#fence' },
  // Browser work icons (Tabler Icons, MIT license).
  // Research & learning
  { value: 'browser_work_search', icon: '#browser_work_search', tooltip: 'Web research' },
  { value: 'browser_work_microscope', icon: '#browser_work_microscope', tooltip: 'Deep research' },
  { value: 'browser_work_book', icon: '#browser_work_book', tooltip: 'Reading' },
  { value: 'browser_work_world', icon: '#browser_work_world', tooltip: 'General browsing' },
  { value: 'browser_work_bookmark', icon: '#browser_work_bookmark', tooltip: 'References' },
  { value: 'browser_work_bulb', icon: '#browser_work_bulb', tooltip: 'Ideas' },
  // Coding & technology
  { value: 'browser_work_code', icon: '#browser_work_code', tooltip: 'Coding' },
  { value: 'browser_work_terminal', icon: '#browser_work_terminal', tooltip: 'Command line' },
  { value: 'browser_work_bug', icon: '#browser_work_bug', tooltip: 'Debugging' },
  { value: 'browser_work_git-branch', icon: '#browser_work_git-branch', tooltip: 'Code reviews' },
  { value: 'browser_work_database', icon: '#browser_work_database', tooltip: 'Data' },
  { value: 'browser_work_server', icon: '#browser_work_server', tooltip: 'Infrastructure' },
  // Writing & documents
  { value: 'browser_work_pencil', icon: '#browser_work_pencil', tooltip: 'Writing' },
  { value: 'browser_work_file-text', icon: '#browser_work_file-text', tooltip: 'Documents' },
  { value: 'browser_work_notes', icon: '#browser_work_notes', tooltip: 'Notes' },
  { value: 'browser_work_language', icon: '#browser_work_language', tooltip: 'Translation' },
  { value: 'browser_work_typography', icon: '#browser_work_typography', tooltip: 'Editing' },
  { value: 'browser_work_checklist', icon: '#browser_work_checklist', tooltip: 'Checklists' },
  // Communication
  { value: 'browser_work_mail', icon: '#browser_work_mail', tooltip: 'Email' },
  { value: 'browser_work_messages', icon: '#browser_work_messages', tooltip: 'Chat' },
  { value: 'browser_work_calendar', icon: '#browser_work_calendar', tooltip: 'Calendar' },
  { value: 'browser_work_video', icon: '#browser_work_video', tooltip: 'Video calls' },
  {
    value: 'browser_work_presentation',
    icon: '#browser_work_presentation',
    tooltip: 'Presentations',
  },
  { value: 'browser_work_users', icon: '#browser_work_users', tooltip: 'Collaboration' },
  // Work & planning
  { value: 'browser_work_briefcase', icon: '#browser_work_briefcase', tooltip: 'Work' },
  { value: 'browser_work_folder', icon: '#browser_work_folder', tooltip: 'Projects' },
  { value: 'browser_work_target', icon: '#browser_work_target', tooltip: 'Goals' },
  { value: 'browser_work_list-check', icon: '#browser_work_list-check', tooltip: 'Tasks' },
  { value: 'browser_work_clock', icon: '#browser_work_clock', tooltip: 'Time tracking' },
  { value: 'browser_work_chart-bar', icon: '#browser_work_chart-bar', tooltip: 'Analytics' },
  // Shopping & money
  { value: 'browser_work_shopping-cart', icon: '#browser_work_shopping-cart', tooltip: 'Shopping' },
  { value: 'browser_work_credit-card', icon: '#browser_work_credit-card', tooltip: 'Payments' },
  { value: 'browser_work_receipt', icon: '#browser_work_receipt', tooltip: 'Invoices' },
  { value: 'browser_work_wallet', icon: '#browser_work_wallet', tooltip: 'Budgeting' },
  { value: 'browser_work_building-bank', icon: '#browser_work_building-bank', tooltip: 'Banking' },
  { value: 'browser_work_coin', icon: '#browser_work_coin', tooltip: 'Finance' },
  // Media & creativity
  { value: 'browser_work_player-play', icon: '#browser_work_player-play', tooltip: 'Videos' },
  { value: 'browser_work_headphones', icon: '#browser_work_headphones', tooltip: 'Podcasts' },
  { value: 'browser_work_music', icon: '#browser_work_music', tooltip: 'Music' },
  { value: 'browser_work_photo', icon: '#browser_work_photo', tooltip: 'Images' },
  { value: 'browser_work_palette', icon: '#browser_work_palette', tooltip: 'Design' },
  {
    value: 'browser_work_device-gamepad-2',
    icon: '#browser_work_device-gamepad-2',
    tooltip: 'Games',
  },
  // Personal & utilities
  { value: 'browser_work_plane', icon: '#browser_work_plane', tooltip: 'Travel' },
  { value: 'browser_work_map', icon: '#browser_work_map', tooltip: 'Maps' },
  { value: 'browser_work_home', icon: '#browser_work_home', tooltip: 'Home' },
  { value: 'browser_work_heart', icon: '#browser_work_heart', tooltip: 'Health' },
  { value: 'browser_work_shield-lock', icon: '#browser_work_shield-lock', tooltip: 'Privacy' },
  { value: 'browser_work_settings', icon: '#browser_work_settings', tooltip: 'Utilities' },
]
export const COLOR_OPTS = [
  { value: 'toolbar', color: 'toolbar' },
  { value: 'blue', color: 'blue' },
  { value: 'turquoise', color: 'turquoise' },
  { value: 'green', color: 'green' },
  { value: 'yellow', color: 'yellow' },
  { value: 'orange', color: 'orange' },
  { value: 'red', color: 'red' },
  { value: 'pink', color: 'pink' },
  { value: 'purple', color: 'purple' },
]
export const TAB_BOOKMARK_COLOR: Record<string, string> = {
  blue: 'c1',
  turquoise: 'c2',
  green: 'c3',
  yellow: 'c4',
  orange: 'c5',
  red: 'c6',
  pink: 'c7',
  purple: 'c8',
}
export const BOOKMARK_TAB_COLOR: Record<string, string> = {
  c1: 'blue',
  c2: 'turquoise',
  c3: 'green',
  c4: 'yellow',
  c5: 'orange',
  c6: 'red',
  c7: 'pink',
  c8: 'purple',
}
export const PROXY_OPTS = ['http', 'https', 'socks4', 'socks', 'direct']

export const BKM_ROOT_ID = 'root________'
export const BKM_OTHER_ID = 'unfiled_____'
export const BKM_MENU_ID = 'menu________'
export const BKM_MOBILE_ID = 'mobile______'
export const BKM_TLBR_ID = 'toolbar_____'

export const PIN_MARK = '📌'

export const MIN_SEARCH_QUERY_LEN = 2

export const FF_THEME_COLORS: (keyof browser.theme.ThemeColors)[] = [
  'accentcolor',
  'bookmark_text',
  'button_background_active',
  'button_background_hover',
  'border',
  'border_width',
  'icons',
  'icons_attention',
  'frame',
  'frame_inactive',
  'ntp_background',
  'ntp_text',
  'panel_item_active',
  'panel_item_hover',
  'panel_separator',
  'popup',
  'popup_border',
  'popup_highlight',
  'popup_highlight_text',
  'popup_text',
  'sidebar',
  'sidebar_base',
  'sidebar_border',
  'sidebar_highlight',
  'sidebar_highlight_text',
  'sidebar_text',
  'sidebar_darker_border_width',
  'sidebar_top_padding',
  'sidebar_active_bg',
  'sidebar_active_border',
  'tab_background_separator',
  'tab_background_text',
  'tab_line',
  'tab_loading',
  'tab_selected',
  'tab_text',
  'textcolor',
  'toolbar',
  'toolbar_bottom_separator',
  'toolbar_field',
  'toolbar_field_border',
  'toolbar_field_border_focus',
  'toolbar_field_focus',
  'toolbar_field_highlight',
  'toolbar_field_highlight_text',
  'toolbar_field_separator',
  'toolbar_field_text',
  'toolbar_field_text_focus',
  'toolbar_text',
  'toolbar_top_separator',
  'toolbar_vertical_separator',
]
