import React from 'react';
import MUGrid, { GridProps } from '@material-ui/core/Grid';

export { GridProps };
export const Grid: React.FC<GridProps> = props => <MUGrid {...props} />
