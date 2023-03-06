import type { Meta, StoryObj } from '@storybook/react';
import { Form, Submit, InputGroup, Select, Checkbox } from '../lib';
import { Props } from '../lib/InputGroup';

import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <InputGroup {...args}>
        <Select
          name="select"
          placeholder="Please Select"
          options={[{ children: '1' }, { children: '2' }, { children: '3' }]}
        />
      </InputGroup>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    placeholder: 'Please write something..',
  },
};
