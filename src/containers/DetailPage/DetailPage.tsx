import Layout from 'components/Layout'
import React, { ReactElement } from 'react'

const DetailPage = () => (
  <div>
    listing
  </div>
)

DetailPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default DetailPage
