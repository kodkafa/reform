import { ErrorArea, Input, Label, useFormContext } from '../lib';
import { MouseEvent } from 'react';

type Props = {
  label?: string;
  name?: string;
  className?: string;
};

export function CustomInput({
  label = 'Custom Input',
  name = 'customInput',
  className = '',
}: Props) {
  const { setValue } = useFormContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const value = e.currentTarget.dataset?.value;
    setValue(name, value);
  };

  const handleReset = () => {
    setValue(name, undefined);
  };

  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <div
        style={{
          display: 'flex',
          color: 'white',
          gap: '3px',
        }}
      >
        <div
          data-value='red'
          onClick={handleClick}
          style={{ background: 'red', padding: '2px 10px', cursor: 'pointer', borderRadius: '8px' }}
        >
          RED
        </div>
        <div
          data-value='blue'
          onClick={handleClick}
          style={{
            background: 'blue',
            padding: '2px 10px',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        >
          BLUE
        </div>
      </div>
      <Input type='hidden' name={name} />
      <ErrorArea name={name} />
      <p className='text-xs' onClick={handleReset}>
        RESET
      </p>
    </div>
  );
}
