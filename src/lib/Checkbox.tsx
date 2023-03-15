import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
  description?: ReactNode;
};

export const Checkbox = ({
  id = `reform-checkbox-${Math.random()}`,
  className = '',
  name,
  label,
  type = 'checkbox',
  value = 'true',
  description,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      <div
        className={`
        reform-checkbox ${className} 
        ${description && 'reform-checkbox-with-description'}`}
      >
        <input {...props} id={id} type={type} value={value} {...(name ? register(name) : {})} />
        <div>
          {label && <label htmlFor={id}>{label}</label>}
          {description}
        </div>
      </div>
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </>
  );
};
