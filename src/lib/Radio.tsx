import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name?: string;
  label?: string;
};

export const Radio = ({
  id = `reform-radio-${Math.random()}`,
  className = '',
  name,
  label,
  type = 'radio',
  value = 'true',
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};

  return (
    <>
      <div className={`reform-radio ${className}`}>
        <input {...props} id={id} type={type} value={value} {...(name ? register(name) : {})} />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
      {name && errors[name] && (
        <p className='reform-item-error' data-name={name}>
          {String(errors[name]?.message)}
        </p>
      )}
    </>
  );
};
