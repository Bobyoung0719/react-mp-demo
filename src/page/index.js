import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import HOC from '$com/HOC';
import Test from '$com/Test';
import test from 'utils/test';
import styles from './page.scss';

class Page extends Component {

  componentDidMount() {
  }

  render() {

    return (
      <React.Fragment>
       这是第二页啊嗷嗷啊啊啊啊啊
       <Test />
      </React.Fragment>
    );
  }
}

const HoComponent = HOC(Page);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);
