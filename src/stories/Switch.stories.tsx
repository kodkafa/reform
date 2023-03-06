import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, Switch } from '../lib';
import { Props } from '../lib/Switch';

import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Switch {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    off: 'off',
    on: 'on',
    label: 'Label',
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Switch {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    off: 'off',
    on: 'on',
    disabled: true,
  },
};
