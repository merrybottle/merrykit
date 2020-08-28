import { Body, H3 } from 'components';
import { Code, EnumTable, StylesPreview } from 'explorer-components';
import React from 'react';
import { BASE_SPACING } from 'styles';

export const Spacing = () => (
  <StylesPreview title="Spacing">
    <H3 spacing={{ marginBottom: 2 }}>Base Spacing</H3>

    <Body>{BASE_SPACING}</Body>

    <H3 spacing={{ marginBottom: 2, marginTop: 5 }}>Spacing Mixin</H3>

    <Code>{'css`${spacing2css({ <SpacingProps>: <spacing value> })}`'}</Code>

    <EnumTable
      friendlyName="Spacing Props"
      name="SpacingProps"
      copy={false}
      enums={[
        { name: 'marginTop', value: 'Spacing' },
        { name: 'marginBottom', value: 'Spacing' },
        { name: 'marginLeft', value: 'Spacing' },
        { name: 'marginRight', value: 'Spacing' },
        { name: 'marginX', value: 'Spacing' },
        { name: 'marginY', value: 'Spacing' },
        { name: 'margin', value: 'Spacing | Spacing[]' },
        { name: 'paddingTop', value: 'Spacing' },
        { name: 'paddingBottom', value: 'Spacing' },
        { name: 'paddingLeft', value: 'Spacing' },
        { name: 'paddingRight', value: 'Spacing' },
        { name: 'paddingX', value: 'Spacing' },
        { name: 'paddingY', value: 'Spacing' },
        { name: 'padding', value: 'Spacing | Spacing[]' },
      ]}
      spacing={{ marginTop: 5 }}
    />
  </StylesPreview>
);
