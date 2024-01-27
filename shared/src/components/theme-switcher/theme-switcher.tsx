import { Button } from '../button/button';

/* eslint-disable-next-line */
export interface ThemeSwitcherProps {
  colorTheme?: 'dark' | 'light';
  onThemeChange: (colorTheme: 'dark' | 'light') => void;
}

export function ThemeSwitcher({
  colorTheme,
  onThemeChange,
}: ThemeSwitcherProps) {
  return (
    <Button
      shape={'circle'}
      onClick={() => {
        onThemeChange(colorTheme === 'light' ? 'dark' : 'light');
      }}
      ghost
      btnText={colorTheme === 'light' ? '☀️' : '🌕'}
    />
  );
}
ThemeSwitcher.displayName = 'ThemeSwitcher';
export default ThemeSwitcher;
