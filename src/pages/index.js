import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <h2>Site under construction</h2>
      <div style={{ padding: "50px" }}>
        <span
          role="img"
          aria-label="construction"
          style={{ fontSize: "120px" }}
        >
          🚧
        </span>
      </div>
      <p>Come back soon!</p>
    </div>
  </Layout>
)

export default IndexPage
