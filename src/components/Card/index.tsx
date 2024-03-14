import {FC, PropsWithChildren} from 'react';

const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
  ...props
}) => {
  return <div className={`flex flex-1 border-2 border-color-black bg-color-black rounded-md ${className}`}>{children}</div>;
};

export default Card;
