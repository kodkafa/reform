import type { Props } from './Button';
import { default as Button } from './Button';

export const Submit = ({ children, className = '', ...props }: Props) => (
  <Button {...props} className={`submit ${className}`} type="submit">
    {children}
  </Button>
);
