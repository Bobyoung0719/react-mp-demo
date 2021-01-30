import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import HOC from '$com/HOC';
import { getRealUrl } from 'utils/tool';
import sty from './main.scss';

function Main(props) {
  useEffect(() => {
    console.log(performance);
    console.log('objectsww111111111qq111')

    // "browserslist": [
      //   "defaults",
      //   "not ie < 11",
      //   "last 2 versions",
      //   "> 1%",
      //   "iOS 7",
      //   "last 3 iOS versions"
      // ],
  }, []);

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