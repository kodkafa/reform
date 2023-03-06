import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, Textarea } from '../lib';
import { Props } from '../lib/Textarea';

import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Textarea {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    label: 'Label',
  },
};

export const NoResize: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Textarea {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    resize: false,
  },
};
