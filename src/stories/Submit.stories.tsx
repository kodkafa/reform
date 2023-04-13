import type { Meta, StoryObj } from '@storybook/react';

import { Props } from '../lib/Button';
import { Form, Input, Submit } from '../lib';
import {
  handleAsyncSubmit,
  handleAsyncSubmitWithError,
  handleSubmit,
  handleSubmitWithError,
} from './helpers/Handlers';

const meta = {
  title: 'reform/Submit',
  component: Submit,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Submit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    children: 'Submit Text',
  },
};

export const Disabled: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    children: 'Submit Text',
    disabled: true,
  },
};

export const Async: Story = {
  render: (args: Props) => (
    <div>
      <Form
        onSubmit={async (data) => {
          await new Promise((resolve) => {
            const textElement = document.createElement('div');
            textElement.textContent = data.input as string;
            document.body.appendChild(textElement);

            setTimeout(resolve, 1000);
          });
        }}
      >
        <Input name='input' value='written' />
        <Submit role='submit'>Submit</Submit>
      </Form>
    </div>
  ),
  args: {
    children: 'Submit Text',
  },
};

export const WithError: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleSubmitWithError}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    children: 'Submit Text',
  },
};
export const AsyncWithError: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmitWithError}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    children: 'Submit Text',
  },
};

export const AsyncWithCustomIcon: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmitWithError}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    className: 'reform-submit-icon',
    children: (
      <>
        <b className='reform-icon'>⛺</b>
        <b className='reform-loader'>⛵</b>
        Submit Text
      </>
    ),
  },
};

export const AsyncWithCustomText: Story = {
  render: (args: Props) => (
    <Form onSubmit={handleAsyncSubmitWithError}>
      <div>
        <Input name='text' placeholder='write something...' />
      </div>
      <Submit {...args} />
    </Form>
  ),
  args: {
    className: 'reform-submit-icon',
    children: (
      <>
        <span className='reform-icon'>Submit Text</span>
        <span className='reform-loader !animate-none'>Submitting...</span>
      </>
    ),
  },
};
