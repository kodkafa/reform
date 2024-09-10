import { MouseEvent, useEffect } from 'react';
import { Input, Label, useFormContext } from '../lib';

type Props = {
  label?: string;
  name?: string;
  className?: string;
  defaultValue?: string | number | readonly string[] | undefined;
};

export function CustomInput({
  label = 'Custom Input',
  name = 'customInput',
  className = '',
  defaultValue = '',
}: Props) {
  const { setValue, clearErrors } = useFormContext();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue(name, e.currentTarget.dataset?.value);
  };

  const handleReset = () => {
    clearErrors();
    setValue(name, undefined);
  };

  useEffect(() => {
    // if (defaultValue)
    setValue(name, defaultValue);
  }, []);

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
      <Input name={name} type='hidden' />
      {/*<ErrorArea name={name} />*/}
      <p className='text-xs pb-4' onClick={handleReset}>
        RESET
      </p>
    </div>
  );
}
