import ReactDOM from 'react-dom';
import HOC from '$com/HOC';
import cns from 'classnames';
import {isEqual} from 'loadsh';
import Mask from '$com/Mask';
import React, {Component, lazy, Suspense} from 'react';


import styles from './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let isA = isEqual({a: 1}, [2]);

    console.log(isA);

    let entry = {
      a: 'xx',
      b: 'xx',
      common: ['react', 'react-dom']
    }
  }
  

  render() {

    return (
      <div className={styles.container}>
        主页-----
      </div>
    );
  }
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);