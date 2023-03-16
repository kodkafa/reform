import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox, Form, Submit } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('#checkbox tests', () => {
  it('should be disabled', () => {
    render(
      <Form>
        <Checkbox name='name' disabled />
      </Form>,
    );

    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  it('should give an error', async () => {
    render(
      <Form schema={schema}>
        <Checkbox name='name' />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });
});
