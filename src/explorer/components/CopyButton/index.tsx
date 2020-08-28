import { Body } from 'components';
import React from 'react';
import styled from 'styled-components';
import { BorderWidths, Colors, spacing2css, SpacingProps } from 'styles';

const ButtonText = styled(Body).attrs({
  as: 'span',
  color: Colors.GREY_100,
})`
  font-size: 8px;
  line-height: 8px;
`;

const Button = styled.button<{ spacing?: SpacingProps }>`
  ${({ spacing }) => (spacing ? spacing2css(spacing) : '')}
  ${spacing2css({ paddingX: 1, paddingY: 0.25 })}
  background-color: ${Colors.GREY_010};
  border: ${BorderWidths.SMALL} solid ${Colors.GREY_030};
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  transition: 0.2s;

  :hover {
    background-color: ${Colors.GREY_030};

    ${ButtonText} {
      color: ${Colors.WHITE};
    }
  }
`;

const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
};

export const CopyButton: React.FC<{ spacing?: SpacingProps; text: string }> = ({
  children,
  spacing,
  text,
}) => (
  <Button onClick={() => copyToClipboard(text)} spacing={spacing}>
    <ButtonText>{children || text}</ButtonText>
  </Button>
);
