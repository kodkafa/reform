import { yupResolver } from '@hookform/resolvers/yup';
import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Form, InputGroup, Radio, Submit } from '../lib';
import { Props } from '../lib/Radio';
import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Radio {...args} />
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
    .matches(/[a-z]+/)
    .required('Required'),
});
const resolver = yupResolver(schema);
export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Radio {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
    disabled: true,
  },
};

export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} resolver={resolver}>
      <Radio {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
  },
};

export const Group: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <InputGroup className='flex flex-col gap-2 !border-transparent'>
        <Radio {...args} value={1} />
        <Radio {...args} value={2} />
        <Radio {...args} value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const GroupWithError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} resolver={resolver}>
      <InputGroup className='flex flex-col gap-2 !border-transparent'>
        <Radio {...args} value={'1'} />
        <Radio {...args} value={'2'} />
        <Radio {...args} value={'3'} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
export const GroupRow: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <InputGroup className='flex flex-col gap-2 !border-transparent'>
        <Radio {...args} value={1} />
        <Radio {...args} value={2} />
        <Radio {...args} value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
