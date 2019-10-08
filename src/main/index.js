import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import HOC from '$com/HOC';
import styles from './main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className={styles.container}>
       首页---
      </div>
    );
  }
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);