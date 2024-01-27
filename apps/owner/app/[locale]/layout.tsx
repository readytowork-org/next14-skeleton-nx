import { roboto_mono } from '@next-skeleton/shared';
import '../global.css';
import { Registry } from '../Registry';

export const metadata = {
  title: 'Skelton',
  description: 'template repo',
};

export default function RootLayout({
  children,
    params: {locale}
}: {
  children: React.ReactNode;
    params: {locale: string};
}) {
  return (
    <html lang={locale||"en"} className={roboto_mono.variable}>
      <body>
        <Registry>{children}</Registry>
      </body>
    </html>
  );
}
