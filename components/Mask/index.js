import React from 'react';
import cns from 'classnames';
import styles from './mask.scss';

const Mask = ({visible = false, className = null, children = null}) => 
  <div className={cns(
    className,
    styles.mask, 
    styles[visible ? 'show' : 'hide']
  )}>{children}</div>

export default Mask;