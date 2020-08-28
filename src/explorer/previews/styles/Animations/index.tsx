import { EnumTable, StylesPreview } from 'explorer-components';
import React from 'react';
import { AnimationDelay, AnimationDurations } from 'styles';

export const Animations = () => (
  <StylesPreview title="Animations">
    <EnumTable
      friendlyName="Animation Durations"
      name="AnimationDurations"
      enums={[
        { name: 'DEFAULT', value: AnimationDurations.DEFAULT },
        { name: 'SPINNER', value: AnimationDurations.SPINNER },
      ]}
    />

    <EnumTable
      friendlyName="Animation Delay"
      name="AnimationDelay"
      enums={[{ name: 'DEFAULT', value: AnimationDelay.DEFAULT }]}
      spacing={{ marginTop: 5 }}
    />
  </StylesPreview>
);
