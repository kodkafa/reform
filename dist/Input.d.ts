import { InputHTMLAttributes } from 'react';
export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name?: string;
  label?: string;
};
export declare const Input: ({
  className,
  name,
  label,
  type,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=Input.d.ts.map
