import ReactDOM from 'react-dom';
import React, {useState, lazy, Suspense} from 'react';
import HOC from '$com/HOC';
import Test from '$com/Test';
import {getRealUrl} from 'utils/tool';
import styles from './main.scss';

function Main() {
  const [Com, setCom] = useState(null);

  function onAction() {
    const A = lazy(() => import('$com/Test'));

    console.log(A, 'AAAAAAAAÃ');
    setCom(A);
  }
    
  return (
    <div className={styles.container}>
      首页---
      <Test />
      <Suspense fallback={<div>oooo</div>}>
        {Com && <Com />}
      </Suspense>
      <button onClick={onAction}>onClick</button>
      <p onClick={() => getRealUrl('page')}>跳转第二页</p>
    </div>
  );
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);