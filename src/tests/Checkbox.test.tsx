import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox, Form } from '../lib';

function RenderElement() {
  return (
    <Form>
      <div>asd</div>
      <Checkbox name='name' disabled />
    </Form>
  );
}

describe('#checkbox tests', () => {
  it('should be disabled', () => {
    render(<RenderElement />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
  });

  it('should give an error', () => {
    // render(<div>asd</div>);
    render(<RenderElement />);
    expect(screen.getByRole('form')).toBeVisible();
    // fireEvent.submit();
    // expect(screen.getByRole('p')).toBeVisible();
  });
});
