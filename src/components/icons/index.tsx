import React from 'react';
import { Colors } from 'styles';

export enum IconSize {
  XXX_SMALL = 2,
  XX_SMALL = 4,
  X_SMALL = 8,
  SMALL = 16,
  MEDIUM = 24,
  LARGE = 32,
  X_LARGE = 40,
  XX_LARGE = 48,
  XXX_LARGE = 56
}

export interface IconProps {
  size?: IconSize;
  fill?: Colors;
}

const defaultSize = IconSize.MEDIUM;

export const IconFacebook = ({ size = defaultSize }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path
      fill="currentColor"
      d="M70.7,112H52c-1.7,0-3-1.3-3-3V67h-5.9c-1.7,0-3-1.3-3-3s1.3-3,3-3H52c1.7,0,3,1.3,3,3v42h12.7V64c0-1.7,1.3-3,3-3h9.9l1-9.9H70.7c-1.7,0-3-1.3-3-3v-9.3c0-5.1,3.5-7.3,7-7.3h7.1V22l-10.9,0C66.1,22,55,23.5,55,37.9v10.3c0,1.7-1.3,3-3,3h-8.9c-1.7,0-3-1.3-3-3s1.3-3,3-3H49v-7.3C49,27.8,54.7,16,70.8,16l13.9,0.1c1.7,0,3,1.3,3,3v15.4c0,1.7-1.3,3-3,3H74.6c-0.6,0-1,0-1,1.3v6.3h11.2c0.8,0,1.7,0.4,2.2,1c0.6,0.6,0.8,1.5,0.8,2.3l-1.6,15.9c-0.2,1.5-1.4,2.7-3,2.7h-9.6v42C73.7,110.7,72.3,112,70.7,112z"
    />
    <path
      fill="currentColor"
      d="M84.7 112H42c-1.7 0-3-1.3-3-3s1.3-3 3-3h42.7c1.7 0 3 1.3 3 3S86.3 112 84.7 112zM100.7 112c-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.5 1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.3.9 2.1s-.3 1.6-.9 2.1C102.2 111.7 101.5 112 100.7 112z"
    />
  </svg>
);

export const IconInstagram = ({ size = defaultSize }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path
      fill="currentColor"
      d="M86.2,107H41.8C30.3,107,21,97.7,21,86.2V41.8C21,30.3,30.3,21,41.8,21h44.4c11.5,0,20.8,9.3,20.8,20.8v44.4C107,97.7,97.7,107,86.2,107z M41.8,27C33.6,27,27,33.6,27,41.8v44.4c0,8.1,6.6,14.8,14.8,14.8h44.4c8.1,0,14.8-6.6,14.8-14.8V41.8c0-8.1-6.6-14.8-14.8-14.8H41.8z"
    />
    <path
      fill="currentColor"
      d="M64,82c-9.9,0-18-8.1-18-18c0-1.7,1.3-3,3-3s3,1.3,3,3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12c-1.7,0-3-1.3-3-3s1.3-3,3-3c9.9,0,18,8.1,18,18S73.9,82,64,82z"
    />
    <path
      fill="currentColor"
      d="M53.8 55.9c-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.4.3-.5.1-.2.2-.3.4-.5 1.1-1.1 3.1-1.1 4.2 0 .1.1.3.3.4.5.1.2.2.3.3.5.1.2.1.4.2.6 0 .2.1.4.1.6 0 .8-.3 1.6-.9 2.1C55.4 55.6 54.6 55.9 53.8 55.9zM86 38A4 4 0 1 0 86 46 4 4 0 1 0 86 38z"
    />
  </svg>
);

export const IconMenu = ({ size = defaultSize, fill }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path fill={fill} d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z" />
    <path
      fill={fill ? 'none' : 'currentColor'}
      d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
    />
    <path
      fill="currentColor"
      d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
    />
    <path
      fill="currentColor"
      d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
    />
  </svg>
);

