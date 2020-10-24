export default {
  "title": "codebro.xyz",
  "tagline": "codebro.xyz",
  "url": "https://codebro.xyz",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "fannaroh",
  "projectName": "codebro.xyz",
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
      "title": "Code Bro",
      "logo": {
        "alt": "codebro.xyz Logo",
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
          "href": "https://github.com/codebro.xyz",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "Copyright © 2020 Fannar Örn Hermannsson. <br> <div>Polarbear made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/fannar/github/forritari.dev/sidebars.js",
          "editUrl": "https://github.com/codebro.xyz/site/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/codebro.xyz/site/edit/master/website/blog/"
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