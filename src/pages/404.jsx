import * as React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import StyledLink from '../components/styled-link';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}


const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <NotFoundPageWrapper>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className='language-text'>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <br />
        <StyledLink to="/">Go home</StyledLink>
      </p>
      </NotFoundPageWrapper>
    </Layout>
  );
};

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