export const IconProfile = ({ size = defaultSize }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path
      fill="currentColor"
      d="M47.7 91.2c2.1 0 4.3-.2 6.7-.5 1.6-.2 2.8-1.7 2.6-3.3-.2-1.6-1.7-2.8-3.3-2.6-7 .8-11.9.6-19.2-2.9C27 78.3 23.8 69.4 27.3 62l1.7-3.5c1.7-3.7 2.5-7.8 2.2-11.9L45 40.3c1.5-.7 2.2-2.5 1.5-4-.7-1.5-2.5-2.2-4-1.5l-13.8 6.4c-2.2 1-3.6 3.4-3.5 5.9.2 3-.4 6.1-1.7 8.9l-1.7 3.5c-4.9 10.4-.4 22.9 10 27.8C37.9 90.2 42.7 91.2 47.7 91.2zM74.6 75.1c.1.1.2.2.4.2.1.1.3.1.4.1 1.4.4 2.9-.2 3.6-1.5 0 0 0 0 0 0v0l0 0c.7-1.5.1-3.3-1.4-4-1.5-.7-3.3-.1-4 1.4v0l0 0c0 0 0 0 0 .1C72.9 72.7 73.3 74.3 74.6 75.1z"
    />
    <path
      fill="currentColor"
      d="M89.6 7.5c-17.6-8.3-34-1.9-44 17.2-.6 1.1-.7 2.5-.3 3.6.4 1.2 1.3 2.1 2.4 2.7 1.1.5 2.3.6 3.5.1 0 0 0 0 0 0l6.4-2.3c1.8-.7 3.8.6 4 2.5.3 3.7 1.2 7.6 2.3 11.7 1.1 4.6 2.3 14.1 2.9 19.6.2 2 2.4 3.2 4.2 2.4l1.1-.5c0 0 0 0 0 0 2.9-1.5 6.5-1.4 9.5.8 3 2.2 4.3 6.2 3.2 9.8-1.5 5-6.8 7.5-11.5 5.9 0 0 0 0 0 0l-2.1-.7c-1.9-.6-3.9.8-3.9 2.8 0 1.3 0 2.4 0 3.4-.1 3.5 1.9 6.7 4.9 8.1.2.1.4.2.6.3.6.2 1.1.3 1.6.4 13.6 1.3 32.8.6 42.6-20 6.5-13.7.1-31-4.3-40.1C106.3 22.2 97 11 89.6 7.5zM63.6 104.7v-6.8c0-.9-.4-1.8-1.2-2.4s-1.7-.8-2.6-.5c-17.5 4.3-28.1-2-28.2-2-1.4-.9-3.3-.5-4.1 1-.9 1.4-.5 3.3 1 4.1.2.1 2.7 1.7 7.2 2.9l-2.8 22.7c-.2 1.6 1 3.1 2.6 3.3.1 0 .3 0 .4 0 0 0 0 0 0 0h34.6c0 0 0 0 0 0 .2 0 .4 0 .7-.1 1.6-.4 2.6-2 2.3-3.6C71.3 114.1 65.8 107.1 63.6 104.7z"
    />
  </svg>
);

