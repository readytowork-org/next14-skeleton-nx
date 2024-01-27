import { Button as AntdButton, ButtonProps as AntButtonProps } from 'antd';
/* eslint-disable-next-line */
export interface ButtonProps extends AntButtonProps {
  btnText?: string;
}

export function Button({ btnText, ...props }: ButtonProps) {
  return (
    <AntdButton type={'primary'} {...props}>
      {btnText || 'Button'}
    </AntdButton>
  );
}
Button.DisplayName = 'Button';
