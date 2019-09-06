import React, {Component} from 'react';
import Toast from '$com/Toast';
import Loading from '$com/Loading';
import styles from './hoc.scss';
import '../../common/init.css';

const HOC = WrappedComponent => {
  return class Wapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toastMsg: '',
        userInfo: null,
        curDate: '',
        themeColor: '#cccccc',
        dialogVisible: false,
        loadingVisible: false
      }

      this.changeSkin = this.changeSkin.bind(this);
    }

    componentDidMount() {
      const themeColor = localStorage.getItem('themeColor') || '#cccccc';

      setTimeout(() => {
        this.setState({
          themeColor,
          userInfo: {
            name: 'yangtao',
            address: '上海市浦东新区',
            job: 'web前端开发工程师'
          }
        });
      }, 1000);
    }

    // 换肤功能
    changeSkin() {
      const color = '#'+(Math.random()*0xffffff<<0).toString(16); 

      this.setState({themeColor: color}, () => {
        localStorage.setItem('themeColor', color);
      });
    }

    getMethod() {
      return {
        toast: msg => this.setState({toastMsg: msg}, () => {
          setTimeout(() =>this.setState({toastMsg: ''}), 2000);
        }),
        load: status => this.setState({loadingVisible: status}),
        showDialog: msgContent => this.setState({dialogVisible: msgContent}),
        getCurTime: () => this.setState({curDate: +new Date()}),
        changeSkin: this.changeSkin
      }
    }

    render() {
      const {userInfo, toastMsg, themeColor, curDate} = this.state;

      if(userInfo == null) {
        return <Loading visible={!userInfo} />
      }

      return (
        <React.Fragment>
          <Toast toastMsg={toastMsg} />
          <div className={styles.header}>
            <span>这里是头部导航栏</span>
            <span onClick={this.changeSkin}>换肤</span>
          </div>

          <WrappedComponent
            {...this.props}
            methods={this.getMethod()} 
            commonData={{
              userInfo,
              curDate,
              themeColor
            }}
          />
        </React.Fragment>
      )
    }
  }
};

export default HOC;