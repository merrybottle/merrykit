import * as CSS from 'csstype';

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

export const spacing2css = (spacingProps: SpacingProps) => {
  const spacingCss: CSS.Properties = {};

  Object.entries(spacingProps).forEach(([type, value]) => {
    const cssValueString = getSpacingCSSString(value);

    switch (type) {
      case 'marginHorizontal':
        spacingCss.marginLeft = cssValueString;
        spacingCss.marginRight = cssValueString;
        break;
      case 'paddingHorizontal':
        spacingCss.paddingLeft = cssValueString;
        spacingCss.paddingRight = cssValueString;
        break;
      case 'marginVertical':
        spacingCss.marginTop = cssValueString;
        spacingCss.marginBottom = cssValueString;
        break;
      case 'paddingVertical':
        spacingCss.paddingTop = cssValueString;
        spacingCss.paddingBottom = cssValueString;
        break;
      case 'margin':
      case 'marginLeft':
      case 'marginRight':
      case 'marginTop':
      case 'marginBottom':
      case 'padding':
      case 'paddingLeft':
      case 'paddingRight':
      case 'paddingTop':
      case 'paddingBottom':
        spacingCss[type] = cssValueString;
        break;
    }
  });

  return spacingCss;
};
