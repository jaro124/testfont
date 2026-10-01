import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SectionHeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const image = getImage(data.heroImage);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <GatsbyImage
        image={image}
        alt="Krajobraz"
        className="absolute inset-0 w-full h-full"
        imgClassName="object-cover"
      />

      <div className="absolute inset-0 bg-amber-500/40 mix-blend-multiply pointer-events-none" />
    </div>
  );
};

export default SectionHeroImage;
