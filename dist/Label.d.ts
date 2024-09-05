import { LabelHTMLAttributes } from 'react';
type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
  className?: string;
};
export declare const Label: ({
  htmlFor,
  className,
  children,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
export {};
//# sourceMappingURL=Label.d.ts.map
