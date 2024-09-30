import {
  FacebookFilled,
  GoogleOutlined,
  LineOutlined
} from '@ant-design/icons';
import { Button, Flex } from 'antd';

export const SocialLogin = () => {
  return (
    <Flex component={'form'} gap="small" wrap="wrap" style={{ width: '100%' }}>
      <Button icon={<GoogleOutlined />}>Sign in with Google</Button>
      <Button icon={<LineOutlined />}>Sign in with Line</Button>
      <Button icon={<FacebookFilled />} htmlType={'submit'} name="facebook">
        Sign in with Facebook
      </Button>
    </Flex>
  );
};
