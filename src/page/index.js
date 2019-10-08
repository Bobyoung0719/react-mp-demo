import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import HOC from '$com/HOC';
import _ from 'loadsh';
import Mask from '$com/Mask';
import styles from './page.scss';

class Page extends Component {

  componentDidMount() {
    let isB = _.isEqual({a: 1}, {a:1});

    console.log(isB);
  }

  render() {

    return (
      <React.Fragment>
       这是第二页啊嗷嗷啊啊啊啊啊
      </React.Fragment>
    );
  }
}

const HoComponent = HOC(Page);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);
