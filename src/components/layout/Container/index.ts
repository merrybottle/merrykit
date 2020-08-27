import MUContainer, { ContainerProps as MUIContainerProps } from '@material-ui/core/Container';
import { spacing2css, SpacingProps } from 'styles';
import styled from 'styled-components';

export interface ContainerProps extends MUIContainerProps {
  spacing?: SpacingProps;
}

export const Container = styled(MUContainer)<ContainerProps>`
  ${({ spacing }) => spacing ? spacing2css(spacing) : ''}
`;
