import { useState } from 'react';
import { Input, Props as InputProps } from './Input';
import { InputGroup } from './InputGroup';

export type Props = Omit<InputProps, 'type'>;

export const PasswordInput = ({ className, label, ...props }: Props) => {
  const [type, setType] = useState('password');

  const toggleType = () => {
    console.log({ type });
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <InputGroup label={label}>
      <Input {...props} className={className} type={type} />
      <span onClick={toggleType}>
        {type === 'password' ? (
          <i className='reform-password-show' />
        ) : (
          <i className='reform-password-hide' />
        )}
      </span>
    </InputGroup>
  );
};
