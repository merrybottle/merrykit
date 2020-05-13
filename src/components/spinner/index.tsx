import React from 'react';
import Styled, { keyframes } from 'styled-components';
import { Colors, AnimationDurations } from 'styles';

export const Spinner = () => (
  <StyledSpinnerSvg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
    <path d="
      M 50,20
      a 30,30 0 1,1 0,60
      a 30,30 0 1,1 0,-60
      " stroke={Colors.WHITE} strokeOpacity="0.5" strokeWidth="12" fill="none" />
    <path d="
      M 50,20
      a 30,30 0 0,1 30,30
      " stroke={Colors.WHITE} strokeOpacity="1" strokeWidth="15" fill="none" />
  </StyledSpinnerSvg>
);

const spinningAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinnerSvg = Styled.svg`
  animation: ${spinningAnimation} ${AnimationDurations.SPINNER}ms linear infinite;
`;
