'use client';
import React from 'react';
import { Avatar, Flex, Layout, Typography } from 'antd';
import { Button, Input } from '@next-skeleton/shared';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILoginFormInput, LoginFormInputSchema } from '../../types';
import { StyledLoginFormWrapper } from './login.style';
const { Content } = Layout;

export const Login = (): React.JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginFormInputSchema),
  });
  const onSubmit: SubmitHandler<ILoginFormInput> = (data: ILoginFormInput) => {
    console.log(data);
  };

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
        <Flex
          component={'form'}
          className="auth__form"
          vertical
          gap={10}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex className={'form__control'} vertical gap={8}>
            <label htmlFor="email">Email address</label>
            <Controller
              name={'email'}
              control={control}
              render={({ field }) => (
                <>
                  <Input id="email" size="large" {...field} />
                  {errors?.email && (
                    <Typography.Text type={'danger'}>
                      {errors?.email?.message}
                    </Typography.Text>
                  )}
                </>
              )}
            />
          </Flex>
          <Flex className={'form__control'} vertical gap={8}>
            <label htmlFor="password">Password</label>
            <Controller
              name={'password'}
              control={control}
              render={({ field }) => (
                <>
                  <Input id="password" size="large" {...field} />
                  {errors?.password && (
                    <Typography.Text type={'danger'}>
                      {errors?.password?.message}
                    </Typography.Text>
                  )}
                </>
              )}
            />
            <div>Forgot password?</div>
          </Flex>
          <Button block size="large" htmlType="submit" />
        </Flex>
      </StyledLoginFormWrapper>
    </Content>
  );
};
