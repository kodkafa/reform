import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Form, Input, Submit } from '../lib';
import { Props } from '../lib/Input';
import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Input {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
  },
};

export const withIcon: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <Input {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    icon: <span>🦁</span>,
  },
};

export const withRightIcon: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <Input {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    icon: <span>✎</span>,
    iconPosition: 'right',
  },
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/[0-9]+/)
    .required('Required'),
});
export const withError: Story = {
  render: (args: Props) => (
    <Form
      onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
      schema={schema}
    >
      <Input {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    icon: <span>🦁</span>,
  },
};
