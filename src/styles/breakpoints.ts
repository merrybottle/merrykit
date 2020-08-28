const up = (minWidth: number) => `@media (min-width: ${minWidth}px)`;
const down = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
const between = (minWidth: number, maxWidth: number) =>
  `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;

export enum Breakpoints {
  X_SMALL = 0,
  SMALL = 600,
  MEDIUM = 960,
  LARGE = 1280,
  X_LARGE = 1920,
}

export const MEDIA_QUERY = {
  customMin: up,
  customMax: down,
  customBetween: between,
  mobile: down(Breakpoints.SMALL - 1),
  mobileLargeMin: up(Breakpoints.SMALL),
  mobileLargeMax: down(Breakpoints.MEDIUM - 1),
  mobileLarge: between(Breakpoints.SMALL, Breakpoints.MEDIUM - 1),
  tabletMin: up(Breakpoints.MEDIUM),
  tabletMax: down(Breakpoints.LARGE - 1),
  tablet: between(Breakpoints.MEDIUM, Breakpoints.LARGE - 1),
  desktopMin: up(Breakpoints.LARGE),
  desktopMax: down(Breakpoints.X_LARGE - 1),
  desktop: between(Breakpoints.LARGE, Breakpoints.X_LARGE - 1),
  wide: up(Breakpoints.X_LARGE),
};
