import { ButtonHTMLAttributes, Ref } from 'react';
export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  reference?: Ref<HTMLButtonElement> | null;
};
export declare const Button: ({
  className,
  children,
  type,
  reference,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map
