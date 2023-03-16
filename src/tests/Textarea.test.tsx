import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea, Form, Submit } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('#Textarea tests', () => {
  it('should give an error', async () => {
    render(
      <Form schema={schema}>
        <Textarea name='name' role='Textarea' disabled />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });
});
