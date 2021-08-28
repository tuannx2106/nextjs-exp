import { Footer } from 'antd/lib/layout/layout'
import Header from 'components/Header'
import SideMap from 'components/SideMap'
import React, { ReactElement } from 'react'

const Layout = ({ children }: {children: ReactElement}) => (
  <>
    <Header />
    <main style={{ display: 'flex' }}>
      {children}
      <SideMap />
    </main>
    <Footer />
  </>
)

export default Layout
