import React, { Fragment } from 'react';
import { useColorMode } from 'theme-ui';

const PageElement = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Fragment>
      <header>
        <button
          onClick={(e) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default');
          }}
        >
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </header>
      {children}
    </Fragment>
  );
};

export default PageElement;
