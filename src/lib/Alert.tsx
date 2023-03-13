import { HTMLAttributes, ReactNode } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  alertText: ReactNode;
  description?: ReactNode;
  bottomActions?: ReactNode[];
  rightActions?: ReactNode;
};

export const Alert = ({
  icon,
  alertText,
  description,
  bottomActions,
  rightActions,
  className,
  ...props
}: Props) => {
  return (
    <div className={`reform-alert ${className}`} role='alert'>
      {icon}

      <div className='reform-alert-content'>
        <div className='reform-alert-top'>
          <div className='reform-alert-text'>{alertText}</div>

          {rightActions}
        </div>

        {description}
      </div>
    </div>
  );
};