export const IconShoppingBasket = ({ size = defaultSize, fill }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path
      fill={fill}
      d="M13.6,49.8h100.8c2.5,0,4.6,2,4.6,4.5v9.2c0,2.5-2.1,4.6-4.6,4.6h-4.6l-7.9,42.3 c-0.7,4.399-4.601,7.699-9,7.699H35.1c-4.5,0-8.3-3.199-9-7.699l-7.9-42.3h-4.6C11.1,68.1,9,66,9,63.5v-9.2 C9,51.7,11.1,49.8,13.6,49.8"
    />
    <path
      fill={fill}
      d="M119,63.4c0,2.5-2.1,4.6-4.6,4.6H18.3l0.813,4.985l0.788,4.222L97.2,82.2l-4.4,28.2 c-0.7,4.5-4.5,7.699-9,7.699h9.1c4.399,0,8.3-3.3,9-7.699l7.9-42.3h0.101h4.5c2.5,0,4.6-2.1,4.6-4.6L119,63.4"
    />
    <path
      fill={fill}
      d="M13.6,68h100.8c2.5,0,4.6-2.1,4.6-4.6v-9.2c0-2.5-2.1-4.5-4.6-4.5H13.6c-2.5,0-4.6,2-4.6,4.5v9.2 C9,65.9,11.1,68,13.6,68"
    />
    <path
      fill={fill}
      d="M114.4,49.7h-12.2c2.5,0,4.6,2,4.6,4.5v9.2c0,2.5-2,4.6-4.6,4.6h12.2c2.5,0,4.6-2.1,4.6-4.6v-9.2 C119,51.7,116.9,49.7,114.4,49.7"
    />
    <path
      fill={Colors.WHITE}
      d="M98.4 55.3A3.5 3.5 0 1 0 98.4 62.3 3.5 3.5 0 1 0 98.4 55.3zM29.6 55.3A3.5 3.5 0 1 0 29.6 62.3 3.5 3.5 0 1 0 29.6 55.3zM63.9 106.8c-1.7 0-3-1.3-3-3V82.2c0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3v21.7C66.9 105.5 65.5 106.8 63.9 106.8zM45.6 106.8c-1.7 0-3-1.3-3-3V82.2c0-1.7 1.3-3 3-3s3 1.3 3 3v21.7C48.6 105.5 47.2 106.8 45.6 106.8zM82.2 106.8c-1.7 0-3-1.3-3-3V82.2c0-1.7 1.3-3 3-3s3 1.3 3 3v21.7C85.2 105.5 83.9 106.8 82.2 106.8z"
    />
    <path
      fill="currentColor"
      d="M114 47H14c-4.411 0-8 3.589-8 8v8c0 4.411 3.589 8 8 8h1.6l8.1 43.7c.6 3.6 3.8 6.3 7.5 6.3h65.6c3.7 0 6.9-2.7 7.3-6.3l8.1-43.7h1.8c4.411 0 8-3.589 8-8v-8C122 50.589 118.411 47 114 47zM98.5 113.9c-.2.699-.8 1.3-1.6 1.3H31.3c-.8 0-1.5-.601-1.6-1.4L21.8 71h84.6L98.5 113.9zM116 63c0 1.103-.897 2-2 2H14c-1.103 0-2-.897-2-2v-8c0-1.103.897-2 2-2h100c1.103 0 2 .897 2 2V63zM45.6 40.7c-.6 0-1.3-.2-1.8-.6-1.3-1-1.6-2.9-.6-4.2l18.4-24.6c.6-.8 1.5-1.2 2.4-1.2s1.8.4 2.4 1.2l18.2 24.3c1 1.3.7 3.2-.6 4.2s-3.2.7-4.2-.6L64 18.1 48 39.5C47.4 40.3 46.5 40.7 45.6 40.7z"
    />
  </svg>
);

export const IconX = ({ size = defaultSize, fill }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    height={size}
    width={size}
  >
    <path fill={fill} d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z" />
    <path
      fill={fill ? 'none' : 'currentColor'}
      d="M64,117c-14.2,0-27.5-5.5-37.5-15.5c-20.7-20.7-20.7-54.3,0-75C36.5,16.5,49.8,11,64,11c14.2,0,27.5,5.5,37.5,15.5c10,10,15.5,23.3,15.5,37.5s-5.5,27.5-15.5,37.5C91.5,111.5,78.2,117,64,117z M64,17c-12.6,0-24.4,4.9-33.2,13.8c-18.3,18.3-18.3,48.1,0,66.5C39.6,106.1,51.4,111,64,111c12.6,0,24.4-4.9,33.2-13.8S111,76.6,111,64s-4.9-24.4-13.8-33.2S76.6,17,64,17z"
    />
    <path
      fill="currentColor"
      d="M53.4,77.6c-0.8,0-1.5-0.3-2.1-0.9c-1.2-1.2-1.2-3.1,0-4.2l21.2-21.2c1.2-1.2,3.1-1.2,4.2,0c1.2,1.2,1.2,3.1,0,4.2L55.5,76.7C54.9,77.3,54.2,77.6,53.4,77.6z"
    />
    <path
      fill="currentColor"
      d="M74.6,77.6c-0.8,0-1.5-0.3-2.1-0.9L51.3,55.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0l21.2,21.2c1.2,1.2,1.2,3.1,0,4.2C76.1,77.3,75.4,77.6,74.6,77.6z"
    />
  </svg>
);