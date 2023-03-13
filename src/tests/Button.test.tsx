import { render, screen } from '@testing-library/react';
import { Button, Form } from '../lib';

function RenderElement() {
  return (
    <Form>
      <Button disabled />
    </Form>
  );
}

describe('#button tests', () => {
  it('should be disabled', () => {
    render(<RenderElement />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
