import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
export type Props = SelectHTMLAttributes<HTMLSelectElement> & {
    name?: string;
    placeholder?: string;
    options: OptionHTMLAttributes<HTMLOptionElement>[];
    label?: string;
};
export declare const Select: ({ name, placeholder, label, options, className, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Select.d.ts.map