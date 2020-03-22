import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import ReactMarkdown from 'react-markdown'

const input = `
## Travel 
links are to albums in google photos
`
// TODO style the markdown by wrapping <ReactMarkdown/> in a class. css bcomes .a_class > h1 { color: "#5A8FA9" }

// OPTIONAL
const Travel = () => (
  <Layout>

    <SEO title="Travel" />

    
    <ReactMarkdown source={input} />

    <Link to="/">Back</Link>

  </Layout>
)

export default Travel
