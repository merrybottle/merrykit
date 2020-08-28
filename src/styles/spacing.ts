import { css } from 'styled-components';

export const BASE_SPACING = 8;

type Spacing = number | 'auto';

export interface SpacingProps {
  marginTop?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginX?: Spacing;
  marginY?: Spacing;
  margin?: Spacing | Spacing[];
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingX?: Spacing;
  paddingY?: Spacing;
  padding?: Spacing | Spacing[];
}

const getSpacingCSSString = (spacing: Spacing | Spacing[]) => {
  const format = (value: Spacing) =>
    typeof value === 'number' ? `${value * BASE_SPACING}px` : value;

  return typeof spacing === 'object'
    ? spacing.reduce((acc, value, index) => `${index !== 0 ? ' ' : ''}${format(value)}`, '')
    : format(spacing);
};

export const spacing2css = (spacingProps: SpacingProps) => css`
  ${Object.entries(spacingProps).map(([type, value]) => {
    const cssValueString = getSpacingCSSString(value);

    switch (type) {
      case 'marginX':
        return `
          margin-left: ${cssValueString};
          margin-right: ${cssValueString};
        `;
      case 'paddingX':
        return `
          padding-left: ${cssValueString};
          padding-right: ${cssValueString};
        `;
      case 'marginY':
        return `
          margin-top: ${cssValueString};
          margin-bottom: ${cssValueString};
        `;
      case 'paddingY':
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
  })}
`;
