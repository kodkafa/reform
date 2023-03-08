import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = {
  off?: ReactNode;
  on?: ReactNode;
  disabled?: boolean;
  name: string;
  label?: string;
};

export const Switch = ({ on, off, disabled, name, label }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}

      <div className={`reform-switch ${disabled && 'reform-disabled'}`}>
        {off && <label className="reform-label">{off}</label>}
        <input type="checkbox" {...(name ? register(name) : {})} />
        {on && <label className="reform-label">{on}</label>}
      </div>
    </>
  );
};
