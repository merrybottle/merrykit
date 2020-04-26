import React from 'react';
import { Helmet } from 'react-helmet-async';
import FavIcon from './assets/icons/favicon-32x32.png';
import { GOOGLE_FONT_LINK } from 'styles';

const Explorer = () => (
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
    <p>blah blah</p>
  </>
);

export default Explorer;
