import { Preview, PreviewProps } from 'explorer-components';
import React from 'react';

export const StylesPreview: React.FC<Omit<PreviewProps, 'type'>> = (props) => (
  <Preview type="styles" {...props} />
);
