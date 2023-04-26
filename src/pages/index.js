import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br/> design and code React apps</h1>
        <p>Complete courses blah blah.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
