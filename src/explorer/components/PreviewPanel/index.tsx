import React from 'react';
import { Box } from 'components';
import { BorderRadii, Colors } from 'styles';

export const PreviewPanel: React.FC = props => (
  <Box borderRadius={BorderRadii.MEDIUM} bgcolor={Colors.WHITE} marginY={2} marginRight={2} overflow="auto" padding={3} width="100%" {...props} />
);
