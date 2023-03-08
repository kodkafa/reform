import { ButtonHTMLAttributes, Ref } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  reference?: Ref<HTMLButtonElement> | null;
};

export const Button = ({
  className = '',
  children,
  type = 'button',
  disabled,
  reference = null,
  ...props
}: Props) => (
  <button
    ref={reference}
    {...props}
    type={type}
    className={`reform-button ${className} ${disabled && 'reform-disabled'}`}
  >
    {children}
  </button>
);
export default Button;
