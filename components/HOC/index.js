import React, {Component} from 'react';
import '../../common/init.css';


function HOC(WrappedComponent) {
  const data = {name: 'yangtao', desc: '00000'}

  return () => 
    <WrappedComponent
      commonData={data}
    />
}

export default HOC;