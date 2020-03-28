import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import ReactMarkdown from 'react-markdown'

const input = `
## Travel 
Yo hablo. Eu falo. Je parle.

Leave comments in the photos!

### Brazil
2015 (6months. 243)  
https://goo.gl/photos/SH6FDxbaewsrX3vx9

2014 (125)  
https://plus.google.com/photos/116120141382863914580/albums/6022619270305848897?authkey=CJbGnISqhs6vrQE

2013 (187)
https://plus.google.com/photos/116120141382863914580/albums/5938695621774542081?authkey=COXY0Jb0xOLkGQ

### Colombia
2018  
https://photos.app.goo.gl/jTGiJoBwK9ozvNeG8

2017 (180 photos)  
https://goo.gl/photos/Em4Ckax1yrDwhg227

2013 (187)  
https://plus.google.com/photos/116120141382863914580/albums/5847773300854734225?authkey=CKDju63hwbbtkAE

### Ukraine (150)  
2018  
https://photos.app.goo.gl/YjM9cfqKQ9Rx78j4A

2012
https://plus.google.com/photos/116120141382863914580/albums/5816309925252503105?authkey=CIS5qeTgp7frUg

### Other
2017 Breckenridge, Colorado  
https://photos.app.goo.gl/qCvUyp497dSLVp8b2

2012 Puerto Rico  
https://photos.app.goo.gl/TvUaAimyQCPtbkQB6
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
