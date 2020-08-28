import { Button as MKButton, H3 } from 'components';
import { ComponentsPreview } from 'explorer-components';
import React from 'react';

export const Button = () => (
  <ComponentsPreview name="Button">
    <H3 spacing={{ marginBottom: 2 }}>Default</H3>
    <MKButton>Stuff</MKButton>

    <H3 spacing={{ marginBottom: 2, marginTop: 3 }}>Default - loading</H3>
    <MKButton loading={true}>Stuff</MKButton>

    <H3 spacing={{ marginBottom: 2, marginTop: 3 }}>Default - disabled</H3>
    <MKButton disabled={true}>Stuff</MKButton>

    <H3 spacing={{ marginBottom: 2, marginTop: 3 }}>Secondary</H3>
    <MKButton kind="secondary">Stuff</MKButton>

    <H3 spacing={{ marginBottom: 2, marginTop: 3 }}>Secondary - disabled</H3>
    <MKButton kind="secondary" disabled={true}>
      Stuff
    </MKButton>

    <H3 spacing={{ marginBottom: 2, marginTop: 3 }}>Secondary - loading</H3>
    <MKButton kind="secondary" loading={true}>
      Stuff
    </MKButton>
  </ComponentsPreview>
);
