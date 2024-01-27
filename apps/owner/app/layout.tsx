import { roboto_mono } from '@next-skeleton/shared';
import './global.css';
import { Registry } from './Registry';

export const metadata = {
  title: 'Skelton',
  description: 'template repo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto_mono.variable}>
      <body>
        <Registry>{children}</Registry>
      </body>
    </html>
  );
}
