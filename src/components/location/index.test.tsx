import React from 'react';
import { render } from '@testing-library/react';
import Location from '.';

type Props = {
  city: string,
  datetime: number
};

test('renders learn react link', () => {
  const props: Props = {
    city: 'Berlin',
    datetime: 1487246400,
  };

  const { container } = render(<Location {...props} />);
  const address = container.getElementsByTagName('h5');
  expect(address[0]).toHaveTextContent('Berlin');

  const date = container.getElementsByTagName('h3');
  expect(date[0]).toHaveTextContent('Thursday');
  expect(date[1]).toHaveTextContent('16. February');
});
