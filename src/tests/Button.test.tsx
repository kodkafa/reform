import { render, screen } from '@testing-library/react';
// import matchers from '@testing-library/jest-dom';
//
// expect.extend(matchers);

function Comp() {
  return <div>asd</div>;
}

it('should have hellow world', () => {
  render(<Comp />);
  const message = screen.queryByText(/asd/i);
  expect(message).toBeVisible();
});
