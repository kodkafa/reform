import type { Meta } from '@storybook/react';
import { Button, Form, Input, Submit, Textarea } from '../../lib';
import { Stories } from '@storybook/blocks';
import { handleSubmit } from '../helpers/Handlers';

const meta = {
  title: 'reform/Examples/Subscribe',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
export const Default = {
  render: () => (
    <div className='max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto'>
      <div className='max-w-xl text-center mx-auto'>
        <div className='mb-5'>
          <h2 className='text-2xl font-bold md:text-3xl md:leading-tight dark:text-white'>
            Sign up to our newsletter
          </h2>
        </div>

        <Form onSubmit={handleSubmit}>
          <div className='mt-5 lg:mt-8 flex items-center justify-center space-x-2 sm:flex-row sm:space-x-3'>
            <Input className='w-full' name='email' placeholder='Enter your email' />
            <Submit className='!w-12'>Subscribe</Submit>
          </div>
        </Form>
      </div>
    </div>
  ),
};
