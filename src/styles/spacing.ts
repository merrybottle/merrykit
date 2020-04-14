import { css } from 'styled-components';

export const BASE_SPACING = 8;

type Spacing = number | 'auto';

export interface SpacingProps {
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginHorizontal?: Spacing;
  marginVertical?: Spacing;
  margin?: Spacing | Spacing[];
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingHorizontal?: Spacing;
  paddingVertical?: Spacing;
  padding?: Spacing | Spacing[];
}

const getSpacingCSSString = (spacing: Spacing | Spacing[]) => {
  const format = (value: Spacing) => typeof value === 'number' ? `${value * BASE_SPACING}px` : value;

  return typeof spacing === 'object'
    ? spacing.reduce((acc, value, index) => `${index !== 0 ? ' ' : ''}${format(value)}`, '')
    : format(spacing);
};

export const spacing2css = (spacingProps: SpacingProps) => (
  Object.entries(spacingProps).map(([type, value]) => {
    const cssValueString = getSpacingCSSString(value);

    switch (type) {
      case 'marginHorizontal':
        return `
          margin-left: ${cssValueString};
          margin-right: ${cssValueString};
        `;
      case 'paddingHorizontal':
        return `
          padding-left: ${cssValueString};
          padding-right: ${cssValueString};
        `;
      case 'marginVertical':
        return `
          margin-top: ${cssValueString};
          margin-bottom: ${cssValueString};
        `;
      case 'paddingVertical':
        return `
          padding-top: ${cssValueString};
          padding-bottom: ${cssValueString};
        `;
      case 'marginLeft':
        return `margin-left: ${cssValueString};`;
      case 'marginRight':
        return `margin-right: ${cssValueString};`;
      case 'marginTop':
        return `margin-top: ${cssValueString};`;
      case 'marginBottom':
        return `margin-bottom: ${cssValueString};`;
      case 'paddingLeft':
        return `padding-left: ${cssValueString};`;
      case 'paddingRight':
        return `padding-right: ${cssValueString};`;
      case 'paddingTop':
        return `padding-top: ${cssValueString};`;
      case 'paddingBottom':
        return `padding-bottom: ${cssValueString};`;
      case 'margin':
      case 'padding':
        return `${type}: ${cssValueString};`;
    }
  })
);
