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

interface Info {
  weather: Weather[];
  main: Main;
  dt: number;
};

interface props {
  info: Info[];
  selected: number;
  onSelect: (i: number) => void;
};

const Forecast = ({ info, selected, onSelect }: props) => (
  <section className="forecast" data-testid="forecast">
    <div className="container">
      {
        info.map((day, index) => <Day
          key={index}
          info={day}
          onSelect={onSelect}
          selected={selected === index}
          index={index}
        />)
      }
    </div>
  </section>
);

export default Forecast;
