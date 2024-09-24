import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />

      <PostList posts={posts} />
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;

  & p {
    padding-top: 30px;
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    filter: {fields: {contentType: {eq: "posts"}}}
    sort: {frontmatter: {date: DESC}}
    limit: 9
  ) {
    nodes {
      fields {
        slug
      }
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
        tags
      }
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
  }
}
`;
