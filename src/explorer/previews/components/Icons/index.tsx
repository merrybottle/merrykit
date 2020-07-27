import React from 'react';
import { Body, Box, Grid, IconMenu, IconProfile, IconShoppingBasket, IconX, IconSize } from 'components';
import { CopyButton, ComponentsPreview } from 'explorer-components';
import styled from 'styled-components';
import { BorderWidths, BorderRadii, Colors } from 'styles';

const IconContainerBox = styled.div`
  align-items: center;
  border: ${BorderWidths.MEDIUM} solid ${Colors.GREY_090};
  border-radius: ${BorderRadii.MEDIUM};
  box-sizing: border-box;
  color: ${Colors.GREY_080};
  display: flex;
  justify-content: center;
  height: 80px;
  width: 80px;
`;

const IconBox = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Body align="center" casing="uppercase" spacing={{ marginBottom: 1 }}>
      <small><strong>{name}</strong></small>
    </Body>

    <IconContainerBox>
      {icon}
    </IconContainerBox>

    <CopyButton spacing={{ marginTop: 1 }} text={`<Icon${name} size={IconSize.MEDIUM} />`} />
  </Box>
);

export const Icons = () => (
  <ComponentsPreview
    name="Icons"
    description={
      <>
        Icons from <a href="https://icons8.com/icons/cotton" target="_blank">Icons8</a>. Components uses `currentColor` so the css `color` property from the parent will be inherited.
      </>
    }
    props={[
      { name: 'size', type: 'IconSize', optional: true, defaultValue: 'IconSize.MEDIUM' },
      { name: 'fill', type: 'Colors', optional: true }
    ]}
  >
    <Grid container={true} spacing={3}>
      <Grid item={true} xs={4}>
        <IconBox
          name="Menu"
          icon={<IconMenu size={IconSize.XX_LARGE} fill={Colors.GREY_010} />}
        />
      </Grid>

      <Grid item={true} xs={4}>
        <IconBox
          name="Profile"
          icon={<IconProfile size={IconSize.XX_LARGE} />}
        />
      </Grid>

      <Grid item={true} xs={4}>
        <IconBox
          name="ShoppingBasket"
          icon={<IconShoppingBasket size={IconSize.XX_LARGE} fill={Colors.GREY_030} />}
        />
      </Grid>

      <Grid item={true} xs={4}>
        <IconBox
          name="X"
          icon={<IconX size={IconSize.XX_LARGE} fill={Colors.GREY_010} />}
        />
      </Grid>
    </Grid>
  </ComponentsPreview>
);
