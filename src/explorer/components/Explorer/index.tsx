import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FavIcon from 'assets/icons/favicon-32x32.png';
import { Colors, GOOGLE_FONT_LINK } from 'styles';
import { Box, Grid } from 'components';
import { createGlobalStyle } from 'styled-components';
import { Menu, PreviewPanel } from 'explorer-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.GREY_050};
    margin: 0;
    padding: 0;
  }
`;

export const Explorer = () => {
  const [preview, setPreview] = useState<React.ReactNode | undefined>();

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/png" href={FavIcon} />
        <link rel="stylesheet" href={GOOGLE_FONT_LINK} />
        <title>MERRYKIT</title>
      </Helmet>

      <GlobalStyle />

      <Grid container={true}>
        <Grid item={true} xs={12} md={3}>
          <Box height="100vh" boxSizing="border-box" alignItems="stretch" display="flex">
            <Menu onChange={setPreview} />
          </Box>
        </Grid>

        <Grid item={true} xs={12} md={9}>
          <Box height="100vh" boxSizing="border-box" alignItems="stretch" display="flex">
            <PreviewPanel>
              {preview}
            </PreviewPanel>
          </Box>
        </Grid>
      </Grid>
    </HelmetProvider>
  );
};
