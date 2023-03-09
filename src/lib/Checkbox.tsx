import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
  labelPosition?: 'right' | 'left';
};

export const Checkbox = ({
  id = `reform-checkbox-${Math.random()}`,
  className = '',
  name,
  label,
  type = 'checkbox',
  // labelPosition = 'right',
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
      {/*<div className={`reform-item-checkbox ${disabled && 'reform-disabled'}`}>*/}
      <div className={`reform-checkbox ${className}`}>
        <input {...props} id={id} type={type} value={value} {...(name ? register(name) : {})} />
        {/*<div className='reform-element' />*/}
        {label && <Label htmlFor={id}>{label}</Label>}
      </div>
      {/*</div>*/}
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </>
  );
};
