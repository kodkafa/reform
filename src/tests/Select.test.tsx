import { render, screen, fireEvent } from '@testing-library/react';
import { Select, Form, Submit } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('#Select tests', () => {
  it('should be disabled', () => {
    render(
      <Form>
        <Select
          name='name'
          role='select'
          options={[{ children: 'option 1' }, { children: 'option 2' }]}
          disabled
        />
      </Form>,
    );

    expect(screen.getByRole('select')).toHaveAttribute('disabled');
  });

  it('should give an error', async () => {
    render(
      <Form schema={schema}>
        <Select
          name='name'
          role='select'
          options={[{ children: 'option 1' }, { children: 'option 2' }]}
          disabled
        />
        <Submit role='submit'>Submit</Submit>
      </Form>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });
});
