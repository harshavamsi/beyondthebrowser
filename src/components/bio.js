/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Blog by{" "}
        <strong>
          <span style={{ color: `#303c6c` }}>{author}</span>
        </strong>
        <br />
        For everything beyond the browser
        <br />
        <span>
          <Link to="/about" style={{ color: `#303c6c` }}>
            About
          </Link>
          <Link
            to="/resume"
            style={{ color: `#303c6c`, marginLeft: rhythm(1 / 4) }}
          >
            Résumé
          </Link>
          <a
            href="https://github.com/harshavamsi"
            style={{ color: `#303c6c`, marginLeft: rhythm(1 / 4) }}
          >
            GitHub
          </a>
        </span>
      </p>
    </div>
  )
}

export default Bio
