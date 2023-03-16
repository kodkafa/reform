import { render, screen, fireEvent } from '@testing-library/react';
import { Radio, Form, Submit } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('#Radio tests', () => {
  it('should be disabled', () => {
    render(
      <Form>
        <Radio name='name' disabled />
      </Form>,
    );

    expect(screen.getByRole('radio')).toHaveAttribute('disabled');
  });

  it('should give an error', async () => {
    render(
      <Form schema={schema}>
        <Radio name='name' />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });
});
