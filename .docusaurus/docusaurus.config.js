export default {
  "title": "forritari.dev",
  "tagline": "",
  "url": "https://forritari.dev",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "fannaroh",
  "projectName": "forritari.dev",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "",
      "logo": {
        "alt": "forritari.dev Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/fannaroh/forritari.dev",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "Copyright © 2020 Fannar Örn Hermannsson. <br> <div>Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/fannar/github/forritari.dev/sidebars.js",
          "editUrl": "https://github.com/fannaroh/forritari.dev/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/fannaroh/forritari.dev/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/fannar/github/forritari.dev/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};