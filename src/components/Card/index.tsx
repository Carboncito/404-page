import {FC, PropsWithChildren} from 'react';


const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`Card flex flex-1 bg-color-black-100 border-2 border-color-black-200 rounded-lg p-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
