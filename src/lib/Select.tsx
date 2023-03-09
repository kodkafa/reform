import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  placeholder?: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  label?: string;
};

export const Select = ({
  name,
  placeholder,
  label,
  options,
  disabled,
  className,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <div className={`${disabled && 'reform-disabled'}`}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <select
        className={`reform-element ${className}`}
        {...(name ? register(name) : {})}
        {...props}
      >
        {placeholder && (
          <option key='placeholder' value=''>
            {placeholder}
          </option>
        )}
        {options.map(({ children, ...i }, k) => (
          <option key={k} {...i}>
            {children}
          </option>
        ))}
      </select>
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </div>
  );
};
