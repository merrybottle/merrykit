import React from 'react';
import MUContainer, { ContainerProps } from '@material-ui/core/Container';

export { ContainerProps };
export const Container: React.FC<ContainerProps> = props => <MUContainer {...props} />
