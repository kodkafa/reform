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
export type ReformSetError = (name: string, error: ReformError) => void;
export type ReformSubmitHandler = (
  data: { [x: string]: string | string[] | object },
  setError: ReformSetError,
) => Promise<boolean | void> | boolean | void;
export type Props = {
  schema?: ObjectSchema<object>;
  onSubmit?: ReformSubmitHandler;
  onChange?: ReformSubmitHandler;
  defaultValues?: { [x: string]: string | string[] | object };
  className?: string;
  children: ReactNode | ReactNode[];
};

export const Form = ({
  className = '',
  schema = Yup.object().shape({}),
  onSubmit = () => true,
  onChange,
  defaultValues = {},
  children,
}: Props) => {
  const [loading, setLoading] = useState('');

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
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
      >
        {children}
      </form>
    </FormProvider>
  );
};
