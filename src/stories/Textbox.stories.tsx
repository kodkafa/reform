import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, Textbox } from '../lib';
import { Props } from '../lib/Textbox';

import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Textbox',
  component: Textbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Textbox {...args} />
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
      <Textbox {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    resize: false,
  },
};
