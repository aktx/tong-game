import React from "react"
import {Link} from 'gatsby';

import Layout from "../components/layout"

const Walonter = () => (
  <Layout>
    <h1>Walonter</h1>
    <p>Developing...</p>
    <button>
      <Link to="/">
        <b>Back to main menu</b>
      </Link>
    </button>
  </Layout>
)

export default Walonter
