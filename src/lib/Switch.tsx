import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  off?: ReactNode;
  on?: ReactNode;
  name: string;
  label?: string;
};

export const Switch = ({
  id = `reform-switch-${Math.random()}`,
  on,
  off,
  name,
  label,
  ...props
}: Props) => {
  const { register } = useFormContext() || {};

  return (
    <>
      {/*< className={`${disabled && 'reform-disabled'}`}>*/}
      {label && <Label htmlFor={id}>{label}</Label>}

      <div className={'reform-switch '}>
        {off && (
          <label htmlFor={id} className='reform-label'>
            {off}
          </label>
        )}
        <input {...props} id={id} type='checkbox' {...(name ? register(name) : {})} />
        {on && (
          <label htmlFor={id} className='reform-label'>
            {on}
          </label>
        )}
      </div>
      {/*</div>*/}
    </>
  );
};
