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

export const Input = ({ className, name, label, icon, type = 'text', iconPosition = 'right', ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className={`item ${iconPosition}`}>
        <input {...props} type={type} className={`label ${className}`} {...(name ? register(name) : {})} />
        <div className="input-icon">{icon}</div>
      </div>
      {error && <p className="item-error">{String(error.message)}</p>}
    </>
  );
};
