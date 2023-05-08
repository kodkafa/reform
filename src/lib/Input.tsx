import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name?: string;
  label?: string;
};

export const Input = ({ className, name, label, type = 'text', ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input
        {...props}
        type={type}
        className={`reform-element ${className}`}
        {...(name ? register(name) : {})}
      />
      {name && errors[name] && (
        <p className='reform-item-error' data-name={name}>
          {String(errors[name]?.message)}
        </p>
      )}
    </>
  );
};
