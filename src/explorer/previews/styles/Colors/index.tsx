import React from 'react';
import { Body, Box, Grid, H4 } from 'components';
import { BorderWidths, BorderRadii, Colors as StyleColors } from 'styles';
import styled from 'styled-components';
import { CopyButton, StylesPreview } from 'explorer-components';

const ColorBox = styled.div<{ showBorder?: boolean; bgcolor: string; }>`
  background-color: ${({ bgcolor }) => bgcolor};
  border: ${({ showBorder }) => showBorder ? `${BorderWidths.MEDIUM} solid ${StyleColors.GREY_090}` : 0};
  border-radius: ${BorderRadii.MEDIUM};
  box-sizing: border-box;
  height: 80px;
  width: 80px;
`;

interface ColorDefinitionProps {
  name: string;
  friendlyName: string;
  color: StyleColors;
  showBorder?: boolean;
}

const ColorDefinition: React.FC<ColorDefinitionProps> = ({ name, friendlyName, color, showBorder }) => {
  const enumValue = `Colors.${name.toUpperCase()}`;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Body align="center" casing="uppercase" spacing={{ marginBottom: 1 }}>
        <small><strong>{name}</strong><br />{friendlyName}</small>
      </Body>

      <ColorBox bgcolor={color} showBorder={showBorder} />

      <CopyButton spacing={{ marginTop: 1 }} text={enumValue} />
      <CopyButton spacing={{ marginTop: 0.5 }} text={color} />
    </Box>
  );
};

export const Colors = () => (
  <StylesPreview title="Colors">
    <Grid container={true} spacing={4}>
      <Grid item={true} xs={12}>
        <Grid container={true} spacing={4} alignItems="center">
          <Grid item={true} xs={2}>
            <H4 align="right">Brand</H4>
          </Grid>

          <Grid item={true} xs={10}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={2}>
                <ColorDefinition name="Primary" friendlyName="Tea Rose" color={StyleColors.PRIMARY} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Primary_light" friendlyName="Spanish Pink" color={StyleColors.PRIMARY_LIGHT} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Primary_dark" friendlyName="Begonia" color={StyleColors.PRIMARY_DARK} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Secondary" friendlyName="Blue Green" color={StyleColors.SECONDARY} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item={true} xs={12}>
        <Grid container={true} spacing={4} alignItems="center">
          <Grid item={true} xs={2}>
            <H4 align="right">Greyscale</H4>
          </Grid>

          <Grid item={true} xs={10}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_100" friendlyName="Raisin Black" color={StyleColors.GREY_100} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_090" friendlyName="Dark Liver" color={StyleColors.GREY_090} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_080" friendlyName="Independence" color={StyleColors.GREY_080} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_050" friendlyName="Manatee" color={StyleColors.GREY_050} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_030" friendlyName="Lavender Grey" color={StyleColors.GREY_030} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_010" friendlyName="Cultured" color={StyleColors.GREY_010} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item={true} xs={12}>
        <Grid container={true} spacing={4} alignItems="center">
          <Grid item={true} xs={2}>
            <H4 align="right">Status</H4>
          </Grid>

          <Grid item={true} xs={10}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={2}>
                <ColorDefinition name="Success" friendlyName="Shiny Shamrock" color={StyleColors.SUCCESS} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Warning" friendlyName="Maximum Yellow Red" color={StyleColors.WARNING} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Error" friendlyName="English Vermillion" color={StyleColors.ERROR} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item={true} xs={12}>
        <Grid container={true} spacing={4} alignItems="center">
          <Grid item={true} xs={2}>
            <H4 align="right">Common</H4>
          </Grid>

          <Grid item={true} xs={10}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={2}>
                <ColorDefinition name="Black" friendlyName="As the Sky" color={StyleColors.BLACK} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="White" friendlyName="As bread" color={StyleColors.WHITE} showBorder={true} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item={true} xs={12}>
        <Grid container={true} spacing={4} alignItems="center">
          <Grid item={true} xs={2}>
            <H4 align="right">RGBA</H4>
          </Grid>

          <Grid item={true} xs={10}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={2}>
                <ColorDefinition name="Primary_light_075" friendlyName="Primary_light 75%" color={StyleColors.PRIMARY_LIGHT_075} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="Grey_030_050" friendlyName="Grey_030 50%" color={StyleColors.GREY_030_050} />
              </Grid>

              <Grid item={true} xs={2}>
                <ColorDefinition name="White_035" friendlyName="White 35%" color={StyleColors.WHITE_035} showBorder={true} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </StylesPreview>
);
