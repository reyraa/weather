import React from 'react';
import { render } from '@testing-library/react';
import Today from '.';

type Props = {
  name: string,
};

test('renders an image with given name', () => {
  const props: Props = { name: 'statusClear' };
  const { container } = render(<Today {...props} />);
  const img = container.getElementsByTagName('img');
  expect(img[0]).toHaveAttribute('alt', props.name);
});

test('renders the default image for fallback', () => {
  const props: Props = { name: '' };
  const { container } = render(<Today {...props} />);
  const img = container.getElementsByTagName('img');
  expect(img[0]).toHaveAttribute('alt', 'default illustration');
});
