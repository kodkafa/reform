import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, Checkbox, Form, Input, Label, Submit } from '../../lib';
import { Stories } from '@storybook/blocks';
import { handleSubmit } from '../helpers/Handlers';

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
      <div className='max-w-md w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 p-7'>
        <div>
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

        <div className='mt-5'>
          <Button variant='white' type='button' className='w-full'>
            <svg className='w-4 h-auto' width='46' height='47' viewBox='0 0 46 47' fill='none'>
              <path
                d='M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z'
                fill='#4285F4'
              />
              <path
                d='M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z'
                fill='#34A853'
              />
              <path
                d='M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z'
                fill='#FBBC05'
              />
              <path
                d='M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z'
                fill='#EB4335'
              />
            </svg>
            Sign in with Google
          </Button>

          <div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600'>
            Or
          </div>

          <Form onSubmit={handleSubmit}>
            <div className='grid gap-y-4'>
              <div>
                <Input
                  label='Email'
                  type='email'
                  id='email'
                  name='email'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                  required
                  aria-describedby='email-error'
                />
                <p className='hidden text-xs text-red-600 mt-2' id='email-error'>
                  Please include a valid email address so we can get back to you
                </p>
              </div>

              <div>
                <Input
                  label={
                    <div className='flex justify-between items-center'>
                      <Label htmlFor='password'>Password</Label>
                      <a
                        className='text-sm text-blue-600 decoration-2 hover:underline font-medium'
                        href='../examples/html/recover-account.html'
                      >
                        Forgot password?
                      </a>
                    </div>
                  }
                  type='password'
                  id='password'
                  name='password'
                  className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                  required
                  aria-describedby='password-error'
                />
                <p className='hidden text-xs text-red-600 mt-2' id='password-error'>
                  8+ characters required
                </p>
              </div>

              <Checkbox label='Remember me' name='remember-me' />

              <Submit>Sign in</Submit>
            </div>
          </Form>
        </div>
      </div>
    </div>
  ),
};
