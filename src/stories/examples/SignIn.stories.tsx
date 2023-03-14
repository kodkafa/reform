import type { Meta } from '@storybook/react';
import React from 'react';
import { Form } from '../../lib';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/Sign In',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
export const Default = {
  render: () => (
    <div className='w-full min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-4 sm:p-7'>
          <div className='text-center'>
            <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>Sign in</h1>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              Don&apos;t have an account yet?
              <a
                className='text-blue-600 decoration-2 hover:underline font-medium ml-2'
                href='../examples/html/signup.html'
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
