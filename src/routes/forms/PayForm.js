import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

import { Months, Years } from '../data/options';
// const log = {
//   current: false,
//   email: '',
//   id: '',
//   password: '',
//   address: {
//     line1: '',
//     line2: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: 'United States'
//   },
//   credit: {
//     number: '',
//     expiration: {
//       month: '',
//       year: '',
//     },
//     cvv: '',
//     name: '',
//   }
// }

const PayForm = (props) => {
  const monthOptions = Months.map((month) => (
    <option
    value={month}
    key={month}
    >
      {month}
    </option>
  ));

  const yearOptions = Years.map((year) => (
    <option
    value={year}
    key={year}
    >
      {year}
    </option>
  ));

  return (
    <div>
      <TextInput
        label="Name on Card"
        id="name"
        placeholder="Card Holder's Name"
        value={props.nameValue}
        change={props.change}
      />
      <TextInput
        label="Card Number"
        id="number"
        placeholder="Debit/Credit Card Number"
        value={props.numberValue}
        change={props.change}
      />

      <div className="form-group">
        <label>Expiration Date</label>
        <select className="exp"
          className="form-control"
          id="month"
          value={props.monthValue}
          onChange={props.expChange}
        >
          {monthOptions}
        </select>
      </div>
      <div className="form-group">
        <select className="exp"
          className="form-control"
          id="year"
          value={props.yearValue}
          onChange={props.expChange}
        >
          {yearOptions}
        </select>
      </div>

      <TextInput
        label="Card CVV"
        id="cvv"
        placeholder="Security Code"
        value={props.cvvValue}
        change={props.change}
      />
    </div>
  );
}


export default PayForm;

PayForm.propTypes = {
  //emailValue
  nameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  cvvValue: PropTypes.string.isRequired,
  monthValue: PropTypes.string.isRequired,
  yearValue: PropTypes.string.isRequired,
  expChange: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
