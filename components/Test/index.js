import React, {useState} from 'react';
import styles from './test.scss';

export default function Test() {
  const [count, setCount] = useState(0);

  console.log('test hook 组件');

  return <div 
    className={styles.color}
    onClick={() => setCount(count + 1)}
  >z这是test hook 组件({count})</div>
}