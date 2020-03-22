import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// OPTIONAL - not currently referenced. homepage links point to markdown blog posts in /content/posts
const Link1Page = () => (
  <Layout>
    <SEO title="Link1" />
    <h1>
        Link1 Page
    </h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default Link1Page
