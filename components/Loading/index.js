import React from 'react';
import Mask from '../Mask';
import styles from './load.scss';

console.log(';;;;;;;;;;');

const Loading = ({visible}) => 
  <Mask 
    visible={visible}
    className={styles.white}
  >
    <div className={styles.loading} />
    <p>数据加载中，稍后...</p>
  </Mask>

export default Loading;