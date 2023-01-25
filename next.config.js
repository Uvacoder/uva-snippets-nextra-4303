const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require("./theme.js");

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
})

module.exports = withNextra()
