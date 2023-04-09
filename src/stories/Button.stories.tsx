import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../lib';

import { Button, Props } from '../lib/Button';
// import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => (
    <Form>
      <Button {...args} />
    </Form>
  ),
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form>
      <Button {...args} />
    </Form>
  ),
  args: {
    children: 'Button',
    disabled: true,
  },
};
