const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer")
      ],
    },
  },
  plugin: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src"
      }
    }
  ]
};