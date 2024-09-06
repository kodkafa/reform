import { Stories } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Form, Input, Select, Submit, Switch, Textarea } from '../../lib';
import { handleSubmit, resolver } from '../helpers/Handlers';

const meta: Meta<typeof Form> = {
  title: 'reform/Examples/Disabled Form',
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
type Story = StoryObj<typeof Form>;

const DisabledForm = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => setDisabled(!disabled);
  return (
    <div className='max-w-lg p-6 border'>
      <h3 className='mb-4 block text-2xl font-bold text-gray-800 dark:text-white'>
        CONTACT (Disabled)
      </h3>
      <Form
        resolver={resolver}
        onSubmit={handleSubmit}
        disabled={disabled}
        defaultValues={{ email: 'jon@doe.com' }}
      >
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
              defaultValue='bug'
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
          <div className='w-full flex gap-4 justify-end'>
            <Button onClick={toggleDisabled}>Toggle Disable</Button>
            <Submit>Submit</Submit>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const Disabled: Story = {
  render: () => <DisabledForm />,
};
