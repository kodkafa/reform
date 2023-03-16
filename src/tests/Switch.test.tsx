import { render, screen } from '@testing-library/react';
import { Switch, Form } from '../lib';

function RenderElement() {
  return (
    <Form>
      <Switch
        name='switch'
        role='switch'
        disabled
        label='Label'
        on={<p role='on'>On</p>}
        off={<p role='off'>Off</p>}
      />
    </Form>
  );
}

describe('#Switch tests', () => {
  it('should be disabled', () => {
    render(
      <Form>
        <Switch name='switch' role='switch' disabled />
      </Form>,
    );
    expect(screen.getByRole('switch')).toHaveAttribute('disabled');
  });

  it('should have label', () => {
    render(
      <Form>
        <Switch name='switch' role='switch' label='Label' />
      </Form>,
    );
    expect(screen.getByText('Label')).toBeVisible();
  });

  it('should have on/off texts', () => {
    render(
      <Form>
        <Switch name='switch' role='switch' on={<p role='on'>On</p>} off={<p role='off'>Off</p>} />
      </Form>,
    );
    expect(screen.getByRole('on')).toBeVisible();
    expect(screen.getByRole('off')).toBeVisible();
  });
});
