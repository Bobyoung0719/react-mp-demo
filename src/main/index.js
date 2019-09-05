import ReactDOM from 'react-dom';
import React, { Component, lazy } from 'react';
// import Load from 'components/Load';
import styles from './main.scss';

const LoadAb = lazy(() => import('components/Load'));

console.log(LoadAb, '0000');

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.handleToPage = this.handleToPage.bind(this);
  }


  componentDidMount() {
    console.log('-----');
  }
  
  
  handleToPage() {
    console.log('duoye');
  }

  render() {
    return (
      <div>
        <button 
          className={styles.btn}
          onClick={this.handleToPage}>click</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);