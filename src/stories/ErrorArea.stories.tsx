import type { Meta, StoryObj } from '@storybook/react';
import { ErrorArea, Form, Input, Submit } from '../lib';
import { Props } from '../lib/ErrorArea';

import { handleAsyncSubmitWithError, handleAsyncSubmitWithErrorDetails } from './helpers/Handlers';

const meta = {
  title: 'reform/ErrorArea',
  component: ErrorArea,

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmitWithError}>
      <div>
        <Input name='name' />
      </div>
      <ErrorArea {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'generic',
  },
};

export const withErrorDetails: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmitWithErrorDetails}>
      <div>
        <Input name='name' />
      </div>
      <ErrorArea {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'generic',
  },
};
