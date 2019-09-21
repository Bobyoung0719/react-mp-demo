import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import HOC from '$com/HOC';
import styles from './page.scss';

class Page extends Component {

  componentDidMount() {
    console.log(this.props, 'page-page');
  }

  showToast = () => {
    const {methods} = this.props;

    methods.toast('这是page页面');
  }

  render() {
    const {methods} = this.props;

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
