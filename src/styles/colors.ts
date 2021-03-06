export enum Colors {
  TEA_ROSE = '#f97e77',
  SPANISH_PINK = '#f9c0bd',
  BEGONIA = '#f56476',
  BLUE_GREEN = '#0fa3b1',
  SHINY_SHAMROCK = '#60b269',
  MAXIMUM_YELLOW_RED = '#f9b84f',
  ENGLISH_VERMILLION = '#d33f49',

  PRIMARY = '#f97e77', // TEA_ROSE
  PRIMARY_LIGHT = '#f9c0bd', // SPANISH_PINK
  PRIMARY_DARK = '#f56476', // BEGONIA
  SECONDARY = '#0fa3b1', // BLUE_GREEN

  GREY_100 = '#27242d',
  GREY_090 = '#3d3947',
  GREY_080 = '#5d576b',
  GREY_050 = '#97949e',
  GREY_030 = '#c7c4ce',
  GREY_010 = '#f5f4f6',

  SUCCESS = '#60b269', // SHINY_SHAMROCK
  WARNING = '#f9b84f', // MAXIMUM_YELLOW_RED
  ERROR = '#d33f49', // ENGLISH_VERMILLION

  BLACK = '#000000',
  WHITE = '#ffffff',

  PRIMARY_LIGHT_075 = 'rgba(249, 192, 189, 0.75)',
  PRIMARY_LIGHT_050 = 'rgba(249, 192, 189, 0.5)',
  PRIMARY_LIGHT_025 = 'rgba(249, 192, 189, 0.25)',
  GREY_030_050 = 'rgba(199, 196, 206, 0.5)',
  WHITE_075 = 'rgba(255, 255, 255, 0.75)',
  WHITE_050 = 'rgba(255, 255, 255, 0.5)',
  WHITE_025 = 'rgba(255, 255, 255, 0.25)',
}

export const GRADIENTS = {
  button: `linear-gradient(99.35deg, ${Colors.PRIMARY_LIGHT} -60.52%, ${Colors.PRIMARY} 10.84%, ${Colors.PRIMARY_DARK} 85.38%)`,
  stripe: `repeating-linear-gradient(
    -35deg,
    ${Colors.PRIMARY_DARK} 0 20px,
    ${Colors.PRIMARY_LIGHT} 20px 40px,
    ${Colors.SECONDARY} 40px 60px
  )`,
};
