import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Form } from './Form';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  padStart?: ReactNode;
  padEnd?: ReactNode;
};

export const InputGroup = ({ name, padStart, padEnd, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <div className="item flex items-center">
      {padStart}

      <input {...(name ? register(name) : {})} {...props} />

      {padEnd}
    </div>
  );
};
