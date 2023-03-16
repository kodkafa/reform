import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput, Form, Submit } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('password input tests', () => {
  it('should be disabled', () => {
    render(
      <Form>
        <PasswordInput role='password-input' name='name' disabled />
      </Form>,
    );
    // expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
    expect(screen.getByRole('password-input')).toHaveAttribute('disabled');
  });

  it('should give an error', async () => {
    render(
      <Form schema={schema}>
        <PasswordInput name='name' />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });

  it('should switch hide and show password', async () => {
    render(
      <Form schema={schema}>
        <PasswordInput
          label='Label'
          name='password'
          role='password-input'
          show={
            <i role='show-icon' className='text-xs cursor-pointer bg-gray-200 rounded p-1'>
              show
            </i>
          }
          hide={
            <i role='hide-icon' className='text-xs cursor-pointer bg-gray-200 rounded p-1'>
              hide
            </i>
          }
        />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    expect(await screen.findByRole('show-icon')).toBeVisible();
    expect(await screen.findByRole('password-input')).toHaveProperty('type', 'password');

    fireEvent.click(screen.getByRole('show-icon'));

    expect(await screen.findByRole('hide-icon')).toBeVisible();
    expect(await screen.findByRole('password-input')).toHaveProperty('type', 'text');
  });
});
