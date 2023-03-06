import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement>;

export const InputGroup = ({ children, className, ...props }: Props) => {
  return (
    <div {...props} className={`reform-input-group ${className}`}>
      {children}
    </div>
  );
};
