import React from 'react';
import Illustration from '../toolbox/illustration';
import Temperature from '../toolbox/temperature';
import './today.css';

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

const Today = ({ info }: Props) => (
  <section className="today" data-testid="today">
    <figure data-testid="status">
      <Illustration
        name={info ? `status${info.weather[0].main}` : 'loading'}
      />
    </figure>
    <main>
      <div>
        <h5>{ info ? info.weather[0].main : '-' }</h5>
        <h5>
          <Temperature 
            value={info && [info.main.temp_min, info.main.temp_max]}
          />
        </h5>
      </div>
      <div>
        <h1>
          <Temperature
            value={info && info.main.temp}
          />
        </h1>
      </div>
    </main>
  </section>
);

export default Today;
