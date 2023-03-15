import type { Meta, StoryObj } from '@storybook/react';

import { Form, PasswordInput, Submit } from '../lib';
import { Props } from '../lib/PasswordInput';
import { handleAsyncSubmit, handleSubmit, handleSubmitWithError } from './helpers/Handlers';

const meta = {
  title: 'reform/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <PasswordInput {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    placeholder: 'Jon Doe',
  },
};

export const WithLabel: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <PasswordInput {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <PasswordInput {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
    disabled: true,
  },
};

export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmitWithError}>
      <div>
        <PasswordInput {...args} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'password',
  },
};

export const withCustomIcon: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmit}>
      <div>
        <PasswordInput {...args} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'password',
    show: <i className='text-xs cursor-pointer bg-gray-200 rounded p-1'>show</i>,
    hide: <i className='text-xs cursor-pointer bg-gray-200 rounded p-1'>hide</i>,
  },
};
