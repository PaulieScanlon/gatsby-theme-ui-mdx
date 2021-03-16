import React from 'react';
import { Heading, Box } from 'theme-ui';

const IndexPage = () => {
  return (
    <main>
      <Heading as="h1" variant="styles.h1">
        h1: Heading
      </Heading>
      <blockquote>
        <p>Hello Scott</p>
      </blockquote>
      <Box>This is a div</Box>
      <Box as="p" variant="styles.p">
        This is a paragraph
      </Box>
    </main>
  );
};

export default IndexPage;
