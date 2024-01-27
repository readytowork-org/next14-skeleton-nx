'use client';
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { StyledComponentsRegistry } from '@next-skeleton/shared';
import { ConfigProvider, Layout, theme } from 'antd';

import { useTheme } from '../store';
import { AffixContainer } from '../containers';
import { ThemeProvider } from 'styled-components';
export const Registry = ({ children }: { children: React.ReactNode }) => {
  const { colorTheme } = useTheme();
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm:
            colorTheme === 'dark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
          token: {
            fontFamily: `var(--font-roboto-mono)`,
          },
        }}
      >
        <StyledComponentsRegistry>
          <ThemeProvider
            theme={{
              mode: colorTheme,
            }}
          >
            <Layout
              style={{
                minHeight: '100vh',
              }}
            >
              <Layout.Content>{children}</Layout.Content>
            </Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <AffixContainer />
      </ConfigProvider>
    </AntdRegistry>
  );
};
