import React from 'react'
import Head from 'next/head';
import { Layout } from '../../components/navbar/layout';
import { Nav } from '../../components/navbar/navbar';

import { Footer } from '../../components/footer';

const Health = () => {
  return (
    <div>
      <Layout>
          <Nav />
            <div>
              <h1>
                Health
              </h1>
            </div>
          <Footer />
        </Layout>
    </div>
  )
}

export default Health
