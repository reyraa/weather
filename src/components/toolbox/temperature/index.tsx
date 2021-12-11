
import React from 'react';

type Props = {
  value: number | number[];
};

const Temperature = ({ value }: Props) => {
  const toCelsius = (kelvin: number) => (
    `${Math.round(kelvin - 273.15)}°`
  );

  if (Array.isArray(value)) {
    return (
      <span>
        { value.map(item => toCelsius(item)).join(' / ') }
      </span>
    );
  }
  if (typeof value === 'number') {
    return (<span>{toCelsius(value)}</span>);
  }
  return (<span>-</span>);
};

export default Temperature;
