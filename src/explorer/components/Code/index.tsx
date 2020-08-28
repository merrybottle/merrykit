import { CopyButton } from 'explorer-components';
import React from 'react';
import styled from 'styled-components';
import { BorderRadii, BorderWidths, Colors, spacing2css } from 'styles';

export const CodeWrapper = styled.div`
  ${spacing2css({ paddingBottom: 2, paddingTop: 3, paddingX: 3 })}
  background-color:  ${Colors.GREY_010};
  border: ${BorderWidths.MEDIUM} solid ${Colors.GREY_030};
  border-radius: ${BorderRadii.LARGE};
`;

export const Pre = styled.pre`
  color: ${Colors.GREY_080};
  margin: 0;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

export const Code: React.FC = ({ children }) => (
  <CodeWrapper>
    <code>
      <Pre>{children}</Pre>
    </code>

    <CopyButton text={children?.toString() || ''} spacing={{ marginTop: 2 }}>
      Copy
    </CopyButton>
  </CodeWrapper>
);
