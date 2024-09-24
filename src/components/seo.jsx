import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang = "zh", title }) => {
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

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <html lang={lang} />
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.openGraphImage}`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  );
}


export default Seo;
