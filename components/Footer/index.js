import React, { Component } from 'react';
import {getRealUrl} from 'util/tool';
import styles from './foot.scss';

class Footer extends Component {
  
  render() {
    const {commonData = {}} = this.props;

    return (
      <div 
        className={styles.footer}
        style={{backgroundColor: commonData.themeColor}}
      >
        <button onClick={() => getRealUrl('main')}>main page</button>
        <button onClick={() => getRealUrl('page')}>page two</button>
      </div>
    );
  }
}

export default Footer;