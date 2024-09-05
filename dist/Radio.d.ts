import { InputHTMLAttributes } from 'react';
export type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name?: string;
  label?: string;
};
export declare const Radio: ({
  id,
  className,
  name,
  label,
  type,
  value,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=Radio.d.ts.map
