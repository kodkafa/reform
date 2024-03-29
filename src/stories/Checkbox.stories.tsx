import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Checkbox, Form, InputGroup, Submit } from '../lib';
import { Props } from '../lib/Checkbox';
import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Checkbox {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <Checkbox {...args} />
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

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/[0-9]+/)
    .required('Required'),
});
export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
      <Checkbox {...args} />
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
        <Checkbox {...args} value={1} />
        <Checkbox {...args} value={2} />
        <Checkbox {...args} value={3} />
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
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
      <InputGroup className='flex flex-col gap-2 !border-transparent'>
        <Checkbox {...args} value={'1'} />
        <Checkbox {...args} value={'2'} />
        <Checkbox {...args} value={'3'} />
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
      <InputGroup className='flex flex-row gap-4 !border-transparent'>
        <Checkbox {...args} value={1} />
        <Checkbox {...args} value={2} />
        <Checkbox {...args} value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const inInputGroupRowReverse: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <InputGroup className='flex flex-row gap-4 !border-transparent'>
        <Checkbox {...args} value={1} />
        <Checkbox {...args} value={2} />
        <Checkbox {...args} value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    className: 'flex-row-reverse',
  },
};

export const asOrderedArray: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <InputGroup className='flex flex-row gap-4 !border-transparent'>
        <Checkbox {...args} name='name[0]' value={1} />
        <Checkbox {...args} name='name[1]' value={2} />
        <Checkbox {...args} name='name[2]' value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
export const asObjectMap: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <InputGroup className='flex flex-row gap-4 !border-transparent'>
        <Checkbox {...args} name='name[a]' value={1} />
        <Checkbox {...args} name='name[b]' value={2} />
        <Checkbox {...args} name='name[c]' value={3} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
  },
};
