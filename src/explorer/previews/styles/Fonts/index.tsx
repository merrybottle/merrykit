import React from 'react';
import { GOOGLE_FONT_LINK, FontFamilies, FontWeights } from 'styles';
import { Code, EnumTable, StylesPreview } from 'explorer-components';
import { H3 } from 'components';

export const Fonts = () => (
  <StylesPreview title="Fonts">
    <H3 spacing={{ marginBottom: 2 }}>GOOGLE_FONT_LINK</H3>

    <Code>{GOOGLE_FONT_LINK}</Code>

    <EnumTable
      friendlyName="Font Families"
      name="FontFamilies"
      enums={[
        { name: 'VOLLKORN_SC', value: FontFamilies.VOLLKORN_SC },
        { name: 'VOLLKORN', value: FontFamilies.VOLLKORN },
        { name: 'MONTSERRAT', value: FontFamilies.MONTSERRAT },
      ]}
      spacing={{ marginTop: 5 }}
    />

    <EnumTable
      friendlyName="Font Weights"
      name="FontWeights"
      enums={[
        { name: 'VOLLKORN_SC_BOLD', value: FontWeights.VOLLKORN_SC_BOLD },
        { name: 'VOLLKORN_SEMI_BOLD', value: FontWeights.VOLLKORN_SEMI_BOLD },
        { name: 'VOLLKORN_BOLD', value: FontWeights.VOLLKORN_BOLD },
        { name: 'MONTSERRAT_LIGHT', value: FontWeights.MONTSERRAT_LIGHT },
        { name: 'MONTSERRAT_MEDIUM', value: FontWeights.MONTSERRAT_MEDIUM },
        { name: 'MONTSERRAT_SEMI_BOLD', value: FontWeights.MONTSERRAT_SEMI_BOLD },
        { name: 'MONTSERRAT_BOLD', value: FontWeights.MONTSERRAT_BOLD },
      ]}
      spacing={{ marginTop: 5 }}
    />
  </StylesPreview>
);
