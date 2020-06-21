import React from 'react';
import { Body, Box, Divider, Masthead, H2, H4 } from 'components';
import { BorderRadii, Colors } from 'styles';
import styled from 'styled-components';
import { ComponentsPreview } from './ComponentsPreview';
import { PropsTable } from 'explorer-components';
import { StylesPreview } from './StylesPreview';

const TypeBox = styled(Box).attrs({
  paddingX: 1.5,
  paddingY: 0.5
})`
  background-color: ${Colors.GREY_010};
  border-radius: ${BorderRadii.LARGE};
`;

export interface PreviewPropsType {
  name: string;
  type: string;
  optional?: boolean;
  defaultValue?: any;
}

export interface PreviewProps {
  type: 'styles' | 'components';
  title: string;
  description?: string;
  props?: PreviewPropsType[];
}

export const Preview: React.FC<PreviewProps> = ({ children, type, title, description, props }) => (
  <Box display="block">
    <Box display="flex" alignItems="center">
      <TypeBox>
        <H4 color={Colors.GREY_050}><small>{type}</small></H4>
      </TypeBox>

      <Masthead spacing={{ marginLeft: 3 }}>{title}</Masthead>
    </Box>

    {description &&
      <>
        <Divider spacing={{ marginTop: 3 }} />
        <Body spacing={{ marginTop: 3 }}>{description}</Body>
      </>
    }

    {type !== 'styles' &&
      <>
        <Divider spacing={{ marginY: 3 }} />

        <H2 spacing={{ marginBottom: 2 }}>Props</H2>

        {props && props.length ? (
          <PropsTable propValues={props} />
        ) : (
          <Body>Not necessary!</Body>
        )}
      </>
    }

    <Divider spacing={{ marginTop: 3, marginBottom: 5 }} />

    <Box>
      {children}
    </Box>
  </Box>
);

export { ComponentsPreview };
export { StylesPreview };
