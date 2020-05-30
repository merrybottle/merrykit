import React from 'react';
import styled from 'styled-components';
import { AnimationDelay, AnimationDurations, Colors, FontFamily, FontWeight, GRADIENTS, MEDIA_QUERY, spacing2css } from 'styles';
import { Spinner } from 'components/spinner';

const MOBILE_HEIGHT = 44;
const DESKTOP_HEIGHT = 48;
const TOP_PADDING = 2;
const MOBILE_LINE_HEIGHT = MOBILE_HEIGHT - TOP_PADDING;
const DESKTOP_LINE_HEIGHT = DESKTOP_HEIGHT - TOP_PADDING;

interface ButtonTextProps {
  children: string | JSX.Element | JSX.Element[];
}

export interface ButtonProps extends ButtonTextProps {
  kind?: 'default' | 'secondary';
  loading?: boolean;
}

export const Button = ({
  children,
  kind = 'default',
  loading = false,
  ...props
}: ButtonProps) => (
  <StyledButton kind={kind} loading={loading} {...props}>
    {loading && kind === 'default' &&
      <StyledSpinnerContainer>
        <Spinner />
      </StyledSpinnerContainer>
    }

    {!loading &&
      <StyledButtonSpan>{children}</StyledButtonSpan>
    }
  </StyledButton>
);

const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  border: 0;
  box-sizing: border-box;
  font-family: ${FontFamily.MONTSERRAT};
  font-size: 16px;
  font-weight: ${FontWeight.MONTSERRAT_SEMI_BOLD};
  height: ${MOBILE_HEIGHT}px;
  line-height: ${MOBILE_LINE_HEIGHT}px;
  margin: 0;
  padding: 0;
  padding-top: ${TOP_PADDING}px;
  text-align: center;

  ${MEDIA_QUERY.desktopMin} {
    height: ${DESKTOP_HEIGHT}px;
    line-height: ${DESKTOP_LINE_HEIGHT}px;
  }

  :focus {
    outline: none;
  }

  :hover {
    border: 0;
    cursor: ${({ loading }) => loading ? 'not-allowed' : 'pointer'};
  }

  :disabled {
    cursor: not-allowed;
  }

  ${({ kind, loading }) => {
    switch (kind) {
      case 'secondary':
        return `
          ${spacing2css({ paddingHorizontal: 0.25 })};
          color: ${Colors.GREY_100};
          letter-spacing: 0.06em;
          position: relative;

          &::before,
          &::after {
            border-radius: 1px;
            content: '';
            display: block;
            height: 2px;
            position: absolute;
            top: 36px;
            transition: ${AnimationDurations.DEFAULT}ms ease-in;
          }

          &::before {
            background-color: ${Colors.GREY_100};
            left: 0;
            right: 0;
            transition-delay: ${AnimationDelay.DEFAULT}ms;
          }

          &::after {
            background: ${GRADIENTS.button};
            left: 100%;
            right: 0;
          }

          :disabled {
            color: ${Colors.GREY_030};

            &::before {
              background-color: ${Colors.GREY_030};
            }
          }

          :not(:disabled) {
            :focus::before,
            :hover::before {
              right: 100%;
              transition-delay: 0ms;
            }

            :focus::after,
            :hover::after {
              left: 0;
              transition-delay: ${AnimationDelay.DEFAULT}ms;
            }
          }
        `;
        break;

      default:
        return `
          background: ${GRADIENTS.button};
          border-radius: ${MOBILE_HEIGHT / 2}px;
          box-shadow: 0 0 0 0 transparent;
          color: ${Colors.WHITE};
          letter-spacing: 0.02em;
          min-width: 180px;
          overflow: hidden;
          position: relative;

          ${MEDIA_QUERY.desktopMin} {
            border-radius: ${DESKTOP_HEIGHT / 2}px;
            min-width: 200px;
          }

          :disabled {
            background: ${Colors.GREY_010};
            box-shadow: 0 0 0 5px ${Colors.GREY_030_050};
            color: ${Colors.GREY_030};
          }

          &::before,
          &::after {
            content: '';
            display: block;
            height: ${DESKTOP_HEIGHT * 3}px;
            position: absolute;
            top: -100%;
            transform: rotate(39deg);
            width: 0;
            z-index: 0;
          }

          &,
          &::before,
          &::after {
            transition: ${AnimationDurations.DEFAULT}ms ease-in;
          }

          &::before {
            background-color: ${Colors.PRIMARY};
            left: 0;
          }

          &::after {
            background-color: ${Colors.PRIMARY_DARK};
            right: 0;
          }

          ${loading ? '' : `
            :not(:disabled):focus,
            :not(:disabled):hover {
              box-shadow: 0 0 0 8px ${Colors.PRIMARY_LIGHT_075};

              &::before,
              &::after {
                width: 50%;
              }
            }
          `}
        `;
    }
  }}
`;

const StyledButtonSpan = styled.span<ButtonTextProps>`
  position: relative;
  z-index: 1;
`;

const StyledSpinnerContainer = styled.span`
  ${spacing2css({ marginTop: 0.25 })};
  display: inline-block;
  height: 36px;
  width: 36px;

  ${MEDIA_QUERY.desktopMin} {
    ${spacing2css({ marginTop: 0.5 })};
  }
`;
