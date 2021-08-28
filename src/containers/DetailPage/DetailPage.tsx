import Layout from 'components/Layout'
import React, { ReactElement } from 'react'

const ListingPage = () => (
  <div>
    listing
  </div>
)

ListingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ListingPage
