import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.handleToPage = this.handleToPage.bind(this);
  }


  componentDidMount() {
    console.log('-----');
  }
  
  
  handleToPage() {
    console.log('duoye');
  }

  render() {
    return (
      <div>
      hahahahah 
        <button onClick={this.handleToPage}>click</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);