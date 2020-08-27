import React from 'react';
import MUBox, { BoxProps as MUIBoxProps } from '@material-ui/core/Box';
import { SpacingProps } from 'styles';

export interface BoxProps extends MUIBoxProps {
  spacing?: SpacingProps;
}

export const Box: React.FC<BoxProps> = props => <MUBox {...props} />
