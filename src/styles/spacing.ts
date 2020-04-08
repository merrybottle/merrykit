import * as CSS from 'csstype';

export const BASE_SPACING = 8;

export enum Spacing {
  XXXX_SMALL = 2,
  XXX_SMALL = 4,
  XX_SMALL = 8,
  X_SMALL = 12,
  SMALL = 16,
  MEDIUM = 24,
  LARGE = 32,
  X_LARGE = 40,
  XX_LARGE = 48,
  XXX_LARGE = 56,
  XXXX_LARGE = 64,
  AUTO = 'auto',
  NONE = 0
}

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
  const format = (value: Spacing) => typeof value === 'number' ? `${value}px` : value;

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
