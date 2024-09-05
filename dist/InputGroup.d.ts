import { HTMLAttributes } from 'react';
export type Props = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  label?: string;
};
export declare const InputGroup: ({
  children,
  className,
  label,
  disabled,
  ...props
}: Props) => import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=InputGroup.d.ts.map
