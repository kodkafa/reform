import type { Meta, StoryObj } from '@storybook/react';

import { Button, Props } from '../lib/Button';

const meta = {
  title: 'reform/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args: Props) => <Button {...args} />,
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='space-x-2'>
      <Button variant='solid'>Solid</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='soft'>Soft</Button>
      <Button variant='white'>White</Button>
      <Button variant='link'>Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='space-x-2'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
};

export const SolidColorVariants: Story = {
  render: (args: Props) => (
    <div className='space-x-2'>
      <Button
        className='!bg-gray-800 hover:!bg-gray-900 focus:!ring-gray-800 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        className='!bg-gray-500 hover:!bg-gray-600 dark:!bg-gray-700 dark:hover:!bg-gray-600'
        {...args}
      />

      <Button
        className='!bg-red-500 hover:!bg-red-600 focus:!ring-red-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button
        className='!bg-yellow-500 hover:!bg-yellow-600 focus:!ring-yellow-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button
        className='!bg-green-500 hover:!bg-green-600 focus:!ring-green-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button {...args} />

      <Button
        className='!bg-indigo-500 hover:!bg-indigo-600 focus:!ring-indigo-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button
        className='!bg-purple-500 hover:!bg-purple-600 focus:!ring-purple-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button
        className='!bg-pink-500 hover:!bg-pink-600 focus:!ring-pink-500 dark:focus:!ring-offset-gray-800'
        {...args}
      />

      <Button
        className='!bg-white !text-gray-600 hover:!bg-gray-50 focus:!ring-white dark:focus:!ring-offset-gray-800'
        {...args}
      />
    </div>
  ),
  args: {
    children: 'Button',
  },
};

export const OutlineColorVariants: Story = {
  render: (args: Props) => (
    <div className='space-x-2'>
      <Button
        type='button'
        className='!border-gray-900 !text-gray-800 hover:!text-white hover:!bg-gray-800 hover:!border-gray-800 focus:!ring-gray-800 dark:hover:!bg-gray-900 dark:!border-gray-900 dark:hover:!border-gray-900 dark:!text-white dark:focus:!ring-gray-900 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-gray-200 !text-gray-500 hover:!text-white hover:!bg-gray-500 hover:!border-gray-500 focus:!ring-gray-200 dark:hover:!bg-gray-600 dark:!border-gray-700 dark:hover:!border-gray-600 dark:focus:!ring-gray-600 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-red-200 !text-red-500 hover:!text-white hover:!bg-red-500 hover:!border-red-500 focus:!ring-red-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-yellow-200 !text-yellow-500 hover:!text-white hover:!bg-yellow-500 hover:!border-yellow-500 focus:!ring-yellow-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-green-200 !text-green-500 hover:!text-white hover:!bg-green-500 hover:!border-green-500 focus:!ring-green-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button type='button' {...args} />
      <Button
        type='button'
        className='!border-indigo-200 !text-indigo-500 hover:!text-white hover:!bg-indigo-500 hover:!border-indigo-500 focus:!ring-indigo-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-purple-200 !text-purple-500 hover:!text-white hover:!bg-purple-500 hover:!border-purple-500 focus:!ring-purple-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-pink-200 !text-pink-500 hover:!text-white hover:!bg-pink-500 hover:!border-pink-500 focus:!ring-pink-200 dark:focus:!ring-offset-gray-800'
        {...args}
      />
      <Button
        type='button'
        className='!border-gray-100 !text-gray-400 hover:!bg-white hover:!border-white focus:!ring-white dark:focus:!ring-offset-gray-800'
        {...args}
      />
    </div>
  ),
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Pilled: Story = {
  render: (args: Props) => (
    <div className='space-x-2'>
      <Button pilled {...args} />
      <Button pilled variant='white' {...args} />
    </div>
  ),
  args: {
    children: 'Button',
  },
};

export const BlockButton: Story = {
  render: (args: Props) => (
    <div className='space-y-2'>
      <Button {...args} />
      <Button variant='white' {...args} />
    </div>
  ),
  args: {
    children: 'Button',
    className: 'w-full',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className='space-y-8'>
      <div className='flex space-x-2'>
        <Button>
          Add to cart
          <svg
            className='w-3.5 h-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z' />
          </svg>
        </Button>

        <Button variant='white'>
          Signup free
          <svg
            className='w-2.5 h-auto'
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z'
              fill='currentColor'
            />
          </svg>
        </Button>
      </div>

      <div className='flex space-x-2'>
        <Button>
          <svg
            className='w-3.5 h-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z' />
          </svg>
        </Button>

        <Button variant='white'>
          <span
            className='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full'
            role='status'
            aria-label='loading'
          >
            <span className='sr-only'>Loading...</span>
          </span>
        </Button>
      </div>

      <div className='space-x-2'>
        <Button size='sm'>
          <svg
            className='w-3.5 h-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
          </svg>
        </Button>
        <Button size='md'>
          <svg
            className='w-3.5 h-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
          </svg>
        </Button>
        <Button size='lg'>
          <svg
            className='w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
          </svg>
        </Button>
      </div>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className='space-x-2'>
      <Button>
        <span className='sr-only'>Loading...</span>
        <span
          className='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full'
          role='status'
          aria-label='loading'
        >
          <span className='sr-only'>Loading...</span>
        </span>
      </Button>
      <Button>
        <span
          className='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full'
          role='status'
          aria-label='loading'
        ></span>
        Loading
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: Props) => (
    <div className='flex space-x-2'>
      <Button {...args} />
      <Button variant='white' {...args} />
    </div>
  ),
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
