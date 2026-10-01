import * as React from "react"

import Seo from "../components/seo"
import SectionHeroImage from "../components/section-hero-image"
import SectionHeroTitle from "../components/section-hero-title"

const IndexPage = () => (
  <div className="bg-gray-800 text-white">
    <SectionHeroTitle />
    <SectionHeroImage />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
