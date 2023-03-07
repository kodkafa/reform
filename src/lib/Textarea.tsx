import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  resize?: boolean;
  label?: string;
};

export const Textarea = ({ name, resize = true, label, className, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name];

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <textarea
        className={`reform-item reform-textarea ${!resize && 'resize-none'} ${className}`}
        {...(name ? register(name) : {})}
        {...props}
      />
      {error && <p className="reform-item-error">{String(error.message)}</p>}
    </>
  );
};
