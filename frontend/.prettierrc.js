"use strict"

module.exports = {
  overrides: [
    {
      files: "*.{js,ts}",
      options: {
        semi: false,
      },
    },
  ],
  plugins: ["prettier-plugin-organize-imports"],
}
