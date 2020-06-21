import React from 'react';
import { Preview, PreviewProps } from 'explorer-components';

export const StylesPreview: React.FC<Omit<PreviewProps, 'type'>> = props => (
  <Preview type="styles" {...props} />
);
