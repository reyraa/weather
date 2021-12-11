import React from 'react';
import './location.css';

type Props = {
  city: string,
  datetime: number
};

const weekDays = ['Saturday', 'Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DateAndLocation = ({ city, datetime }: Props) => {
  const date = new Date(datetime * 1000);

  return (
    <section className="location" data-testid="location">
      <address>
        <h5>{ city }</h5>
      </address>
      <time dateTime={datetime.toString()}>
        <h3>{ weekDays[date.getDay()] }</h3>
        <h3>{ `${date.getDate()}. ${months[date.getMonth()]}` }</h3>
      </time>
    </section>
  );
}

export default DateAndLocation;
