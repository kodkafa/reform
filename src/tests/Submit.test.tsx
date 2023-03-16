import { render, screen } from '@testing-library/react';
import { Submit, Form } from '../lib';

function RenderElement() {
  return (
    <Form>
      <Submit disabled />
    </Form>
  );
}

describe('#Submit tests', () => {
  it('should be disabled', () => {
    render(<RenderElement />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
