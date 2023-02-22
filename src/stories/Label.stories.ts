import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../lib';

const meta = {
  title: 'reform/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'label',
  },
};
