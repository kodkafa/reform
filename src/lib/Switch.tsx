import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  off?: ReactNode;
  on?: ReactNode;
  disabled?: boolean;
  name: string;
  label?: string;
};

export const Switch = ({ on, off, disabled, name, label, checked = false, ...props }: Props) => {
  const { register } = useFormContext() || {};
  const [value, setValue] = useState(checked);

  return (
    <div className={`${disabled && 'reform-disabled'}`}>
      {label && <Label htmlFor={name}>{label}</Label>}

      <div className={`reform-switch ${disabled && 'reform-disabled'}`}>
        {off && <label className='reform-label'>{off}</label>}
        <input type='checkbox' {...(name ? register(name) : {})} />
        {on && <label className='reform-label'>{on}</label>}
      </div>
    </div>
  );
};
