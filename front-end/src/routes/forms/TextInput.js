import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
}


export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  //value
  change: PropTypes.func.isRequired,
};

// <PersonalInfoForm
//   line1Value={this.state.address.line1}
//   line2Value={this.state.address.line2}
//   cityValue={this.state.address.city}
//   stateValue={this.state.address.state}
//   zipValue={this.state.address.zip}
//   countryValue={this.state.address.country}
//   addressChange={this.onAddressChange}
// />
