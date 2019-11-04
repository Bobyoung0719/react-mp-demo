import React, {Component} from 'react';
import '../../common/init.css';

const HOC = WrappedComponent => {
  return class Wapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    componentDidMount() {
      console.log('did~~~');
    }

    getMethod() {
      return {
        test() {
          console.log('test function');
        }
      }
    }

    render() {

      return (
        <WrappedComponent
          {...this.props}
          methods={this.getMethod()} 
          commonData={{commData: {}}}
        />
      )
    }
  }
};

export default HOC;