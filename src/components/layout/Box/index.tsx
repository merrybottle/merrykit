import React from 'react';
import MUBox, { BoxProps } from '@material-ui/core/Box';

export { BoxProps };
export const Box: React.FC<BoxProps> = props => <MUBox {...props} />
