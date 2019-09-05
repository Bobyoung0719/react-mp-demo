import React from 'react';
import cns from 'classnames';
import styles from './toast.scss';

const Toast = ({toastMsg = '', className = null, children = null}) => 
  <div className={cns(
    className,
    styles.toast, 
    styles[(toastMsg || children) ? 'show' : 'hide']
  )}>{children || toastMsg}</div>

export default Toast;