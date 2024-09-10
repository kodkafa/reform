import { HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { ReformError } from './Form';

export type Props = HTMLAttributes<HTMLDivElement> & {
  name?: string;
};

export const ErrorArea = ({ name = 'root', className, ...props }: Props) => {
  const {
    formState: { errors },
  } = useFormContext() || {};
  const error =
    name === 'root' && typeof errors[name] === 'object'
      ? Object.values(errors[name] as Record<string, { message: string }>)
      : (errors[name] as ReformError);

  return (
    <div {...props} className={`reform-errorarea ${className}`}>
      {error && (
        <div className='reform-item-error'>
          {Array.isArray(error) ? (
            <ul>
              {error.map((i, k) => (
                <li key={k}>{String(i?.message)}</li>
              ))}
            </ul>
          ) : (
            <>
              {String(error.message)}
              {Array.isArray(error.details) && (
                <ul>
                  {error.details.map((i, k) => (
                    <li key={k}>{i}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
