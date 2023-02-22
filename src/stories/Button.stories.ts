import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../lib/Button';

const meta = {
  title: 'reform/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: 'Button',
  },
};
