import React from 'react';
import Day from './day';
import './forecast.css';

interface Main {
  [key: string]: number
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Info = {
  weather: Weather[],
  main: Main,
  dt: number,
};

type props = {
  info: Info[],
  selected: number,
  onSelect: (i: number) => void,
};

const Forecast = ({ info, selected, onSelect }: props) => {
  return (
    <section className="forecast" data-testid="forecast">
      <ul>
        {
          info.map((day, index) => <Day
            key={index}
            info={day}
            onSelect={onSelect}
            selected={selected === index}
            index={index}
          />)
        }
      </ul>
    </section>
  );
}

export default Forecast;
