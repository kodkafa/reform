import type { Meta } from '@storybook/react';
import { Checkbox, Form, Input, InputGroup, Select, Submit } from '../lib';
import { handleAsyncSubmitWithError, handleSubmit } from './helpers/Handlers';
import * as Yup from 'yup';
import { Props } from 'src/lib/InputGroup';

const meta = {
  title: 'reform/InputGroup',
  component: Form,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

export const Default = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <Checkbox className='ml-2' name='checkbox' />
          <Input name='input' placeholder='Please write something..' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const Sizes = {
  render: () => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <p className='h-8 px-4 mr-2 border-r border-gray-200 inline-flex items-center  w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            Small
          </p>
          <Input className='h-8' name='small-input' placeholder='Please write something..' />
        </InputGroup>

        <InputGroup>
          <p className='h-10 px-4 mr-2 border-r border-gray-200 inline-flex items-center  w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            Medium
          </p>
          <Input className='h-10' name='medium-input' placeholder='Please write something..' />
        </InputGroup>

        <InputGroup>
          <p className='h-12 px-4 mr-2 border-r border-gray-200 inline-flex items-center  w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            Large
          </p>
          <Input name='large-input-input' placeholder='Please write something..' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
};

export const MultipleInputs = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <p className='h-10 px-4 border-r border-gray-200 inline-flex items-center bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            First and last name
          </p>
          <Input className='h-10' name='first-name-input-1' />
          <Input className='h-10 !border-l border-l-gray-200' name='last-name-input-1' />
        </InputGroup>

        <InputGroup {...args}>
          <Input className='h-10' name='first-name-input-2' />
          <Input className='h-10 !border-l border-l-gray-200' name='last-name-input-2' />
          <p className='h-10 px-4 border-l border-gray-200 inline-flex items-center bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            First and last name
          </p>
        </InputGroup>

        <InputGroup {...args}>
          <Input className='h-10' name='left-input-1' />
          <p className='h-10 px-4 border-l border-r border-gray-200 inline-flex items-center bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            Cool
          </p>
          <Input className='h-10' name='right-input-1' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const Addon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <p className='h-10 px-4 mr-2 border-r border-gray-200 inline-flex items-center  w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            https://
          </p>
          <Input className='h-10' name='input' placeholder='Please write something..' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const InlineAddon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <p className='h-10 ml-4 mr-2 inline-flex items-center w-max rounded-l-md text-sm text-gray-400'>
            https://
          </p>
          <Input name='input' placeholder='www.example.com' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const WithInputIcon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <Input className='ml-4' name='input' placeholder='Please write something..' />
          <p className='text-gray-500 mr-4'>USD</p>
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const WithLabel = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <Checkbox className='ml-2' name='checkbox' />
          <Input name='input' placeholder='Please write something..' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
    label: 'Label',
  },
};

const schema = Yup.object().shape({
  checkbox: Yup.string().equals(['true']).required('Required'),
  input: Yup.string()
    .trim()
    .matches(/[0-9]+/)
    .required('Required'),
});

export const WithError = {
  render: (args: Props) => {
    return (
      <div>
        <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))} schema={schema}>
          <InputGroup {...args}>
            <Checkbox className='ml-2 mr-1' name='checkbox' />
            <Input name='input' placeholder='Please write something..' />
          </InputGroup>
          <Submit>Submit</Submit>
        </Form>
      </div>
    );
  },
  args: {
    name: 'group',
  },
};

const searchSchema = Yup.object().shape({
  type: Yup.string().equals(['users', 'groups', 'posts']).required('Required'),
  q: Yup.string()
    .trim()
    .matches(/[A-z 0-9]+/)
    .required('Required'),
});
export const WithSearchButton = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleAsyncSubmitWithError} schema={searchSchema}>
        <InputGroup {...args}>
          <Select
            name='type'
            options={[
              { children: 'Users', value: 'users' },
              { children: 'Groups', value: 'groups' },
              { children: 'Posts', value: 'posts' },
            ]}
            className='mx-2'
            placeholder='search in'
          />
          <Input className='!border-l' name='q' placeholder='search ...' />
          <Submit className='!rounded-l-none'>SEARCH</Submit>
        </InputGroup>
      </Form>
    </div>
  ),
};
