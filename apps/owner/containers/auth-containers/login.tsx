'use client';
import React from 'react';
import { Avatar, Flex, Layout, Typography } from 'antd';
import { StyledLoginFormWrapper } from './login.style';
import { Button, Input } from '@next-skeleton/shared';
const { Content } = Layout;
export const Login = (): React.JSX.Element => {
  return (
    <Content
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledLoginFormWrapper>
        <Flex vertical align="center">
          <Avatar
            src={
              <img
                src={
                  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
                }
                alt="avatar"
              />
            }
          />
          <Typography.Title level={3}>Sign in to your account</Typography.Title>
        </Flex>
        <Flex component={'form'} className="auth__form" vertical gap={10}>
          <Flex className={'form__control'} vertical gap={8}>
            <label htmlFor="email">Email address</label>
            <Input id="email" size="large" />
          </Flex>
          <Flex className={'form__control'} vertical gap={8}>
            <label htmlFor="password">Password</label>
            <Input id="password" size="large" />
            <div>Forgot password?</div>
          </Flex>
          <Button block size="large" />
        </Flex>
      </StyledLoginFormWrapper>
    </Content>
  );
};
