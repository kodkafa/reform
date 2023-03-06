import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export type Props = {
  off?: ReactNode;
  on?: ReactNode;
  disabled?: boolean;
  name: string;
};

export const Switch = ({ on, off, disabled, name }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <div className={`switch ${disabled && 'disabled'}`}>
      {off && <label className="label">{off}</label>}
      <input type="checkbox" {...(name ? register(name) : {})} />
      {on && <label className="label">{on}</label>}
    </div>
  );
};
