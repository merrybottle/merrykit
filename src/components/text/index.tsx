import React from 'react';
import styled from 'styled-components';
import { Colors, FontFamily, FontWeight, SpacingProps, spacing2css, MEDIA_QUERY } from 'styles';

interface TextProps {
  color?: Colors;
}

export const Masthead = styled.h1<TextProps>`
  color: ${({ color }) => color || Colors.BLACK};
  font-family: ${FontFamily.VOLLKORN_SC};
  font-size: 32px;
  font-weight: ${FontWeight.VOLLKORN_SC_BOLD};
  line-height: 45px;
  margin: 0;
  padding: 0;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 42px;
    line-height: 59px;
  }
`;

export const H1 = styled.h1<TextProps>`
  color: ${({ color }) => color || Colors.GREY_100};
  font-family: ${FontFamily.VOLLKORN};
  font-size: 26px;
  font-weight: ${FontWeight.VOLLKORN_BOLD},
  line-height: 36px;
  margin: 0;
  padding: 0;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const H2 = styled.h2<TextProps>`
  color: ${({ color }) => color || Colors.GREY_100};
  font-family: ${FontFamily.VOLLKORN};
  font-size: 22px;
  font-weight: ${FontWeight.VOLLKORN_SEMI_BOLD};
  line-height: 31px;
  margin: 0;
  padding: 0;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 28px;
    line-height: 39px;
  }
`;

export const H3 = styled.h3<TextProps>`
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamily.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeight.MONTSERRAT_SEMI_BOLD};
  letter-spacing: 0.06em;
  line-height: 22px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 18px;
    font-weight: ${FontWeight.MONTSERRAT_BOLD};
    line-height: 25px;
  }
`;

export const H4 = styled.h4<TextProps>`
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamily.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeight.MONTSERRAT_MEDIUM};
  letter-spacing: 0.06em;
  line-height: 22px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  ${MEDIA_QUERY.desktopMin} {
    font-weight: ${FontWeight.MONTSERRAT_BOLD};
  }

  small {
    font-weight: ${FontWeight.MONTSERRAT_BOLD};
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Body = styled.p<TextProps>`
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamily.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeight.MONTSERRAT_LIGHT};
  line-height: 22px;
  margin: 0;
  padding: 0;

  small {
    font-size: 12px;
    line-height: 17px;
  }
`;
