import { Preview, PreviewProps } from 'explorer-components';
import { getComponentDoc } from 'explorer-utils';
import React from 'react';

export const ComponentsPreview: React.FC<
  Omit<PreviewProps, 'type' | 'title'> & { name: string }
> = ({ name, ...rest }) => {
  const componentDoc = getComponentDoc(name) || { title: name };

  return <Preview type="components" {...componentDoc} {...rest} />;
};
