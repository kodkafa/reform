import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Form, PasswordInput, Submit } from '../lib';
import { Props } from '../lib/PasswordInput';
import { handleSubmit } from './helpers/Handlers';

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
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
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
      <PasswordInput {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
