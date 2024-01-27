import { AntdRegistry } from '@ant-design/nextjs-registry';
import { StyledComponentsRegistry, roboto_mono } from '@next-skeleton/shared';
import './global.css';
import { ConfigProvider } from 'antd';

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
    <html lang="en" className={roboto_mono.className}>
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: '',
              },
            }}
          >
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
