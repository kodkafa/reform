import type { Meta } from '@storybook/react';
import React from 'react';
import {
  Checkbox,
  ErrorArea,
  Form,
  Input,
  InputGroup,
  PasswordInput,
  Select,
  Submit,
  Switch,
  Textarea,
} from '../../lib';
import { handleLogin, handleSubmit, schema } from '../helpers/Handlers';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/Contact Form',
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
    <div className='max-w-lg p-6 border'>
      <h3 className='mb-4 block text-2xl font-bold text-gray-800 dark:text-white'>CONTACT</h3>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <div>
            <Input
              label='Email address'
              name='email'
              placeholder='jon@doe.com'
              className='text-gray-800 '
            />
          </div>
          <div>
            <Select
              label='Subject'
              name='subject'
              options={[
                {
                  children: 'Bug Report',
                  value: 'bug',
                },
                {
                  children: 'Feature',
                  value: 'feature',
                },
              ]}
              className='text-gray-800 '
            />
          </div>
          <div>
            <Textarea
              label='Message'
              name='message'
              placeholder='your message ...'
              className='text-gray-800 !text-red-500/50'
            />
          </div>
          <div className='flex justify-end'>
            <Switch
              label='Would you like to receive read notifications?'
              name='readNotification'
              className='flex-row-reverse'
            />
          </div>
          <div>
            <Submit>Submit</Submit>
          </div>
        </div>
      </Form>
    </div>
  ),
};
