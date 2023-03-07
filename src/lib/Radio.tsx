import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
  labelPosition?: 'right' | 'left';
};

export const Radio = ({
  className = '',
  name,
  label,
  type = 'radio',
  labelPosition = 'right',
  value = 'true',
  disabled,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      <div className={`reform-item-radio ${disabled && 'reform-disabled'}`}>
        <div className={`reform-radio ${labelPosition} ${className}`}>
          {label && <Label htmlFor={name}>{label}</Label>}
          <input {...props} type={type} value={value} {...(name ? register(name) : {})} />
          <div className="reform-input-icon" />
        </div>
      </div>
      {error && <p className="reform-item-error">{String(error.message)}</p>}
    </>
  );
};
