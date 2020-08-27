import React from 'react';
import MUContainer, { ContainerProps as MUIContainerProps } from '@material-ui/core/Container';
import { SpacingProps } from 'styles';

export interface ContainerProps extends MUIContainerProps {
  spacing?: SpacingProps;
}

export const Container: React.FC<ContainerProps> = props => <MUContainer {...props} />
