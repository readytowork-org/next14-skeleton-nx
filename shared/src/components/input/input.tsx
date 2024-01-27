import { InputProps as AntdInputProps, Input as AntdInput } from 'antd';

/* eslint-disable-next-line */
export interface InputPropss extends AntdInputProps {}

export function Input(props: InputPropss) {
  return <AntdInput {...props} />;
}
Input.displayName = 'Input';
export default Input;
