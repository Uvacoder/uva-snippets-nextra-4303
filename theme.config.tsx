import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/layout/footer'
import Logo from './components/layout/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/Tittoh/snippets',
  },
  docsRepositoryBase: 'https://github.com/Tittoh/snippets',
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  footer: {
    text: <Footer />,
  },
}

export default config
