import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

const Help = () => (
  <Layout>
    <h1>Help</h1>
    <p>Developing...</p>
    <button>
      <Link to="/">
        <b>Back to main menu</b>
      </Link>
    </button>
  </Layout>
)

export default Help
