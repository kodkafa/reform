import type { Meta } from '@storybook/react';
import React from 'react';
import { Checkbox, ErrorArea, Form, Input, InputGroup, PasswordInput, Submit } from '../../lib';
import { handleLogin, schema } from '../helpers/Handlers';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/Login Form',
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
    <div className='max-w-sm p-6 border'>
      <h3 className='mb-4 block text-2xl font-bold text-gray-800 dark:text-white'>LOGIN</h3>
      <Form schema={schema} onSubmit={handleLogin}>
        <div className='flex flex-col gap-4'>
          <InputGroup label='Email adress'>
            <Input name='email' placeholder='jon@doe.com' />
            <span className='p-2'>👤</span>
          </InputGroup>
          <PasswordInput label='Password' name='password' placeholder='your strong password' />
          <div className='flex justify-between'>
            <Checkbox label='Remember me' name='remember' />
            <a href='src/stories#' className='text-primary mb-1 text-sm'>
              Forgot password
            </a>
          </div>
          <ErrorArea />
          <div>
            <Submit>Login</Submit>
          </div>
        </div>
      </Form>
    </div>
  ),
};
