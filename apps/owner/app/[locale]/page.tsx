import { Flex } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react';
export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <Flex
        align="center"
        justify="center"
        style={{
          minHeight: '100vh',
        }}
      >
        {t('title')}
      </Flex>
    </div>
  );
}
