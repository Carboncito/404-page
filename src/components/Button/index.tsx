import { FC } from 'react';

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <div>
      <button className={` border-1`} {...props}>{label}</button>
    </div>
  );
};

export default Button;
