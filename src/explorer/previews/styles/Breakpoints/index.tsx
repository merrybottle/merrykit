import React from 'react';
import { Breakpoints as StyleBreakpoints, MEDIA_QUERY } from 'styles';
import { EnumTable, StylesPreview } from 'explorer-components';

export const Breakpoints = () => (
  <StylesPreview title="Breakpoints">
    <EnumTable
      name="Breakpoints"
      enums={[
        { name: 'X_SMALL', value: StyleBreakpoints.X_SMALL },
        { name: 'SMALL', value: StyleBreakpoints.SMALL },
        { name: 'MEDIUM', value: StyleBreakpoints.MEDIUM },
        { name: 'LARGE', value: StyleBreakpoints.LARGE },
        { name: 'X_LARGE', value: StyleBreakpoints.X_LARGE },
      ]}
    />

    <EnumTable
      friendlyName="Media Query"
      name="MEDIA_QUERY"
      enums={[
        { name: 'mobile', value: MEDIA_QUERY.mobile },
        { name: 'mobileLargeMin', value: MEDIA_QUERY.mobileLargeMin },
        { name: 'mobileLargeMax', value: MEDIA_QUERY.mobileLargeMax },
        { name: 'mobileLarge', value: MEDIA_QUERY.mobileLarge },
        { name: 'tabletMin', value: MEDIA_QUERY.tabletMin },
        { name: 'tabletMax', value: MEDIA_QUERY.tabletMax },
        { name: 'tablet', value: MEDIA_QUERY.tablet },
        { name: 'desktopMin', value: MEDIA_QUERY.desktopMin },
        { name: 'desktopMax', value: MEDIA_QUERY.desktopMax },
        { name: 'desktop', value: MEDIA_QUERY.desktop },
        { name: 'wide', value: MEDIA_QUERY.wide },
        { name: 'customMin', value: '' },
        { name: 'customMax', value: '' },
        { name: 'customBetween', value: '' },
      ]}
      spacing={{ marginTop: 5 }}
    />
  </StylesPreview>
);
