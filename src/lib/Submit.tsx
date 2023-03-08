import type { Props } from './Button';
import { default as Button } from './Button';

export const Submit = ({ children, className = '', disabled, ...props }: Props) => (
  <Button disabled={disabled} {...props} className={`reform-submit ${className}`} type='submit'>
    {children}
  </Button>
);
