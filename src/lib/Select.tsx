import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  placeholder?: string;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
};

export const Select = ({ name, placeholder, options, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <div className="item select">
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
  );
};
