'use client';
import React from 'react';
import { Input, Layout } from 'antd';
import { StyledLoginFormWrapper } from './login.style';
import { Button } from '@next-skeleton/shared';
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
        <form className="auth__form">
          <div className={'form__control'}>
            <label htmlFor="email">Email address</label>
            <Input id="email" />
          </div>
          <div className={'form__control'}>
            <label htmlFor="password">Password</label>
            <Input id="password" />
            <div>Forgot password?</div>
          </div>
          <Button block />
        </form>
      </StyledLoginFormWrapper>
    </Content>
  );
};
