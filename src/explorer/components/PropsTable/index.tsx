import React from 'react';
import { Body, H4 } from 'components';
import { BorderRadii, BorderWidths, Colors, spacing2css } from 'styles';
import styled from 'styled-components';
import { PreviewPropsType } from 'explorer-components';

const Td = styled.td`
  ${spacing2css({ paddingX: 2, paddingY: 0.75 })}
  vertical-align: middle;
`;

const Table = styled.table`
  border: ${BorderWidths.SMALL} solid ${Colors.GREY_050};
  border-radius: ${BorderRadii.X_LARGE};
  border-spacing: 0;

  thead th {
    border-bottom: ${BorderWidths.SMALL} solid ${Colors.GREY_050};
  }

  tbody {
    th, td:not(${Td}) {
      vertical-align: top;
    }
  }

  th,
  td {
    text-align: left;
  }
`;

export const PropsTable: React.FC<{ propValues: PreviewPropsType[] }> = ({ propValues }) => (
  <Table>
    <thead>
      <tr>
        <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Name</H4>
        <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Type</H4>
        <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Optional</H4>
        <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Default Value</H4>
      </tr>
    </thead>

    <tbody>
      {propValues.map(({ name, type, optional, defaultValue }) => (
        <tr key={name}>
          <Body as="th" spacing={{ paddingX: 2, paddingY: 0.75 }}>{name}</Body>
          <Body as="td" spacing={{ paddingX: 2, paddingY: 0.75 }}>{type}</Body>
          <Body as="td" spacing={{ paddingX: 2, paddingY: 0.75 }}>{optional ? 'Yes' : ''}</Body>
          <Body as="td" spacing={{ paddingX: 2, paddingY: 0.75 }}>{defaultValue || ''}</Body>
        </tr>
      ))}
    </tbody>
  </Table>
);
