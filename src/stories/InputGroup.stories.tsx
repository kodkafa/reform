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

export const LeadingIcon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <svg
            className='h-4 w-4 text-gray-400 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
          </svg>

          <Input className='h-10' name='input' placeholder='Leading' />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const TrailingIcon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <Input className='h-10' name='input' placeholder='Trailing' />
          <svg
            className='h-4 w-4 text-gray-400 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
            <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
          </svg>
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    name: 'group',
  },
};

export const LeadingAndTrailingIcon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <svg
            className='h-4 w-4 text-gray-400 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
          </svg>

          <Input className='h-10' name='input' placeholder='Leading And Trailing' />

          <svg
            className='h-4 w-4 text-gray-400 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
            <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
          </svg>
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

export const MultipleAddon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup {...args}>
          <p className='h-10 px-4 border-r border-gray-200 inline-flex items-center w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            $
          </p>
          <p className='h-10 px-4 mr-2 border-r border-gray-200 inline-flex items-center w-max rounded-l-md bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            0.00
          </p>
          <Input className='h-10' name='input-1' placeholder='Please write something..' />
        </InputGroup>

        <InputGroup {...args}>
          <Input className='h-10' name='input-2' placeholder='Please write something..' />
          <p className='h-10 px-4 border-l border-gray-200 inline-flex items-center w-max bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            $
          </p>
          <p className='h-10 px-4 border-l border-gray-200 inline-flex items-center w-max bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400'>
            0.00
          </p>
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
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
export const TrailingButtonAddon = {
  render: (args: Props) => (
    <div>
      <Form onSubmit={handleAsyncSubmitWithError} schema={searchSchema}>
        <InputGroup {...args}>
          <Select
            name='type'
            className='mx-2'
            options={[
              { children: 'Users', value: 'users' },
              { children: 'Groups', value: 'groups' },
              { children: 'Posts', value: 'posts' },
            ]}
            placeholder='search in'
          />
          <Input className='!border-l' name='input-1' placeholder='search ...' />
          <Submit className='!rounded-l-none'>SEARCH</Submit>
        </InputGroup>

        <InputGroup {...args}>
          <svg
            className='h-4 w-4 text-gray-400 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
          </svg>

          <Input className='h-10' name='input-2' placeholder='Leading' />
        </InputGroup>
      </Form>
    </div>
  ),
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
