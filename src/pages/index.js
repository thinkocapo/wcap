import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Emoji from "react-emoji-render";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ color: "#5A8FA9", marginBottom: "0.45rem" }}>
        Hello, I'm Will {` `} 
        <img className="emoji" draggable="false" alt="🎉" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/whatsapp/116/party-popper_1f389.png"></img>
    </p>
    {/* <Emoji text=":tada:" /> */}

    {/* <span class="emoji">🎉</span> */}


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
                        Github.com
                    </div>
                </a>
            </h4>
        </li>
        <li>
            <h4>
                <a href="https://www.linkedin.com/in/williamcapozzoli">
                    <div style={{ color: "#526189" }}>
                        LinkedIn.com
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
                <Link to="/travel">
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
