import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({lang = "zh", title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          openGraphImage
          siteUrl
          description
          social {
            twitter
          }
        }
      }
    }
  `);

  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <html lang={lang} />
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta property="og:type" content="website" />
    </>
  );
};

export default Seo;
