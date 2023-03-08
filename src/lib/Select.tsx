import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  placeholder?: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  label?: string;
};

export const Select = ({ name, placeholder, label, options, disabled, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <div className={`${disabled && 'reform-disabled'}`}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className='reform-item reform-select'>
        <select {...(name ? register(name) : {})} {...props}>
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
      </div>
      {error && <p className='reform-item-error'>{String(error.message)}</p>}
    </div>
  );
};
