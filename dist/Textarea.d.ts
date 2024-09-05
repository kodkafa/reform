import { TextareaHTMLAttributes } from 'react';
export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name?: string;
    resize?: boolean;
    label?: string;
};
export declare const Textarea: ({ name, resize, label, className, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Textarea.d.ts.map