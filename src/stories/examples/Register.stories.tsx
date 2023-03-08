import type { Meta } from '@storybook/react';
import { Checkbox, Form, Input, PasswordInput, Submit, Switch } from '../../lib';
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
    <div className="max-w-sm p-6 border">
      <h3 className="mb-4 block text-2xl font-bold text-gray-800 dark:text-white">LOGIN</h3>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input label="Name Surname" name="email" placeholder="John Doe" className="text-gray-800 " />
          <Input label="Email adress" name="email" placeholder="jon@doe.com" className="text-gray-800 " />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Select a Strong Password: 12345"
            className="text-gray-800 "
          />

          <div className="flex">
            <Switch name="receiveEmail" checked label="Receive email" />
          </div>

          <div className="flex justify-between">
            <Checkbox label="Remember me" name="remember" labelPosition="right" />
            <a href="src/stories#" className="text-primary mb-1 text-sm">
              Forgot password
            </a>
          </div>
          <div>
            <Submit>Login</Submit>
          </div>
        </div>
      </Form>
    </div>
  ),
};
