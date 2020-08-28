import styled from 'styled-components';
import { spacing2css, SpacingProps } from 'styles';

export interface SpacingBoxProps {
  spacing: SpacingProps;
}

export const SpacingBox = styled.div<SpacingBoxProps>`
  ${({ spacing }) => spacing2css(spacing)}
`;
