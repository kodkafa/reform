import type { Meta, StoryObj } from '@storybook/react';

import { File, Form, Submit } from '../lib';
import { Props } from '../lib/File';
import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/File',
  component: File,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <File {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const Sizes: Story = {
  render: (args: Props) => (
    <Form className='space-y-2' onSubmit={handleSubmit}>
      <File {...args} size='sm' />
      <File {...args} size='md' />
      <File {...args} size='lg' />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const DifferentStyle: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <File
        className='
      !border-none file:font-semibold
      file:!text-sm
      file:!bg-blue-500 file:!text-white
      hover:file:!bg-blue-600
      '
        size='sm'
        {...args}
      />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
