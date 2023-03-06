import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  resize?: boolean;
  label?: string;
};

export const Textbox = ({ name, resize = true, label, className, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <textarea
        className={`reform-item reform-textbox ${!resize && 'resize-none'} ${className}`}
        {...(name ? register(name) : {})}
        {...props}
      />
    </>
  );
};
