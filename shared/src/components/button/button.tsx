import { Button as AntdButton, ButtonProps as AntButtonProps } from 'antd';
/* eslint-disable-next-line */
export interface ButtonProps extends AntButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <AntdButton type={'primary'} {...props}>
      Button
    </AntdButton>
  );
}
Button.DisplayName = 'Button';
