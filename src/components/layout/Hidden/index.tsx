import React from 'react';
import MUHidden, { HiddenProps } from '@material-ui/core/Hidden';

export { HiddenProps };
export const Hidden: React.FC<HiddenProps> = props => <MUHidden {...props} />
