import MUBox, { BoxProps as MUIBoxProps } from '@material-ui/core/Box';
import { spacing2css, SpacingProps } from 'styles';
import styled from 'styled-components';

export interface BoxProps extends MUIBoxProps {
  spacing?: SpacingProps;
}

export const Box = styled(MUBox)<BoxProps>`
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
`;
