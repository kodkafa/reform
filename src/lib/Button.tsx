import { ButtonHTMLAttributes, Ref } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  reference?: Ref<HTMLButtonElement> | null;
  variant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link';
  size?: 'sm' | 'md' | 'lg';
  pilled?: boolean;
};

export const Button = ({
  className = '',
  children,
  type = 'button',
  reference = null,
  variant = 'solid',
  size = 'md',
  pilled = false,
  ...props
}: Props) => (
  <button
    ref={reference}
    {...props}
    type={type}
    className={`
    reform-button reform-button-${variant}
    reform-button-${size} 
    ${pilled ? 'reform-button-pilled' : 'reform-button-rounded'} ${className}`}
  >
    {children}
  </button>
);
export default Button;
