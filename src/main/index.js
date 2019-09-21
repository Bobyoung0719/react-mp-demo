import ReactDOM from 'react-dom';
import HOC from '$com/HOC';
import cns from 'classnames';
import {isEqual} from 'loadsh';
import React, {Component, lazy, Suspense} from 'react';

import styles from './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
  }

  render() {
    const {commonData, methods} = this.props;

    return (
      <div className={styles.container}>
      这是main 页面
      </div>
    );
  }
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);