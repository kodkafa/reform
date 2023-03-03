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
      <InputGroup {...args} />
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'name',
    placeholder: 'Please write something..',
    padStart: (
      <div className="mr-2">
        <Checkbox name="checkbox" label="Checkbox" />
      </div>
    ),
    padEnd: (
      <div className="flex items-center">
        <Select name="select" title="Select" options={['1', '2']} />
      </div>
    ),
  },
};
