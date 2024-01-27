import { AntdRegistry } from '@ant-design/nextjs-registry';
import { StyledComponentsRegistry } from '@next-skeleton/shared';
import './global.css';

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
    <html lang="en">
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
