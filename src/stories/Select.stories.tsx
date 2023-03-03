import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, Select } from '../lib';
import { Props } from '../lib/Select';

import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Select {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    title: 'Please Select',
    options: ['1', '2', '3'],
    // value: 'value',
  },
};
