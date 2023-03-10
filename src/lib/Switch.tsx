import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  off?: ReactNode;
  on?: ReactNode;
  name: string;
  label?: string;
};

export const Switch = ({
  id = `reform-switch-${Math.random()}`,
  className = '',
  name,
  label,
  type = 'checkbox',
  on,
  off,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      <div className={`reform-switch ${className}`}>
        <div>
          {off && (
            <label htmlFor={id} className='reform-label'>
              {off}
            </label>
          )}
          <input {...props} id={id} type={type} {...(name ? register(name) : {})} />
          {on && (
            <label htmlFor={id} className='reform-label'>
              {on}
            </label>
          )}
        </div>
        {label && <label htmlFor={id}>{label}</label>}
      </div>

      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </>
  );
};
