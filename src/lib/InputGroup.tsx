import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from './Label';

export type Props = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  label?: string;
};

export const InputGroup = ({ children, className, label, disabled, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { formState } = useFormContext();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (ref.current && Object.keys(formState.errors).length) {
      setErrors([
        ...new Set(
          Array.from(ref.current?.querySelectorAll('.reform-item-error')).map((i) => i.innerHTML),
        ),
      ]);
    }
  }, [ref.current, formState]);

  return (
    <div>
      {label && <Label>{label}</Label>}

      <div
        ref={ref}
        {...props}
        className={`reform-input-group group ${className} ${disabled ? 'disabled' : ''}`}
      >
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
