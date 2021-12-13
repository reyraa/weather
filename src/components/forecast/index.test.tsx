import React from 'react';
import { render } from '@testing-library/react';
import Forecast from '.';

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
  info: Info[];
  selected: number;
  onSelect: (i: number) => void;
};

const props: Props = {
  info: [{
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
  }],
  selected: 0,
  onSelect: (i) => { console.log(i); }
};

test('renders list items', () => {
  const { container } = render(<Forecast {...props} />);
  const li = container.getElementsByTagName('li');
  expect(li.length).toBe(1);
});
