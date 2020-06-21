import styled, { css } from 'styled-components';
import { BorderWidths, Colors, spacing2css, SpacingProps } from 'styles';

export interface DividerProps {
  color?: Colors;
  spacing?: SpacingProps;
  size?: BorderWidths;
}

export const Divider = styled.hr<DividerProps>`
  ${({ color, spacing, size}) => css`
    ${spacing ? spacing2css(spacing) : ''}
    border: 0;
    border-top: ${size || BorderWidths.SMALL} solid ${color || Colors.GREY_030};
  `}
`;
