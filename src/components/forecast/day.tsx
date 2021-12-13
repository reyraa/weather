import React from 'react';
import Illustration  from '../toolbox/illustration';
import Temperature from '../toolbox/temperature';
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
  info: Info;
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
};

const normalize = (date: Date) => (
  `${date.getHours().toString().padStart(2, '0')}:00`
);

const Day = ({ info, index, onSelect, selected }: props) => {
  const date = new Date(info.dt * 1000);

  return (
    <button
      className={`day ${selected ? 'selected' : ''}`}
      onClick={() => onSelect(index)}
    >
      <time>
        <h5>{ normalize(date) }</h5>
      </time>
      
        <figure>
          <Illustration name={`status${info.weather[0].main}`} />
        </figure>
        <h4>
          <Temperature
            value={info.main.temp}
          />
        </h4>
    </button>
  );
}

export default Day;
