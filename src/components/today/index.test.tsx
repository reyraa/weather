import React from 'react';
import { render } from '@testing-library/react';
import Today from '.';

interface Main {
  [key: string]: number
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
};

interface Info {
  weather: Weather[];
  main: Main;
};

interface Props {
  info: Info;
};

test('renders today\'s info correctly', () => {
  const props: Props = {
    info: {
      weather: [{
        id: 1,
        main: 'Clear',
        description: 'description',
        icon: 'icon',
      }],
      main: {
        temp_min: 250,
        temp_max: 260,
        temp: 255,
      },
    },
  };
  const { container } = render(<Today {...props} />);
  const img = container.getElementsByTagName('img');
  expect(img[0]).toHaveAttribute('alt', 'statusClear');

  const h5 = container.getElementsByTagName('h5');
  expect(h5[0]).toHaveTextContent('Clear');
  expect(h5[1]).toHaveTextContent('-23° / -13°');

  const h1 = container.getElementsByTagName('h1');
  expect(h1[0]).toHaveTextContent('-18°');
});
