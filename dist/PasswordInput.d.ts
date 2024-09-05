import { ReactNode } from 'react';
import { Props as InputProps } from './Input';
export type Props = Omit<InputProps, 'type'> & {
  show?: ReactNode;
  hide?: ReactNode;
};
export declare const PasswordInput: ({
  className,
  label,
  show,
  hide,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=PasswordInput.d.ts.map
