import React, { useEffect, useState } from 'react';
import http from '../../utils/http';
import Today from '../today';
import Location from '../location';
import Forecast from '../forecast';
import './app.css';

interface httpProps {
  baseUrl?: string;
  path: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | undefined;
};

interface Response {
  list: any[];
  city: any;
  cod?: string;
  message?: number;
  cnt?: number;
};

const defaultData: Response = {
  list: [],
  city: {}
}

const App = () => {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(defaultData);
  const now = Math.floor((new Date()).getTime() / 1000);

  const onSelect = (i: number) => {
    setSelected(i);
  };

  useEffect(() => {
    const props: httpProps =  {
      path: '/data/2.5/forecast?q=München,DE&appid=b6907d289e10d714a6e88b30761fae22',
    };
    http(props)
      .then(async (response: any) => {
        if (!response.ok) {
          setData({
            list: [],
            city: {},
          });
        } else {
          const res = await response.json();
          setData({
            list: res.list,
            city: res.city,
          });
        }
      })
      .catch((e) => {
        setData({
          list: [],
          city: {},
        });
      });
  }, []);

  return (
    <section className="app">
      <Today
        info={data.list[selected]}
      />
      <Location
        city={data.city.name}
        datetime={data.list[selected] ? data.list[selected].dt : now}
      />
      <Forecast
        info={data.list}
        onSelect={onSelect}
        selected={selected}
      />
    </section>
  );
}

export default App;
