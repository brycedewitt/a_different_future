import React from 'react';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';

export default function CountDownComponent () {
  const dateInFuture = moment('2020-04-18 23:59:59', 'YYYY-MM-DD HH:mm:ss');

  return (
    <ReactMomentCountDown
      toDate={dateInFuture}
      targetFormatMask='MM-DD HH:mm:ss'
    />
  );
};