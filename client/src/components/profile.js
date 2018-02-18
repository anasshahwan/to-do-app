import React from 'react';

import axios from 'axios';
import AddTask from '../components/user/AddTask';

export default class Profile extends React.Component {
  state = {
    tasks: [],
    xa:[]
  }


  componentDidMount() {
    const AuthStr = 'Bearer '+ localStorage.getItem('token');

    axios.get(`http://localhost:3001/tasks/`, { headers: { Authorization: AuthStr } })
      .then(res => {
        const tasks = res.data.Tasks;
      ///  this.setState({ tasks });
        for(var i in tasks){
          var xa = tasks[i].request;

          // to Append in My task
          this.setState(previousState => ({
      xa: [...previousState.xa, xa]
  }));


}
console.log(this.state.xa[11].isComplete);

      })
  }

  render() {
    return (
  /*  <ul>
           { this.state.xa.map(xa => <li>{xa.taskDescription}</li>)}
           { this.state.xa.map(xa => <li>{xa.url}</li>)}

         </ul>*/
         <AddTask  />



)
  }
}
