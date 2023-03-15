import type { Meta } from '@storybook/react';
import { Form, Input, Submit, Textarea } from '../../lib';
import { Stories } from '@storybook/blocks';
import { handleSubmit } from '../helpers/Handlers';

const meta = {
  title: 'reform/Examples/Feedback',
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
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='mx-auto max-w-2xl'>
        <div className='text-center'>
          <h2 className='text-xl text-gray-800 font-bold sm:text-3xl dark:text-white'>
            Post a comment
          </h2>
        </div>

        <div className='mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700'>
          <Form onSubmit={handleSubmit}>
            <Input
              name='firstName'
              label='First name'
              type='text'
              id='hs-feedback-post-comment-name-1'
              className='mb-4 sm:mb-8'
              placeholder='Full name'
            />

            <Input
              name='emailAdderss'
              label='Email address'
              type='email'
              id='hs-feedback-post-comment-email-1'
              className='mb-4 sm:mb-8'
              placeholder='Email address'
            />

            <Textarea
              // id='hs-feedback-post-comment-textarea-1'
              label='Comment'
              name='comment'
              rows={3}
              className='mt-1 !h-24'
              placeholder='Leave your comment here...'
            />

            <Submit className='mt-6'>Submit</Submit>
          </Form>
        </div>
      </div>
    </div>
  ),
};
