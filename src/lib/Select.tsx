import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name?: string;
  placeholder?: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  label?: string;
};

export const Select = ({ name, placeholder, label, options, className, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <select
        className={`reform-element reform-select ${className}`}
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
      {name && errors[name] && (
        <p className='reform-item-error' data-name={name}>
          {String(errors[name]?.message)}
        </p>
      )}
    </>
  );
};
