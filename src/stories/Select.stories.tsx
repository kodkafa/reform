import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, Select } from '../lib';
import { Props } from '../lib/Select';
import * as Yup from 'yup';

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
    options: [
      {
        value: 1,
        children: 'One',
      },
      {
        value: 2,
        children: 'Two',
        disabled: true,
      },
      {
        value: 3,
        children: <strong className='font-semibold'>Three</strong>,
      },
    ],
  },
};

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/).required('Required'),
});
export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
      <Select {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    options: [
      {
        value: 1,
        children: 'One',
      },
      {
        value: 2,
        children: 'Two',
        disabled: true,
      },
      {
        value: 3,
        children: <strong className='font-semibold'>Three</strong>,
      },
    ],
  },
};

export const WithLabel: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Select {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    label: 'Label',
    options: [
      {
        value: 1,
        children: 'One',
      },
      {
        value: 2,
        children: 'Two',
        disabled: true,
      },
      {
        value: 3,
        children: <strong className='font-semibold'>Three</strong>,
      },
    ],
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div>
        <Select {...args} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    label: 'Label',
    disabled: true,
    options: [
      {
        value: 1,
        children: 'One',
      },
      {
        value: 2,
        children: 'Two',
        disabled: true,
      },
      {
        value: 3,
        children: <strong className='font-semibold'>Three</strong>,
      },
    ],
  },
};

export const withPlaceHolder: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div>
        <Select {...args} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    placeholder: 'Please Select',
    options: [
      {
        value: 1,
        children: 'One',
      },
      {
        value: 2,
        children: 'Two (Disabled)',
        disabled: true,
      },
      {
        value: 3,
        children: <strong className='font-semibold'>Three</strong>,
      },
    ],
  },
};
