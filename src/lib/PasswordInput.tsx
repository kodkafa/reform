import { ReactNode, useState } from 'react';
import { Input, Props as InputProps } from './Input';
import { InputGroup } from './InputGroup';

export type Props = Omit<InputProps, 'type'> & {
  show?: ReactNode;
  hide?: ReactNode;
};

export const PasswordInput = ({
  className,
  label,
  show = <i className='reform-password-show' />,
  hide = <i className='reform-password-hide' />,
  ...props
}: Props) => {
  const [type, setType] = useState('password');

  const toggleType = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <InputGroup label={label} className='reform-password' disabled={props.disabled}>
      <Input {...props} className={className} type={type} />
      <span className='mr-2' onClick={toggleType}>
        {type === 'password' ? show : hide}
      </span>
    </InputGroup>
  );
};
