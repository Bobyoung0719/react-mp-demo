import ReactDOM from 'react-dom';
import HOC from '$com/HOC';
import React, {Component, lazy, Suspense} from 'react';

import styles from './main.scss';

// const LoadAb = lazy(() => import('$com/Load'));
// <Suspense fallback={<div>Loading...</div>}>
// <LoadAb />
// </Suspense>

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.handleToPage = this.handleToPage.bind(this);
  }


  componentDidMount() {
    console.log('-----');
  }
  
  
  handleToPage() {
    const {methods} = this.props;

    methods.toast('hahahahhahh click')
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

const HoComponent = HOC(Main);

ReactDOM.render(
  <HoComponent />,
  document.getElementById('root')
);