import { HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { ReformError } from './Form';

export type Props = HTMLAttributes<HTMLDivElement> & {
  name?: string;
};

export const ErrorArea = ({ name = 'generic', className, ...props }: Props) => {
  const {
    formState: { errors },
  } = useFormContext() || {};
  const error = errors[name] as ReformError;

  return (
    <div {...props} className={`reform-errorarea ${className}`}>
      {error && (
        <p className='reform-item-error'>
          {String(error.message)}
          {Array.isArray(error.details) && (
            <ul>
              {error.details.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>
          )}
        </p>
      )}
    </div>
  );
};
