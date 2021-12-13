import React from 'react';
import { render } from '@testing-library/react';
import Day from './day';

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
  dt: number;
};

interface Props {
  info: Info;
  index: number;
  selected: boolean;
  onSelect: (i: number) => void;
};

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
    dt: 1487246400,
  },
  index: 0,
  selected: true,
  onSelect: (i) => { console.log(i); }
};

test('renders day info correctly', () => {
  const { container } = render(<Day {...props} />);
  const time = container.getElementsByTagName('h5');
  expect(time[0]).toHaveTextContent('13:00');

  const img = container.getElementsByTagName('img');
  expect(img[0]).toHaveAttribute('alt', 'statusClear');

  const temperature = container.getElementsByTagName('h4');
  expect(temperature[0]).toHaveTextContent('-18°');
});
