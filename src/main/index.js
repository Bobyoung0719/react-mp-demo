import ReactDOM from 'react-dom';
import React from 'react';
import HOC from '$com/HOC';
import { getRealUrl } from 'utils/tool';
import sty from './main.scss';

function Main(props) {

  return (
    <div className={sty.container}>
      首页-
      <p onClick={() => getRealUrl('page')}>跳转第二页</p>
    </div>
  );
}

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);