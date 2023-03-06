import { LabelHTMLAttributes } from 'react';

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
  className?: string;
};

export const Label = ({ htmlFor, className = '', children, ...props }: Props) => {
  return (
    <label {...props} htmlFor={htmlFor} className={`reform-label ${className}`}>
      {children}
    </label>
  );
};
