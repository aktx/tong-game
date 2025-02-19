import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./main-menu.css"

const IndexPage = () => (
  <Layout>
    <div className="main-menu">
      {/* <button>
        <Link to="/hello-video">Начать игру</Link>
      </button> */}
      <button>
        <Link to="/slide/police-1">Начать игру</Link>
      </button>
      <button>
        <Link to="/help">Обратиться за бесплатной юридической помощью</Link>
      </button>
      <button>
        <Link to="/walonter">Стать волонтером</Link>
      </button>
      <button>
        <Link to="/support">Поддержать разработку игры</Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
