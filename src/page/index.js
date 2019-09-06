import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import HOC from '$com/HOC';
import Footer from '$com/Footer';
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
        <div className="container">
          <p onClick={this.showToast}>show-toast</p>
          <p onClick={methods.changeSkin}>换皮肤</p>
        </div>
        <Footer {...this.props}/>
      </React.Fragment>
    );
  }
}

const HoComponent = HOC(Page);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);
