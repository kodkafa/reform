import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Props } from '../lib/Alert';

const meta = {
  title: 'reform/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => <Alert {...args} />,
  args: {
    alertText: 'Alert! You should check in on some of those fields below.',
  },
};

export const SolidColorVariants: Story = {
  render: () => (
    <div className='space-y-1'>
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Dark</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-gray-800 text-white dark:bg-white dark:text-gray-800'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Secondary</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-gray-500 text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Info</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-blue-500 text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Success</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-green-500 text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Danger</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-red-500 text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Warning</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-orange-500 text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Light</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='text-gray-600 bg-white'
      />
    </div>
  ),
  args: {
    alertText: 'dummy text',
  },
};

export const SoftColorVariants: Story = {
  render: () => (
    <div className='space-y-1'>
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Secondary</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-gray-50 border border-gray-200 text-gray-600'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Dark</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-gray-800/[.1] border border-gray-200 text-gray-600 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Info</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-blue-50 border border-blue-200 text-blue-600'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Success</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-green-50 border border-green-200 text-green-600'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Danger</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-red-50 border border-red-200 text-red-600'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Warning</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-orange-50 border border-orange-200 text-orange-600'
      />
      <Alert
        alertText={
          <div>
            <span className='font-bold'>Light</span> alert! You should check in on some of those
            fields below.
          </div>
        }
        className='bg-white/[.1] border border-white/[.1] text-gray-600 dark:text-gray-400'
      />
    </div>
  ),
  args: {
    alertText: 'dummy text',
  },
};

export const WithDescription: Story = {
  render: (args: Props) => <Alert {...args} />,
  args: {
    className: 'bg-yellow-50 border border-yellow-200',
    icon: (
      <div className='flex-shrink-0 mr-4'>
        <svg
          className='h-4 w-4 text-yellow-400 mt-0.5'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
        </svg>
      </div>
    ),
    alertText: <p className='text-yellow-800 font-semibold'>Cannot connect to the database</p>,
    description: (
      <div className='mt-1 text-yellow-700'>We are unable to save any progress at this time.</div>
    ),
  },
};

export const WithList: Story = {
  render: (args: Props) => <Alert {...args} />,
  args: {
    className: 'bg-red-50 border border-red-200',
    icon: (
      <div className='flex-shrink-0 mr-4'>
        <svg
          className='h-4 w-4 text-red-400 mt-0.5'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z' />
        </svg>
      </div>
    ),
    alertText: (
      <p className='text-red-800 font-semibold'>
        A problem has been occurred while submitting your data.
      </p>
    ),
    description: (
      <div className='mt-2 text-red-700'>
        <ul className='list-disc space-y-1 pl-5'>
          <li>This username is already in use</li>
          <li>Email field can&apos;t be empty</li>
          <li>Please enter a valid phone number</li>
        </ul>
      </div>
    ),
  },
};

export const LinkOnRight: Story = {
  render: (args: Props) => <Alert {...args} />,
  args: {
    className: 'bg-gray-50 border border-gray-200',
    icon: (
      <div className='flex-shrink-0 mr-4'>
        <svg
          className='h-4 w-4 text-gray-500 mt-0.5'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
        </svg>
      </div>
    ),
    alertText: (
      <p className='text-gray-700'>
        A new software update is available. See what&apos;s new in version 3.0.7
      </p>
    ),
    rightActions: (
      <div>
        <p className='mt-3 md:mt-0 md:ml-6'>
          <a className='text-gray-700 hover:text-gray-500 font-medium whitespace-nowrap' href='#'>
            Details
          </a>
        </p>
      </div>
    ),
  },
};

export const Discovery: Story = {
  render: (args: Props) => <Alert {...args} />,
  args: {
    className: 'bg-white border shadow-lg dark:bg-gray-800 dark:border-gray-700',
    icon: (
      <div className='flex-shrink-0 mr-4'>
        <svg
          className='h-4 w-4 text-blue-500 mt-0.5'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
        </svg>
      </div>
    ),
    alertText: <p className='text-gray-800 font-semibold dark:text-white'>New version published</p>,
    description: (
      <div className='mt-2 text-gray-700 dark:text-gray-400'>
        Chris Lynch published a new version of this page. Refresh to see the changes.
      </div>
    ),
  },
};
