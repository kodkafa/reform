import type { Meta } from '@storybook/react';
import { Checkbox, Form, Input, InputGroup, Submit } from '../lib';
import { handleSubmit } from './helpers/Handlers';
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
          <Checkbox name="checkbox" />
          <Input name="input" />
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
          <Checkbox name="checkbox" />
          <Input name="input" />
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
            <Checkbox name="checkbox" />
            <Input name="input" />
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
