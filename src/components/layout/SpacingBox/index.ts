import { spacing2css, SpacingProps } from 'styles';
import styled from 'styled-components';

export interface SpacingBoxProps {
  spacing: SpacingProps;
}

export const SpacingBox = styled.div<SpacingBoxProps>`
  ${({ spacing }) => spacing2css(spacing)}
`;
