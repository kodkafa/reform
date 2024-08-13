import type { Meta, StoryObj } from '@storybook/react';
import * as Yup from 'yup';

import { Form, Input, Submit } from '../lib';
import { Props } from '../lib/Input';
import { CustomInput } from './CustomInput.component';
import { handleSubmit } from './helpers/Handlers';

const meta = {
  title: 'reform/CustomInput',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input name='input' placeholder='standart input' />
      </div>
      <div>
        <CustomInput {...args} />
      </div>
      <Submit>Submit</Submit>
    </Form>
  ),
  args: {
    name: 'customInput',
    placeholder: 'Jon Doe',
  },
};
