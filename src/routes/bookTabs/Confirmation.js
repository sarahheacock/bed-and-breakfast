import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import PayNow from '../modals/PayNow';

//Confirmation launches credit PayNow modal that gathers credit info
//Confirmation also displays current room state with Selected
class Confirmation extends React.Component {
  static propTypes = {
    room: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    chargeClient: PropTypes.func.isRequired,

    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
  }


  render () {
    // (this.props.credit.credit) ?
    //   <button className="btn btn-success">
    //     Confirmed
    //   </button> :
    const status = <button className="btn btn-primary" onClick={() => (
        this.props.makeModal()
      )}>
        Confirm Payment
      </button>;

    return (
      <div className="tab-content">
        <Selected
          room={this.props.room}
        />
        <PayNow
          makeModal={this.props.makeModal}
          modalVisible={this.props.modalVisible}

          chargeClient={this.props.chargeClient}
          room={this.props.room}
          login={this.props.login}
        />
        {status}
      </div>
    );
  }
}


export default Confirmation;
