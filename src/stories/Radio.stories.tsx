import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Radio, Form, Submit, InputGroup } from '../lib';
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

export const ListWithDescription: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <InputGroup className='!border-transparent'>
        <Radio {...args} />
        <Radio {...args} />
        <Radio {...args} />
      </InputGroup>

      <InputGroup className='!flex-col !items-start !border-transparent space-y-4 mt-10'>
        <Radio {...args} />
        <Radio {...args} />
        <Radio {...args} />
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
          <Radio {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Radio {...args} />
        </InputGroup>
      </div>

      <div className='flex flex-col space-y-2 mt-10 w-1/2'>
        <InputGroup className='!flex-1'>
          <Radio {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Radio {...args} />
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
          <Radio {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Radio {...args} />
        </InputGroup>
      </div>

      <div className='flex flex-col space-y-2 mt-10 w-1/2'>
        <InputGroup className='!flex-1'>
          <Radio {...args} />
        </InputGroup>
        <InputGroup className='flex-1'>
          <Radio {...args} />
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

export const withError: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
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
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
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
