import { ReactNode } from 'react';
import { Resolver } from 'react-hook-form';
export type ReformError = {
    type?: string;
    message: string;
    details?: string | string[] | object;
};
export type ReformSetError = (name: string, error: ReformError) => void;
export type ReformSubmitHandler<T> = (data: T, setError: ReformSetError) => Promise<boolean | void> | boolean | void;
export type Props = {
    resolver?: Resolver;
    onSubmit?: ReformSubmitHandler<any>;
    onChange?: ReformSubmitHandler<any>;
    defaultValues?: Record<string, any>;
    className?: string;
    children?: ReactNode | ReactNode[];
    autoComplete?: 'on' | 'off';
    novalidate?: string;
    disabled?: boolean;
};
export declare const Form: ({ className, onSubmit, onChange, defaultValues, disabled, resolver, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Form.d.ts.map