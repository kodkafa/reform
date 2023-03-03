import { ReactNode, SelectHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  title: string;
  options: ReactNode[];
};

export const Select = ({ name, title, options, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <div className="item select">
      <select {...(name ? register(name) : {})} {...props}>
        {[title, ...options].map((option, index) => (
          <option key={index} selected={!index} disabled={!index} value={!index ? '' : option?.toString()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
