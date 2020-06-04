import ReactDOM from 'react-dom';
import React from 'react';
import HOC from '$com/HOC';

function Page(props) {

  return (
    <div>0000000000</div>
  )
}

const HoComponent = HOC(Page);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);
