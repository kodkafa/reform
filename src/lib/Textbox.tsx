import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  resize?: boolean;
};

export const Textbox = ({ name, resize = true, className, ...props }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <textarea
      className={`item textbox ${!resize && 'resize-none'} ${className}`}
      {...(name ? register(name) : {})}
      {...props}
    />
  );
};
