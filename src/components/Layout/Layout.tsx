import Footer from 'components/Footer'
import Header from 'components/Header'
import SideMap from 'components/SideMap'
import React, { ReactElement } from 'react'

const Layout = ({ children }: {children: ReactElement}) => (
  <>
    <Header />
    <main style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>{children}</div>
      <SideMap />
    </main>
    <Footer />
  </>
)

export default Layout
