import ReactDOM from 'react-dom';
import React, {Component, lazy, Suspense} from 'react';
import HOC from '$com/HOC';
import Test from '$com/Test';
import {getRealUrl} from 'utils/tool';
import styles from './main.scss';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Com: null
    };

    this.onAction = this.onAction.bind(this);
  }

  componentDidMount() {
    
  }

  onAction() {
    const A = lazy(() => import('$com/Test'));

    console.log(A, 'AAAAAAAAÃ');
    this.setState({Com: A});
  }

  render() {

    const {Com} = this.state;

    return (
      <div className={styles.container}>
        首页---
        <Test />
        <Suspense fallback={<div>oooo</div>}>
        {Com && <Com />}
        </Suspense>
        <button onClick={this.onAction}>onClick</button>
        <p onClick={() => getRealUrl('page')}>跳转第二页</p>
      </div>
    );
  }
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);