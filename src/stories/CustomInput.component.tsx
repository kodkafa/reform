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
  const { setValue, getValues } = useFormContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue(name, e.currentTarget.dataset?.value);
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
          padding: '10px 0 20px',
          color: 'white',
          gap: '10px',
        }}
      >
        <div
          data-value='red'
          onClick={handleClick}
          style={{
            background: '#dc2626',
            padding: '2px 10px',
            cursor: 'pointer',
            borderRadius: '50px',
          }}
        >
          RED
        </div>
        <div
          data-value='blue'
          onClick={handleClick}
          style={{
            background: '#0284c7',
            padding: '2px 10px',
            cursor: 'pointer',
            borderRadius: '50px',
          }}
        >
          BLUE
        </div>
      </div>
      <Input type='hidden' name={name} />
      <ErrorArea name={name} />
      <p className='text-xs pb-4' onClick={handleReset}>
        RESET
      </p>
    </div>
  );
}
