import { InputHTMLAttributes, ReactNode } from 'react';
export type Props = InputHTMLAttributes<HTMLInputElement> & {
    off?: ReactNode;
    on?: ReactNode;
    name?: string;
    label?: string;
};
export declare const Switch: ({ id, className, name, label, type, on, off, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Switch.d.ts.map