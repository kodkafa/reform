import { InputHTMLAttributes, useState } from 'react';
import { Input } from './Input';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
};

export const PasswordInput = ({ className, name, label, ...props }: Props) => {
  const [type, setType] = useState('password');

  const toggleType = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <Input
      {...props}
      className={className}
      name={name}
      label={label}
      type={type}
      icon={
        <span onClick={toggleType}>
          {type === 'password' ? <i className="reform-password-show" /> : <i className="reform-password-hide" />}
        </span>
      }
    />
  );
};
