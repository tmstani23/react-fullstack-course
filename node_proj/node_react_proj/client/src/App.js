import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  
  componentDidMount() {
    axios.get('/api/users').then((req, res) => {
      console.log(req.data);
    })
  }
  
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

export default App;
