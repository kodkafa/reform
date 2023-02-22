import type { Meta, StoryObj } from '@storybook/react';

import { Form, Input, Submit } from '../lib';
import { handleSubmit } from './helpers/Handlers';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'reform/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    onChange: handleSubmit,
    children: (
      <>
        <Input name="name" />
        <Submit>Submit </Submit>
      </>
    ),
  },
};
