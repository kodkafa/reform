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
const options = [
  { label: 'Option 1', value: 'value-1' },

  {
    label: 'Option 2',
    value: 'value-2',
  },
  { label: 'Option 3', value: 'value-3' },
];

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
    <div className='flex'>
      <div className='max-w-xl p-6 border'>
        <h3 className='mb-4 block text-2xl font-bold text-gray-800 dark:text-white'>
          ALL ELEMENTS
        </h3>
        <Form schema={schema} onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex space-x-2'>
              <div>
                <Input label='Input' name='input' placeholder='place hodler' />
              </div>
              <div>
                <Input label='Input' name='input2' defaultValue='value text' />
              </div>
              <div>
                <Input label='Disabled' placeholder='place holder' disabled />
              </div>
              <div>
                <Input label='Disabled' defaultValue='value text' disabled />
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <InputGroup label='Input Group'>
              <span className='p-2'>📧</span>
              <Input name='input-group' placeholder='place hodler' />
            </InputGroup>
            <InputGroup label='Input Group'>
              <span className='p-2'>📧</span>
              <Input name='input-group2' placeholder='input group' defaultValue='value text' />
            </InputGroup>
            <InputGroup label='Disabled' disabled>
              <span className='p-2'>📧</span>
              <Input placeholder='place holder' disabled />
            </InputGroup>
            <InputGroup label='Disabled' disabled>
              <span className='p-2'>📧</span>
              <Input defaultValue='value text' disabled />
            </InputGroup>
          </div>
          <div className='flex gap-2'>
            <PasswordInput label='Password' name='password' placeholder='place holder' />
            <PasswordInput label='Password' name='password2' defaultValue='value text' />
            <PasswordInput label='Disabled' placeholder='place holder' disabled />
            <PasswordInput label='Disabled' defaultValue='value text' disabled />
          </div>
          <div className='flex gap-4'>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch name='switch' label='Switch' />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch name='switch2' defaultChecked={true} label='Switch' />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch label='Disabled' disabled />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch defaultChecked={true} label='Disabled' disabled />
            </InputGroup>
          </div>
          <div className='flex gap-4'>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch name='switch3' on='on' off='off' />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch name='switch4' defaultChecked={true} on='on' off='off' />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch on='on' off='off' disabled />
            </InputGroup>
            <InputGroup className='!border-0 !bg-transparent p-1'>
              <Switch defaultChecked={true} on='on' off='off' disabled />
            </InputGroup>
          </div>

          <div className='flex gap-8'>
            <Radio name='radio' value='radio-1' label='Radio' />
            <Radio name='radio' label='Radio' defaultChecked={true} value='radio-2' />
            <Radio name='radio' label='Radio' value='radio-3' disabled />
            <Radio name='radio-2' label='Radio' value='radio-4' defaultChecked={true} disabled />
          </div>

          <div className='flex gap-6'>
            <Checkbox name='check1' label='Checkbox' />
            <Checkbox name='check2' defaultChecked={true} label='Checkbox' />
            <Checkbox name='check3' label='Checkbox' disabled />
            <Checkbox name='check4' label='Checkbox' defaultChecked={true} disabled />
          </div>

          <div className='flex gap-2'>
            <div>
              <Textarea label='Textarea' name='textarea' placeholder='place holder' />
            </div>
            <div>
              <Textarea label='Textarea' name='textarea2' defaultValue='value text' />
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <Textarea label='Disabled' placeholder='place holder' disabled />
            </div>
            <div>
              <Textarea label='Disabled' defaultValue='value text' disabled />
            </div>
          </div>

          <div className='flex gap-2'>
            <div>
              <Select label='Select' name='select' placeholder='place holder' options={options} />
            </div>
            <div>
              <Select label='Select' name='select2' options={options} />
            </div>

            <div>
              <Select label='Disabled' placeholder='place holder' options={options} disabled />
            </div>
            <div>
              <Select label='Disabled' options={options} disabled />
            </div>
          </div>

          <div className='flex gap-2'>
            <div>
              <Submit>Submit</Submit>
            </div>
            <div className='reform-loading'>
              <Submit>Submit</Submit>
            </div>
            <div>
              <Submit disabled>Disabled</Submit>
            </div>
            <div className='reform-loading'>
              <Submit disabled>Disabled</Submit>
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <Submit>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b>
                Submit
              </Submit>
            </div>
            <div className='reform-loading'>
              <Submit className='reform-submit-icon'>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Submit
              </Submit>
            </div>
            <div>
              <Submit className='reform-submit-icon' disabled>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Disabled
              </Submit>
            </div>
            <div className='reform-loading'>
              <Submit className='reform-submit-icon' disabled>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Disabled
              </Submit>
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <Submit className='!from-transparent !to-transparent !bg-red-700'>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b>
                Submit
              </Submit>
            </div>
            <div className='reform-loading'>
              <Submit className='reform-submit-icon !from-transparent !to-transparent !bg-red-700'>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Submit
              </Submit>
            </div>
            <div>
              <Submit
                className='reform-submit-icon !from-transparent !to-transparent !bg-red-700 disabled:!bg-red-900'
                disabled
              >
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Disabled
              </Submit>
            </div>
            <div className='reform-loading'>
              <Submit
                className='reform-submit-icon !from-transparent !to-transparent !bg-red-700 dark:!bg-amber-600'
                disabled
              >
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b> Disabled
              </Submit>
            </div>
          </div>
          <div className='flex gap-2'>
            <div>
              <Input label='Plain Input' name='input' placeholder='place hodler' />
            </div>
            <InputGroup label='Input Group'>
              <span className='p-2'>📧</span>
              <Input name='input-group' placeholder='place hodler' />
            </InputGroup>
            <div>
              <Select label='Select' name='select' placeholder='place holder' options={options} />
            </div>
            <div>
              <label>&nbsp;</label>
              <Submit className='!from-transparent !to-transparent !bg-red-700'>
                <b className='reform-icon'>🍉</b>
                <b className='reform-loader'>🍄</b>
                Submit
              </Submit>
            </div>
          </div>
        </Form>
      </div>
      {/*<form>*/}
      {/*  <div className='flex flex-col gap-4'>*/}
      {/*    <div className='flex space-x-2'>*/}
      {/*      <div>*/}
      {/*        <input name='input' placeholder='place hodler' />*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <input name='input2' defaultValue='value text' />*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <input placeholder='place holder' disabled />*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <input defaultValue='value text' disabled />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <span className='p-2'>📧</span>*/}
      {/*      <input name='input-group' placeholder='place hodler' />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <span className='p-2'>📧</span>*/}
      {/*      <input name='input-group2' placeholder='input group' defaultValue='value text' />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <span className='p-2'>📧</span>*/}
      {/*      <input placeholder='place holder' disabled />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <span className='p-2'>📧</span>*/}
      {/*      <input defaultValue='value text' disabled />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <input name='password' placeholder='place holder' />*/}
      {/*    <input name='password2' defaultValue='value text' />*/}
      {/*    <input placeholder='place holder' disabled />*/}
      {/*    <input defaultValue='value text' disabled />*/}
      {/*  </div>*/}

      {/*  <div className='flex gap-8'>*/}
      {/*    <input type='radio' name='radio' value='radio-1' />*/}
      {/*    <input type='radio' name='radio' defaultChecked={true} value='radio-2' />*/}
      {/*    <input type='radio' name='radio' value='radio-3' disabled />*/}
      {/*    <input type='radio' name='radio-2' value='radio-4' defaultChecked={true} disabled />*/}
      {/*  </div>*/}

      {/*  <div className='flex gap-6'>*/}
      {/*    <input type='checkbox' name='check1' />*/}
      {/*    <input type='checkbox' name='check2' defaultChecked={true} />*/}
      {/*    <input type='checkbox' name='check3' disabled />*/}
      {/*    <input type='checkbox' name='check4' defaultChecked={true} disabled />*/}
      {/*  </div>*/}

      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <textarea name='textarea' placeholder='place holder' />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <textarea name='textarea2' defaultValue='value text' />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <textarea placeholder='place holder' disabled />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <textarea defaultValue='value text' disabled />*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <select name='select' placeholder='place holder'>*/}
      {/*        {options.map((i) => (*/}
      {/*          <option key={i.value} value={i.value}>*/}
      {/*            {i.label}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </select>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <select name='select2'>*/}
      {/*        {options.map((i) => (*/}
      {/*          <option key={i.value} value={i.value}>*/}
      {/*            {i.label}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </select>*/}
      {/*    </div>*/}

      {/*    <div>*/}
      {/*      <select placeholder='place holder' disabled>*/}
      {/*        {options.map((i) => (*/}
      {/*          <option key={i.value} value={i.value}>*/}
      {/*            {i.label}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </select>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <select disabled>*/}
      {/*        {options.map((i) => (*/}
      {/*          <option key={i.value} value={i.value}>*/}
      {/*            {i.label}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </select>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <button>Submit</button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button>Submit</button>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button disabled>Disabled</button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button disabled>Disabled</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <button>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b>*/}
      {/*        Submit*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button className='reform-submit-icon'>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Submit*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button className='reform-submit-icon' disabled>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Disabled*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button className='reform-submit-icon' disabled>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Disabled*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <button className='!from-transparent !to-transparent !bg-red-700'>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b>*/}
      {/*        Submit*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button className='reform-submit-icon !from-transparent !to-transparent !bg-red-700'>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Submit*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button*/}
      {/*        className='reform-submit-icon !from-transparent !to-transparent !bg-red-700 disabled:!bg-red-900'*/}
      {/*        disabled*/}
      {/*      >*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Disabled*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className='reform-loading'>*/}
      {/*      <button*/}
      {/*        className='reform-submit-icon !from-transparent !to-transparent !bg-red-700 dark:!bg-amber-600'*/}
      {/*        disabled*/}
      {/*      >*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b> Disabled*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className='flex gap-2'>*/}
      {/*    <div>*/}
      {/*      <input name='input' placeholder='place hodler' />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <span className='p-2'>📧</span>*/}
      {/*      <input name='input-group' placeholder='place hodler' />*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <select disabled>*/}
      {/*        {options.map((i) => (*/}
      {/*          <option key={i.value} value={i.value}>*/}
      {/*            {i.label}*/}
      {/*          </option>*/}
      {/*        ))}*/}
      {/*      </select>{' '}*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button className='!from-transparent !to-transparent !bg-red-700'>*/}
      {/*        <b className='reform-icon'>🍉</b>*/}
      {/*        <b className='reform-loader'>🍄</b>*/}
      {/*        Submit*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</form>*/}
    </div>
  ),
};
