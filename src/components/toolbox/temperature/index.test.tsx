import React from 'react';
import { render } from '@testing-library/react';
import Temperature from '.';

type Props = {
  value: number | number[];
};

test('renders a span with value in celsius', () => {
  const props: Props = { value: 250 };
  const { container } = render(<Temperature {...props} />);
  const span = container.getElementsByTagName('span');
  expect(span[0]).toHaveTextContent('-23°');
});

test('renders a span with range in celsius', () => {
  const props: Props = { value: [250, 260] };
  const { container } = render(<Temperature {...props} />);
  const span = container.getElementsByTagName('span');
  expect(span[0]).toHaveTextContent('-23° / -13°');
});

