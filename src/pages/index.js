import React from 'react'

import Layout from '../layouts/Main'
import Services from '../components/Services'
import Featurette from '../components/Featurette'
import CallToAction from '../components/CallToAction'

const Index = () => {
  return (
    <Layout>
      <main>
        <Services />
        <Featurette />
        <CallToAction />
      </main>
    </Layout>
  )
}
export default Index
