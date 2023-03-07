import { HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = HTMLAttributes<HTMLDivElement> & {
  name: string;
  disabled?: boolean;
  label?: string;
};

export const InputGroup = ({ name, disabled, children, className, label, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  console.log(errors);

  return (
    <div className={`${disabled && 'reform-disabled'}`}>
      {label && <Label htmlFor={name}>{label}</Label>}

      <div {...props} className={`reform-input-group reform-item ${className}`} {...(name ? register(name) : {})}>
        {children}
      </div>

      {error && <p className="reform-item-error">{String(error.message)}</p>}
    </div>
  );
};
