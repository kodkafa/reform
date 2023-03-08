import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  label?: string;
  icon?: ReactNode;
  type?: string;
  iconPosition?: 'left' | 'right';
};

export const Input = ({
  className,
  name,
  label,
  icon,
  disabled,
  type = 'text',
  iconPosition = 'right',
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <div className={`reform-input ${disabled && 'reform-disabled'}`}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className={`reform-item ${iconPosition}`}>
        <input
          {...props}
          type={type}
          className={`${className}`}
          {...(name ? register(name) : {})}
        />
        <div className='reform-input-icon'>{icon}</div>
      </div>
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </div>
  );
};
