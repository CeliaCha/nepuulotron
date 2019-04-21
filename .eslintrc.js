// https://eslint.org/docs/user-guide/configuring


  module.exports = {
    extends: [ 'standard', 'plugin:vue/essential'],
    rules: {
      "no-var": "error", // optional, recommended when using es6+
      "no-unused-vars": 1, // recommended
      "arrow-spacing": ["error", { before: true, after: true }], // recommended
      indent: ["error", 2],
      "comma-dangle": [
        "error",
        {
          objects: "only-multiline",
          arrays: "only-multiline",
          imports: "never",
          exports: "never",
          functions: "never",
        },
      ],
  
      semi: ["error", "never"],
      //"max-len": ["error", { code: 80 }],
      "template-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "as-needed"],
  
      // standard.js
      "space-before-function-paren": [
        "error",
        {
          named: "always",
          anonymous: "always",
          asyncArrow: "always",
        },
      ],
  
      // standard plugin - options
      "standard/object-curly-even-spacing": ["error", "either"],
      "standard/array-bracket-even-spacing": ["error", "either"],
      "standard/computed-property-even-spacing": ["error", "even"],
      "standard/no-callback-literal": ["error", ["cb", "callback"]],
  
    },
    "parserOptions": {
         "parser": "babel-eslint",
            "ecmaVersion": 2017,
            "sourceType": "module"
        }
  }
  