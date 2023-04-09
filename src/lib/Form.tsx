import { ReactNode, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

export type ReformError = {
  type?: string;
  message: string;
  details?: string | string[] | object;
};
export type ReformData<T> = T | { [k: string]: string | string[] | object };
export type ReformSetError = (name: string, error: ReformError) => void;
export type ReformSubmitHandler<T> = (
  data: T,
  setError: ReformSetError,
) => Promise<boolean | void> | boolean | void;
export type Props<T> = {
  schema?: ObjectSchema<object>;
  onSubmit?: ReformSubmitHandler<T>;
  onChange?: ReformSubmitHandler<T>;
  defaultValues?: T;
  className?: string;
  children?: ReactNode | ReactNode[];
  autoComplete?: 'on' | 'off';
  novalidate?: string;
};

export const Form = ({
  className = '',
  schema = Yup.object().shape({}),
  onSubmit = () => true,
  onChange,
  defaultValues,
  ...props
}: Props<ReformData<never>>) => {
  const [loading, setLoading] = useState('');

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {},
    reValidateMode: 'onChange',
  });

  const handleSubmit = async (data: { [x: string]: string | string[] | object }) => {
    setLoading('loading');
    if (await onSubmit(data, methods.setError)) methods.reset(defaultValues);
    setLoading('');
  };

  const handleFormChange = () => {
    const watch = { ...methods.watch() };
    if (onChange) onChange(watch, methods.setError);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={`reform-form ${loading ? 'reform-loading' : ''} ${className}`}
        onSubmit={methods.handleSubmit(handleSubmit)}
        onChange={handleFormChange}
        {...props}
      />
    </FormProvider>
  );
};
