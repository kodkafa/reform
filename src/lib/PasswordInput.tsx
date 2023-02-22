import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { Input } from './Input';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
  icon?: ReactNode;
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
        <span onClick={toggleType} className="text-lg">
          {type === 'password' ? (
            <span className="cursor-pointer">🔒</span>
          ) : (
            <span className="cursor-pointer">🔓</span>
          )}
        </span>
      }
    />
  );
};
