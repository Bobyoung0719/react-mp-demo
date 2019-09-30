import React, { Component } from 'react';
import cns from 'classnames';
import styles from './fold.scss';

class FoldText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textBtn: null,
      maxHeight: 'auto'
    }
  }

  componentDidMount() {
    const {maxLine = 3} = this.props;
    const dom = document.getElementById('text');
    const LH = getComputedStyle(dom).lineHeight;
    
    this.mh = dom.clientHeight;  // 实际高度
    this.ch = parseInt(LH) * maxLine; // 需要展示的行数高度

    if (this.ch < this.mh) {
      this.setState({
        textBtn: '...展开',
        maxHeight: this.ch
      });
    } else {
      this.setState({textBtn: ''});
    }
  }

  handleText = textBtn => {
    const isOpen = textBtn == '...展开';

    this.setState({
      textBtn: isOpen ? '收起' : '...展开',
      maxHeight: isOpen ? this.mh : this.ch
    });
  }
  
  render() {
    const {content, className} = this.props;
    const {maxHeight, textBtn} = this.state;

    return (
      <div 
        id="text"
        style={{height: maxHeight}}
        className={cns(styles.fold, className)}
      >
        {content}
        {textBtn && 
        <i 
          className={styles.btn}
          onClick={() => this.handleText(textBtn)}
        >
          {textBtn}
        </i>}
      </div>
    );
  }
}

export default FoldText;