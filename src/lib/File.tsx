import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  name: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const File = ({ name, label, size = 'md', className, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input
        {...props}
        className={`reform-file reform-file-${size} ${className}`}
        type='file'
        {...(name ? register(name) : {})}
      />
    </>
  );
};
