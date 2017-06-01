import React from 'react';
import PropTypes from 'prop-types';
import { Countries } from '../data/options';
import TextInput from './TextInput';

const PersonalInfoForm = (props) => {
  const options = Countries.map((country) => (
    <option
    value={country}
    >
      {country}
    </option>
  ));

  const properties = [
    {
      label: "Address Line 1",
      id: "line1",
      placeholder: "Street Address",
      value: props.line1Value,
    },
    {
      label: "Address Line 2",
      id: "line2",
      placeholder: "Street Address",
      value: props.line2Value,
    },
    {
      label: "City",
      id: "city",
      value: props.cityValue,
    },
    {
      label: "State",
      id: "state",
      value: props.stateValue,
    },
    {
      label: "Zip",
      id: "zip",
      value: props.zipValue,
    }
  ];

  const inputs = properties.map((p) => (
    <TextInput
      label={p.label}
      id={p.id}
      placeholder={(p.placeholder) ? p.placeholder : p.label}
      value={p.value}
      change={props.addressChange}
    />
  ));

  return (
    <div>
      {inputs}
      <div className="form-group">
        <label>Country</label>
        <select
          className="form-control bfh-countries"
          data-country="US"
          id="country"
          value={props.countryValue}
          onChange={props.addressChange}
        >
          {options}
        </select>
      </div>
    </div>
  );
}


export default PersonalInfoForm;

PersonalInfoForm.propTypes = {
  addressChange: PropTypes.func.isRequired
};

// <div className="form-group">
//   <label>Address Line 1</label>
//   <input
//     type="text"
//     className="form-control"
//     id="line1"
//     placeholder="Street Address"
//     value={props.line1Value}
//     onChange={props.addressChange}
//   />
// </div>
// <div className="form-group">
//   <label>Address Line 2</label>
//   <input
//     type="text"
//     className="form-control"
//     id="line2"
//     placeholder="Street Address"
//     value={props.line2Value}
//     onChange={props.addressChange}
//   />
// </div>
// <div className="form-group">
//   <label>City</label>
//   <input
//     type="text"
//     className="form-control"
//     id="city"
//     placeholder="City"
//     value={props.cityValue}
//     onChange={props.addressChange}
//   />
// </div>
// <div className="form-group">
//   <label>State</label>
//   <input
//     type="text"
//     className="form-control"
//     id="state"
//     placeholder="State"
//     value={props.stateValue}
//     onChange={props.addressChange}
//   />
// </div>
// <div className="form-group">
//   <label>Zip</label>
//   <input
//     type="text"
//     className="form-control"
//     id="zip"
//     placeholder="Zip"
//     value={props.zipValue}
//     onChange={props.addressChange}
//   />
// </div>

// <PersonalInfoForm
//   line1Value={this.state.address.line1}
//   line2Value={this.state.address.line2}
//   cityValue={this.state.address.city}
//   stateValue={this.state.address.state}
//   zipValue={this.state.address.zip}
//   countryValue={this.state.address.country}
//   addressChange={this.onAddressChange}
// />
