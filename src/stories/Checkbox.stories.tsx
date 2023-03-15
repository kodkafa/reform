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

export const ListWithDescription: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='!border-transparent'>
        <Checkbox {...args} />
        <Checkbox {...args} />
        <Checkbox {...args} />
      </InputGroup>

      <InputGroup className='!flex-col !items-start !border-transparent space-y-4 mt-10'>
        <Checkbox {...args} />
        <Checkbox {...args} />
        <Checkbox {...args} />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Jon Doe',
    description: (
      <span
        id='hs-checkbox-delete-description'
        className='block text-sm text-gray-600 dark:text-gray-500'
      >
        Notify me when this action happens.
      </span>
    ),
  },
};

export const WithinInputGroup: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div className='flex w-full space-x-2'>
        <InputGroup className='!flex-1'>
          <Checkbox {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Checkbox {...args} />
        </InputGroup>
      </div>

      <div className='flex flex-col space-y-2 mt-10 w-1/2'>
        <InputGroup className='!flex-1'>
          <Checkbox {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Checkbox {...args} />
        </InputGroup>
      </div>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    className: 'w-full p-3',
  },
};

export const WithinInputGroupRowReverse: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div className='flex w-full space-x-2'>
        <InputGroup className='!flex-1'>
          <Checkbox {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Checkbox {...args} />
        </InputGroup>
      </div>

      <div className='flex flex-col space-y-2 mt-10 w-1/2'>
        <InputGroup className='!flex-1'>
          <Checkbox {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Checkbox {...args} />
        </InputGroup>
      </div>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    className: 'w-full justify-between p-3 flex-row-reverse',
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

export const InInputGroupRowReverse: Story = {
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
