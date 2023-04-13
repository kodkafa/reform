import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Input, Form, Submit } from '../lib';

describe('#form tests', () => {
  it('should return data in async', async () => {
    render(
      <div>
        <Form
          onSubmit={async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const textElement = document.createElement('div');
            textElement.textContent = data.input as string;
            document.body.appendChild(textElement);
          }}
        >
          <Input name='input' value='written' />
          <Submit role='submit'>Submit</Submit>
        </Form>
      </div>,
    );

    fireEvent.click(screen.getByRole('submit'));

    await waitFor(async () => expect(await screen.findByText('written')).toBeVisible(), {
      timeout: 2000,
    });
  });
});
