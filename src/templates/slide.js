import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./slide.css"

export default function Slide({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark
  let image = frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div className="slide">
        <button>
          <Link to="/">В меню</Link>
        </button>
        <div className="blog-post">
          <p>{frontmatter.top_bubble}</p>
          <div>
            <Img className="slide__img" fluid={image} />
          </div>
          <p>{frontmatter.text}</p>
        </div>
        <div className="slide__buttons">
          {frontmatter.button1Text !== "" ? (
            <button>
              <Link to={frontmatter.button1Link}>
                {frontmatter.button1Text}
              </Link>
            </button>
          ) : (
            <></>
          )}
          {frontmatter.button2Text !== "" ? (
            <button>
              <Link to={frontmatter.button2Link}>
                {frontmatter.button2Text}
              </Link>
            </button>
          ) : (
            <></>
          )}
          {frontmatter.button3Text !== "" ? (
            <button>
              <Link to={frontmatter.button3Link}>
                {frontmatter.button3Text}
              </Link>
            </button>
          ) : (
            <></>
          )}
          {frontmatter.button4Text !== "" ? (
            <button>
              <Link to={frontmatter.button4Link}>
                {frontmatter.button4Text}
              </Link>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        top_bubble
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text
        button1Text
        button1Link
        button2Text
        button2Link
        button3Text
        button3Link
        button4Text
        button4Link
      }
    }
  }
`
