module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "airbnb", "plugin:prettier/recommended"],
  plugins: ["prettier", "import"],
  rules: {
    "no-restricted-globals": "off",
    "no-fallthrough": "off",
    "comma-dangle": [
      "warn",
      {
        functions: "always-multiline",
        objects: "always-multiline",
        arrays: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
      },
    ],
    // can occasionally cause bugs but I think it's worth keeping
    // https://github.com/prettier/eslint-plugin-prettier#arrow-body-style-and-prefer-arrow-callback-issue
    "arrow-body-style": ["error", "as-needed"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-console": "warn",
    "no-debugger": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/alt-text": "off",
    quotes: "off",
    // fixes 'React used before it was defined'
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-use-before-define": "off",
    // TS interfaces aren't recognized so gives false positives
    "react/prop-types": "off",
    // this is very useful for typescript magic
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    // Generated graphql files violate this and it's messy
    camel_case: "off",
    camelcase: "off",
    // windows uses CRLF but eslint expects LF
    "linebreak-style": "off",
    // TS checks this for us and this removes conflicts
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    // fix false negative with no shadow
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-filename-extension": [
      // allows jsx in tsx files
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    // prefer named exports
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // handles import ordering logic
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react|react-dom",
            group: "external",
            position: "before",
          },
          // global imports from /src like @project_name/ui are grouped together
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"], // react is always on top
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  globals: {
    JSX: true,
  },
};
