import React from 'react';
import styled, { css } from 'styled-components';
import { Colors, FontFamilies, FontWeights, MEDIA_QUERY, spacing2css, SpacingProps } from 'styles';

export interface TextProps {
  as?: React.ElementType;
  align?: 'left' | 'center' | 'right';
  casing?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: Colors;
  spacing?: SpacingProps;
}

export const Masthead = styled.h1<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.BLACK};
  font-family: ${FontFamilies.VOLLKORN_SC};
  font-size: 32px;
  font-weight: ${FontWeights.VOLLKORN_SC_BOLD};
  line-height: 45px;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 42px;
    line-height: 59px;
  }
`;

export const H1 = styled.h1<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.GREY_100};
  font-family: ${FontFamilies.VOLLKORN};
  font-size: 26px;
  font-weight: ${FontWeights.VOLLKORN_BOLD},
  line-height: 36px;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const H2 = styled.h2<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.GREY_100};
  font-family: ${FontFamilies.VOLLKORN};
  font-size: 22px;
  font-weight: ${FontWeights.VOLLKORN_SEMI_BOLD};
  line-height: 31px;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 28px;
    line-height: 39px;
  }
`;

export const H3 = styled.h3<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamilies.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeights.MONTSERRAT_SEMI_BOLD};
  letter-spacing: 0.06em;
  line-height: 22px;
  text-transform: uppercase;

  ${MEDIA_QUERY.desktopMin} {
    font-size: 18px;
    font-weight: ${FontWeights.MONTSERRAT_BOLD};
    line-height: 25px;
  }
`;

export const H4 = styled.h4<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamilies.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeights.MONTSERRAT_MEDIUM};
  letter-spacing: 0.06em;
  line-height: 22px;
  text-transform: uppercase;

  ${MEDIA_QUERY.desktopMin} {
    font-weight: ${FontWeights.MONTSERRAT_BOLD};
  }

  small {
    font-weight: ${FontWeights.MONTSERRAT_BOLD};
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Body = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.GREY_090};
  font-family: ${FontFamilies.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeights.MONTSERRAT_LIGHT};
  line-height: 22px;

  small {
    font-size: 12px;
    line-height: 17px;
  }

  strong,
  small strong {
    font-weight: ${FontWeights.MONTSERRAT_MEDIUM};
  }
`;

export const Link = styled.a<TextProps>`
  margin: 0;
  padding: 0;
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
  ${({ align }) => align ? css`text-align: ${align};`: ''}
  ${({ casing }) => casing ? css`text-transform: ${casing};`: ''}
  color: ${({ color }) => color || Colors.SECONDARY};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: underline;
  transition: 0.2s ease-in;

  :active,
  :focus,
  :hover {
    opacity: 0.6;
  }

  :visited {
    opacity: 0.4;
  }
`;
