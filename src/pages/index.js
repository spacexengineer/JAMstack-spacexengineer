import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi everyone</h1>
    <p>Excited to be here and participate in the hackathon</p>
    <p>Feel free to reach out to me => <a href="https://www.linkedin.com/in/hcasbeer/">LinkedIn profile</a></p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
