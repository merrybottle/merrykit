import { EnumTable, StylesPreview } from 'explorer-components';
import React from 'react';
import { BorderRadii, BorderWidths } from 'styles';

export const Borders = () => (
  <StylesPreview title="Borders">
    <EnumTable
      friendlyName="Border Radii"
      name="BorderRadii"
      enums={[
        { name: 'NONE', value: BorderRadii.NONE },
        { name: 'X_SMALL', value: BorderRadii.X_SMALL },
        { name: 'SMALL', value: BorderRadii.SMALL },
        { name: 'MEDIUM', value: BorderRadii.MEDIUM },
        { name: 'LARGE', value: BorderRadii.LARGE },
        { name: 'X_LARGE', value: BorderRadii.X_LARGE },
      ]}
    />

    <EnumTable
      friendlyName="Border Widths"
      name="BorderWidths"
      enums={[
        { name: 'NONE', value: BorderWidths.NONE },
        { name: 'SMALL', value: BorderWidths.SMALL },
        { name: 'MEDIUM', value: BorderWidths.MEDIUM },
        { name: 'LARGE', value: BorderWidths.LARGE },
        { name: 'X_LARGE', value: BorderWidths.X_LARGE },
      ]}
      spacing={{ marginTop: 5 }}
    />
  </StylesPreview>
);
