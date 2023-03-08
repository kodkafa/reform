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
          <Checkbox name='checkbox' />
          <Input name='input' />
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
          <Checkbox name='checkbox' />
          <Input name='input' />
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
            <Checkbox name='checkbox' value='true' />
            <Input name='input' label='sdfdsf' />
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
            placeholder='search in'
          />
          <Input name='q' placeholder='search ...' />
          <Submit className='!rounded-l-none'>SEARCH</Submit>
        </InputGroup>
      </Form>
    </div>
  ),
  args: {
    className: 'divide-x',
  },
};
