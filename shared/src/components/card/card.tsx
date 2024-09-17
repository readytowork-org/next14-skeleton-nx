import { Card as AntCard, CardProps } from 'antd';
export function Card({ ...props }: CardProps) {
  return (
    <AntCard {...props}>
      <h1>Welcome to Card!</h1>
    </AntCard>
  );
}
