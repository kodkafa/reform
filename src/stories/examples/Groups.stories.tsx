import type { Meta } from '@storybook/react';
import { Checkbox, Form, Input, InputGroup, PasswordInput, Select, Submit } from '../../lib';
import { handleSubmit, schema } from '../helpers/Handlers';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/Input Groups',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

export const Left = {
  render: () => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Checkbox name="checkbox" />
          <Input name="input" />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
};

export const Right = {
  render: () => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input name="input" />
          <Select
            name="select"
            placeholder="Please Select"
            options={[{ children: 'option 1' }, { children: 'option 2' }]}
          />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
};

export const LeftAndRight = {
  render: () => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Checkbox label="I'm in a group!" name="checkbox" />
          <Input name="input" />
          <Select
            name="select"
            placeholder="Please Select"
            options={[{ children: 'option 1' }, { children: 'option 2' }]}
          />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
};

export const Password = {
  render: () => (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Checkbox name="checkbox" />
          <PasswordInput name="input" />
          <Select
            name="select"
            placeholder="Please Select"
            options={[{ children: 'option 1' }, { children: 'option 2' }]}
          />
        </InputGroup>
        <Submit>Submit</Submit>
      </Form>
    </div>
  ),
};
