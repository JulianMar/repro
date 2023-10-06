module.exports = {
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nx"],
  "extends": ["@antfu"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx", "*.vue"],
      "rules": {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nx/typescript"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nx/javascript"],
      "rules": {}
    },
    {
      "files": "*.json",
      "parser": "jsonc-eslint-parser",
      "rules": {}
    },
  ],
  rules: {
    "curly": ['error', 'all'],
    "vue/block-order": ['error', {order: ['template', 'script', 'style']}],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "eslint-comments/no-unlimited-disable": "off",
    "no-console": "warn",
    'vue/singleline-html-element-content-newline': 0,
    "vue/no-undef-components": ["error", {
      "ignorePatterns": [
        "video-js",
        "swiper-container",
        "swiper-slide"
      ]
    }]
  }
}
