import type { Meta } from '@storybook/react';
import { Checkbox, Form, Input, InputGroup, PasswordInput, Submit, Switch } from '../../lib';
import { handleSubmit, schema } from '../helpers/Handlers';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/Register Form',
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
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <div className='flex space-x-4'>
            <div>
              <Input
                label='Name Surname'
                name='name'
                placeholder='John'
                className='text-gray-800 '
              />
            </div>
            <div>
              <Input label='Surname' name='surname' placeholder='Doe' className='text-gray-800 ' />
            </div>
          </div>
        </div>
        <InputGroup label='Email address'>
          <span className='p-2'>📧</span>
          <Input name='email' placeholder='jon@doe.com' className='text-gray-800 ' />
        </InputGroup>
        <PasswordInput
          label='Password'
          name='password'
          placeholder='Select a Strong Password: 12345'
          className='text-gray-800 '
        />

        <InputGroup className='!border-0 !bg-transparent p-1'>
          <Switch name='receiveEmail' defaultChecked={true} label='Receive email' />
        </InputGroup>
        <div>
          <Submit>Register</Submit>
        </div>
      </Form>
    </div>
  ),
};
