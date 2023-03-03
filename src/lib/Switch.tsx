import { useFormContext } from 'react-hook-form';

export type Props = {
  leftOption?: string;
  rightOption?: string;
  disabled?: boolean;
  name: string;
};

export const Switch = ({ leftOption, rightOption, disabled, name }: Props) => {
  const { register } = useFormContext() || {};

  return (
    <div className={`switch ${disabled && 'disabled'}`}>
      {leftOption && <label className="label">{leftOption}</label>}
      <input type="checkbox" {...(name ? register(name) : {})} />
      {rightOption && <label className="label">{rightOption}</label>}
    </div>
  );
};
