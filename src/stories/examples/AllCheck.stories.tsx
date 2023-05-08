import type { Meta } from '@storybook/react';
import {
  Checkbox,
  Form,
  Input,
  InputGroup,
  PasswordInput,
  Radio,
  Select,
  Submit,
  Switch,
  Textarea,
} from '../../lib';
import { handleSubmit, schema } from '../helpers/Handlers';
import { Stories } from '@storybook/blocks';

const meta = {
  title: 'reform/Examples/All Elements',
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
    <div className='max-w-lg p-6 border'>
      <h3 className='mb-4 block text-2xl font-bold text-gray-800 dark:text-white'>LOGIN</h3>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <div className='flex space-x-4'>
            <div>
              <Input label='Plain Input' name='input' placeholder='plain input' />
            </div>
            <div>
              <Input label='Disabled' placeholder='plain input' disabled />
            </div>
            <div>
              <Input label='Disabled' defaultValue='value text' disabled />
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <InputGroup label='Input Group'>
            <span className='p-2'>📧</span>
            <Input name='input-group' placeholder='input group' />
          </InputGroup>
          <InputGroup label='Disabled'>
            <span className='p-2'>📧</span>
            <Input placeholder='input group' disabled />
          </InputGroup>
        </div>
        <div className='flex gap-2'>
          <PasswordInput
            label='Password'
            name='password'
            placeholder='Select a Strong Password: 12345'
          />
          <PasswordInput label='Disabled' placeholder='password' disabled />
        </div>
        <div className='flex gap-2'>
          <InputGroup className='!border-0 !bg-transparent p-1'>
            <Switch name='receiveEmail' defaultChecked={true} label='Receive email' />
          </InputGroup>
          <InputGroup className='!border-0 !bg-transparent p-1'>
            <Switch defaultChecked={true} label='Disabled' disabled />
          </InputGroup>
          <InputGroup className='!border-0 !bg-transparent p-1'>
            <Switch label='Disabled' disabled />
          </InputGroup>
        </div>

        <div className='flex gap-2'>
          <Radio name='radio' defaultChecked={true} value='radio-1' label='Radio 1' />
          <Radio name='radio' label='Radio 2' value='radio-2' disabled />
          <Radio name='radio' label='Radio 3' value='radio-3' />
          <Radio name='radio-2' label='Radio 4' value='radio-4' defaultChecked={true} disabled />
        </div>

        <div className='flex gap-2'>
          <Checkbox name='check1' defaultChecked={true} label='Checkbox 1' />
          <Checkbox name='check2' label='Checkbox 2' disabled />
          <Checkbox name='check3' label='Checkbox 3' />
          <Checkbox name='check4' label='Checkbox 4' defaultChecked={true} disabled />
        </div>

        <Textarea name='textarea' placeholder='textarea' />
        <Textarea name='textarea' placeholder='disabled textarea' disabled />

        <div className='flex gap-2'>
          <div>
            <Select
              name='select'
              options={[
                { label: 'Option 1', value: 'value-1' },
                {
                  label: 'Option 2',
                  value: 'value-2',
                },
                { label: 'Option 3', value: 'value-3' },
              ]}
            />
          </div>

          <div>
            <Select
              options={[
                { label: 'Option 1', value: 'value-1' },

                {
                  label: 'Option 2',
                  value: 'value-2',
                },
                { label: 'Option 3', value: 'value-3' },
              ]}
              disabled
            />
          </div>
        </div>

        <div className='flex gap-2'>
          <div>
            <Submit>Submit</Submit>
          </div>
          <div>
            <Submit disabled>Disabled Submit</Submit>
          </div>
        </div>
      </Form>
    </div>
  ),
};
