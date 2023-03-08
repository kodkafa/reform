import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  label?: string;
};

export const InputGroup = ({ disabled, children, className, label, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { formState } = useFormContext() || {};
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (ref.current) {
      setErrors(
        Array.from(ref.current?.querySelectorAll('.reform-item-error')).map((i) => i.innerHTML),
      );
    }
  }, [formState.errors]);

  return (
    <div className={`${disabled && 'reform-disabled'}`}>
      {label && <Label>{label}</Label>}

      <div ref={ref} {...props} className={`reform-input-group reform-item ${className}`}>
        {children}
      </div>

      {errors?.map((i, k) => (
        <p key={k} className='reform-item-error'>
          {i}
        </p>
      ))}
    </div>
  );
};
