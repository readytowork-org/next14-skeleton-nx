'use client';
import { ThemeSwitcher } from '@next-skeleton/shared';
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../store';
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 3px #000;
  gap: 10px;
  padding: 10px;
`;
export const AffixContainer = () => {
  const { onThemeChange, colorTheme } = useTheme();
  return (
    <Wrapper>
      <ThemeSwitcher colorTheme={colorTheme} onThemeChange={onThemeChange} />
    </Wrapper>
  );
};
