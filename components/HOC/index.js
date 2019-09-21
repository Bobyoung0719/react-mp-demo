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
        dialogVisible: false,
        loadingVisible: false
      }
    }

    componentDidMount() {
      this.setState({
        userInfo: {
          name: 'yangtao',
          address: '上海市浦东新区',
          job: 'web前端开发工程师'
        }
      });
    }

    getMethod() {
      return {
        toast: msg => this.setState({toastMsg: msg}, () => {
          setTimeout(() =>this.setState({toastMsg: ''}), 2000);
        }),
        load: status => this.setState({loadingVisible: status}),
        showDialog: msgContent => this.setState({dialogVisible: msgContent})
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
          <WrappedComponent
            {...this.props}
            methods={this.getMethod()} 
            commonData={{commData: {}}}
          />
        </React.Fragment>
      )
    }
  }
};

export default HOC;