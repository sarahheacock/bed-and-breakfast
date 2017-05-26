import React from 'react';

const Welcome = ({match}) => {
  //const start = match.params.name.indexOf('@');
  //let name = match.params.name.slice(0, start);
  let name = match.params.name;
  return (
    <div className="main-content text-center">
      <h2>Welcome</h2>
      <h2>{name}!</h2>
    </div>
  );
}

export default Welcome;
