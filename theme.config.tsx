import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/layout/footer'
import Logo from './components/layout/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/uvacoder/uva-snippets-nextra',
  },
  docsRepositoryBase: 'https://github.com/uvacoder/uva-snippets-nextra',
  editLink: {
    component: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  footer: {
    text: <Footer />,
  },
}

export default config
