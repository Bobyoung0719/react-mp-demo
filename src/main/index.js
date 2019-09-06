import ReactDOM from 'react-dom';
import HOC from '$com/HOC';
import cns from 'classnames';
import Footer from '$com/Footer';
import {isEqual} from 'loadsh';
import React, {Component, lazy, Suspense} from 'react';

import styles from './main.scss';

// const LoadAb = lazy(() => import('$com/Load'));
// <Suspense fallback={<div>Loading...</div>}>
// <LoadAb />
// </Suspense>

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.showToast = this.showToast.bind(this);
  }

  componentDidMount() {
    const a1 = {a: 1, b: {c:2}};
    const a2 = {a: 2, c: 2};
    const a3 = {a: 2, c: 2}

    console.log(isEqual(a1, a2), '--1');
    console.log(isEqual(a2, a3), '--2');

    console.log(this.props, 'main-page');
  }

  showToast() {
    const {methods} = this.props;

    methods.toast('这是mian页面');
  }

  render() {
    const {commonData, methods} = this.props;
    const {curDate, userInfo} = commonData || {};

    return (
      <React.Fragment>
        <div className="container c1 c2">
          <p onClick={methods.getCurTime}>点击获取当前时间(ms)：{curDate}</p>
          <p onClick={this.showToast}>show-toast</p>
          <div className={cns(
            styles.d1,
            styles[1 > 0 ? 'c1' : 'c2']
          )}>classnames-test111</div>

          <div className={cns({
            [styles.d3]: true,
            [styles.d4]: false,
          })}>classnames-test</div>
          <div className={styles['scorll-area']}>滚动区域</div>
        </div>
        <Footer {...this.props} />
      </React.Fragment>
    );
  }
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);