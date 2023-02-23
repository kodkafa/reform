import type { Meta, StoryObj } from '@storybook/react';

import { Radio, Form, Submit } from '../lib';
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

export const Group: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <div className="flex flex-col gap-2">
        <Radio {...args} value={1} />
        <Radio {...args} value={2} />
        <Radio {...args} value={3} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    labelPosition: 'left',
  },
};

export const GroupRow: Story = {
  render: (args: Props) => (
    <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
      <div className="flex flex-row gap-4">
        <Radio {...args} value={1} />
        <Radio {...args} value={2} />
        <Radio {...args} value={3} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    label: 'Label',
    name: 'name',
    labelPosition: 'left',
  },
};
