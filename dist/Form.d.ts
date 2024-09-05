import { ReactNode } from 'react';
import { ObjectSchema } from 'yup';
type ReformData = {
    [p: string]: string | string[] | number | number[] | boolean | boolean[] | object | null | undefined;
};
export type ReformError = {
    type?: string;
    message: string;
    details?: string | string[] | object;
};
export type ReformSetError = (name: string, error: ReformError) => void;
export type ReformSubmitHandler<T> = (data: T, setError: ReformSetError) => Promise<boolean | void> | boolean | void;
export type Props = {
    schema?: ObjectSchema<object>;
    onSubmit?: ReformSubmitHandler<any>;
    onChange?: ReformSubmitHandler<any>;
    defaultValues?: ReformData;
    className?: string;
    children?: ReactNode | ReactNode[];
    autoComplete?: 'on' | 'off';
    novalidate?: string;
    disabled?: boolean;
};
export declare const Form: ({ className, schema, onSubmit, onChange, defaultValues, disabled, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Form.d.ts.map