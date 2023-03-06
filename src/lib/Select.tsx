import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  placeholder?: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  label?: string;
};

export const Select = ({ name, placeholder, label, options, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <div className="reform-item reform-select">
        <select {...(name ? register(name) : {})} {...props}>
          {placeholder && (
            <option key="placeholder" value="">
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
    </>
  );
};
