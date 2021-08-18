import React from 'react';
import styled from '@emotion/styled';
import { defaultTheme } from '../../styles/theme';
import { LayoutProps } from './types/LayoutProps';

function Layout({ children, theme }: LayoutProps) {
  return <LayoutContainer theme={theme}>{children}</LayoutContainer>;
}

const LayoutContainer = styled.div<{
  theme: defaultTheme;
}>(({ theme }) => ({
  background: theme.light.mainBackground,
  width: 1000,
  margin: 'auto',
  marginTop: 40,
}));

export default Layout;
