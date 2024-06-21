import fs from 'node:fs';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  default_locale: 'en',

  name: '__MSG_extensionName__',
  version: packageJson.version,
  description: '__MSG_extensionDescription__',

  /** 기본 */
  icons: {
    128: 'icon-128.png',
  },
  web_accessible_resources: [
    {
      resources: ['assets/js/*.js', 'assets/css/*.css', 'icon-128.png', 'icon-34.png'],
      matches: ['*://*/*'],
    },
  ],

  /** 크롬 익스텐션 아이콘 클릭시 팝업 */
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-64.png',
  },

  /** 마우스 호버 구현 */
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/pages/contentInjected/index.js'],
    },
  ],
};

export default manifest;
