import { ReactNode, useState } from 'react';
import { FormProvider, Resolver, useForm } from 'react-hook-form';

// type ReformData = {
//   [p: string]:
//     | string
//     | string[]
//     | number
//     | number[]
//     | boolean
//     | boolean[]
//     | object
//     | null
//     | undefined;
// };
export type ReformError = {
  type?: string;
  message: string;
  details?: string | string[] | object;
};
export type ReformSetError = (name: string, error: ReformError) => void;
export type ReformSubmitHandler<T> = (
  data: T,
  setError: ReformSetError,
) => Promise<boolean | void> | boolean | void;
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

export const Form = ({
  className = '',
  onSubmit = () => true,
  onChange,
  defaultValues,
  disabled = false,
  resolver,
  ...props
}: Props) => {
  const [loading, setLoading] = useState('');

  const methods = useForm({
    resolver,
    defaultValues: defaultValues || {},
    reValidateMode: 'onChange',
    disabled,
  });
  //
  // useEffect(() => {
  //   if (!disabled) methods.reset(defaultValues);
  // }, [disabled]);

  const handleSubmit = async (data: Record<string, any>) => {
    setLoading('loading');
    if (await onSubmit(data, methods.setError as ReformSetError)) methods.reset(defaultValues);
    setLoading('');
  };

  const handleFormChange = () => {
    const watch = { ...methods.watch() };
    if (onChange) onChange(watch, methods.setError as ReformSetError);
  };
  // ${disabled ? 'reform-disabled' : ''}
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
