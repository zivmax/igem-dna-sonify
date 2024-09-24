import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const profiles = frontmatter.profiles;

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <ProfileContainer>
          {profiles.map((profile, index) => {
            const profileImage = getImage(profile.image);
            return (
              <Profile key={index}>
                <AboutImageWrapper image={profileImage} alt={profile.name} />
                <h1>{profile.name}</h1>
              </Profile>
            );
          })}
        </ProfileContainer>
        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
  justify-content: center;
  width: 80%; // Adjust width as needed
  max-width: 800px; // Optional: limit max width
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  width: 100%;

  & h1 {
    margin-left: 1rem;
    text-align: left;
  }
`;

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  border-radius: 50%;
  height: 250px;
  width: 250px;
`;

const AboutCopy = styled.div`
  text-align: left;

  & p {
    font-size: var(--size-400);
  }
`;


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profiles {
          name
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
            }
          }
        }
      }
    }
  }
`;
