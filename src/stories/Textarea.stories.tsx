import { yupResolver } from '@hookform/resolvers/yup';
import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';
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
  },
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/[0-9]+/)
    .required('Required'),
});
const resolver = yupResolver(schema);

export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} resolver={resolver}>
      <Textarea {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
  },
};

export const WithLabel: Story = {
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
