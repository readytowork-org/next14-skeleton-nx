/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  colorTheme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      colorTheme: 'light',
      onThemeChange: (theme: 'dark' | 'light') =>
        set(() => ({ colorTheme: theme })),
    }),
    { name: 'ant-nx-theme' }
  )
);
