import React from 'react';
import { Body, Box, H3, H4 } from 'components';
import { BorderRadii, BorderWidths, Colors, spacing2css, SpacingProps } from 'styles';
import styled from 'styled-components';
import { CopyButton } from 'explorer-components';

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

export interface EnumTableProps {
  friendlyName?: string;
  name: string;
  copy?: boolean;
  enums: {
    name: string;
    value: string | number | boolean;
  }[],
  spacing?: SpacingProps
}

export const EnumTable: React.FC<EnumTableProps> = ({ friendlyName, name, copy = true, enums, spacing }) => (
  <Box {...spacing}>
    <H3 spacing={{ marginBottom: 2 }}>{friendlyName || name}</H3>

    <Table>
      <thead>
        <tr>
          <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Name</H4>
          <H4 as="th" spacing={{ paddingX: 2, paddingY: 1 }}>Value</H4>
          {copy && <th />}
        </tr>
      </thead>

      <tbody>
        {enums.map(({ name: enumName, value }) => (
          <tr>
            <Body as="th" spacing={{ paddingX: 2, paddingY: 0.75 }}>{enumName}</Body>
            <Body as="td" spacing={{ paddingX: 2, paddingY: 0.75 }}>{value}</Body>
            {copy && <Td><CopyButton text={`${name}.${enumName}`} /></Td>}
          </tr>
        ))}
      </tbody>
    </Table>
  </Box>
);
