import React, { useState } from 'react';
import { Body, Box, Divider, H4, TextProps } from 'components';
import { Colors, BorderRadii, BorderWidths } from 'styles';
import * as Previews from 'explorer-previews';
import styled from 'styled-components';

const Button = styled(Body).attrs({
  as: 'button'
})<TextProps & { isActive?: boolean }>`
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  transition: 0.2s linear;

  :hover {
    color: ${Colors.PRIMARY_DARK};
  }
`;

interface MenuProps {
  onChange: (preview: React.ReactNode) => void;
}

type PreviewScreens = 'animations' | 'borders' | 'breakpoints' | 'colors' | 'fonts' | 'spacing' | 'button';

export const Menu: React.FC<MenuProps> = ({ onChange }) => {
  const [activePreview, setActivePreview] = useState<PreviewScreens>();

  const handleChange = (active: PreviewScreens, screen: keyof typeof Previews): void => {
    setActivePreview(active);
    onChange(Previews[screen]);
  };

  return (
    <Box borderRadius={BorderRadii.MEDIUM} bgcolor={Colors.GREY_010} margin={2} overflow="auto" padding={3} width="100%">
      <H4>Styles</H4>
      <Divider color={Colors.GREY_090} size={BorderWidths.MEDIUM} />

      <ul>
        <li><Button isActive={activePreview === 'animations'} onClick={() => handleChange('animations', 'Animations')}>Animations</Button></li>
        <li><Button isActive={activePreview === 'borders'} onClick={() => handleChange('borders', 'Borders')}>Borders</Button></li>
        <li><Button isActive={activePreview === 'breakpoints'} onClick={() => handleChange('breakpoints', 'Breakpoints')}>Breakpoints</Button></li>
        <li><Button isActive={activePreview === 'colors'} onClick={() => handleChange('colors', 'Colors')}>Colors</Button></li>
        <li><Button isActive={activePreview === 'fonts'} onClick={() => handleChange('fonts', 'Fonts')}>Fonts</Button></li>
        <li><Button isActive={activePreview === 'spacing'} onClick={() => handleChange('spacing', 'Spacing')}>Spacing</Button></li>
      </ul>

      <H4>Components</H4>
      <Divider color={Colors.GREY_090} size={BorderWidths.MEDIUM} />

      <ul>
        <li><Button isActive={activePreview === 'button'} onClick={() => handleChange('button', 'Button')}>Button</Button></li>
      </ul>
    </Box>
  );
};
