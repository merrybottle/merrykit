import React from 'react';
import styled from 'styled-components';
import { Colors, FontFamily, FontWeight, GRADIENTS, MEDIA_QUERY } from 'styles';

const MOBILE_HEIGHT = 44;
const DESKTOP_HEIGHT = 48;
const FOCUS_BORDER_SIZE = 5;
const TOP_PADDING = 2;
const MOBILE_LINE_HEIGHT = MOBILE_HEIGHT - TOP_PADDING;
const DESKTOP_LINE_HEIGHT = DESKTOP_HEIGHT - TOP_PADDING;

const Button = styled.button`
  background: ${GRADIENTS.primary};
  border: 0;
  border-radius: ${MOBILE_HEIGHT / 2}px;
  box-sizing: border-box;
  color: ${Colors.WHITE};
  font-family: ${FontFamily.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeight.MONTSERRAT_SEMI_BOLD};
  height: ${MOBILE_HEIGHT}px;
  letter-spacing: 0.02em;
  line-height: ${MOBILE_LINE_HEIGHT}px;
  margin: 0;
  min-width: 180px;
  padding: 0;
  padding-top: ${TOP_PADDING}px;
  text-align: center;

  ${MEDIA_QUERY.desktopMin} {
    border-radius: ${DESKTOP_HEIGHT / 2}px;
    height: ${DESKTOP_HEIGHT}px;
    line-height: ${DESKTOP_LINE_HEIGHT}px;
    min-width: 200px;
  }

  :focus {
    border: ${FOCUS_BORDER_SIZE}px solid ${Colors.WHITE_035};
    line-height: ${MOBILE_LINE_HEIGHT - (FOCUS_BORDER_SIZE * 2)}px;
    outline: none;

    ${MEDIA_QUERY.desktopMin} {
      line-height: ${DESKTOP_LINE_HEIGHT - (FOCUS_BORDER_SIZE * 2)}px;
    }
  }

  :hover {
    border: 0;
    box-shadow: 0 0 0 8px ${Colors.PRIMARY_LIGHT_075};
  }
`;

export default Button;
