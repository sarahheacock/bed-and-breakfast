import React from 'react';
import PropTypes from 'prop-types';

const GeneralForm = (props) => {
  return (
    <div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={props.emailValue}
            onChange={props.emailChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={props.passwordValue}
            onChange={props.passwordChange}
          />
        </div>
    </div>
  );
}


export default GeneralForm;

GeneralForm.propTypes = {
  //emailValue
  emailChange: PropTypes.func.isRequired,
  //passwordValue
  passwordChange: PropTypes.func.isRequired,
};
