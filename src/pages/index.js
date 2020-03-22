import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
        {/* <div style={{ color: "#5A8FA9" }}>
        thinkocapo</div> */}
    </h1>
    <p>Hello, I'm Will</p>
    <ul>
        {/* <li><p>I'm a software engineer. I work in sales</p></li> */}
        {/* <li><p>I travel. I play music. I read</p></li> */}
        <li>
            <h4>
                <Link to="/blog">
                    <div style={{ color: "#526189" }}>
                        Blog
                    </div>
                </Link>
            </h4>
        </li>
        <li>
            <h4>
                <a href="https://www.github.com/thinkocapo">
                    <div style={{ color: "#526189" }}>
                        Github
                    </div>
                </a>
            </h4>
        </li>
        <li>
            <h4>
                <a href="https://www.linkedin.com/in/williamcapozzoli">
                    <div style={{ color: "#526189" }}>
                        LinkedIn
                    </div>
                </a>
            </h4>
        </li>
        <li>
            <h4>
                <Link to="/blog/software/">
                    <div style={{ color: "#526189" }}>
                        Software
                    </div>
                </Link>
            </h4>
        </li>
        <li>
            <h4>
                <Link to="/blog/travel-photos/">
                    <div style={{ color: "#526189" }}>
                        Travel Photos
                    </div>
                </Link>
            </h4>
        </li>
    </ul>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
    {/* <h4>
        <a href="https://www.linkedin.com/in/williamcapozzoli">
            <div style={{ color: "#526189" }}>
                LinkedIn
            </div>
        </a>
    </h4> */}

    {/* style={{ color: "#8CD889" } */}
    
    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
