import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
};

export const Checkbox = ({
  id = `reform-checkbox-${Math.random()}`,
  className = '',
  name,
  label,
  type = 'checkbox',
  value = 'true',
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      <div className={`reform-checkbox ${className}`}>
        <input {...props} id={id} type={type} value={value} {...(name ? register(name) : {})} />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </>
  );
};
