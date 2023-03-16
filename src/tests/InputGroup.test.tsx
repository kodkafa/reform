import { render, screen, fireEvent } from '@testing-library/react';
import { InputGroup, Form, Submit, Input } from '../lib';
import * as Yup from 'yup';

const errorMessage = 'errorMessage';

const schema = Yup.object().shape({
  name: Yup.string().trim().matches(/asd/, errorMessage).required(errorMessage),
});

describe('#input group tests', () => {
  it('should give an error', async () => {
    render(
      <div>
        <Form schema={schema}>
          <InputGroup>
            <Input name='input' placeholder='Please write something..' />
          </InputGroup>
          <Submit role='submit'>Submit</Submit>
        </Form>
      </div>,
    );

    fireEvent.click(screen.getByRole('submit'));

    expect(await screen.findByText(errorMessage)).toBeVisible();
  });
});
