import React from 'react';
import { Helmet } from 'react-helmet-async';
import FavIcon from 'assets/icons/favicon-32x32.png';
import { GOOGLE_FONT_LINK } from 'styles';

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
  <>
    <Helmet
      meta={[
        { charSet: 'utf-8' }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: FavIcon },
        { href: GOOGLE_FONT_LINK, rel: 'stylesheet' }
      ]}
      title="MERRYKIT"
    />
    {children}
  </>
);

export default Wrapper;
