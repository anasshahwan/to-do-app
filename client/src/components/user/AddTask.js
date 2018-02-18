import React  from 'react';
import axios from 'axios';

class AddTask extends React.Component {



  state = {
      task: '',

      redirect:false
    }

    handleSubmit = event => {
      event.preventDefault();
   var task = document.getElementById("task").value;
   var user_id =   localStorage.getItem('_id');
   var token =   localStorage.getItem('token');

console.log(task + "  " + user_id);
      axios.post(`http://localhost:3001/tasks/`, {
  headers: {autorizacion: "Bearer " + token},
	"taskDescription":task,
	"user_id": user_id

})
        .then(res => {

          this.setState({redirect:true});    
        })
    }


  render() {

 if(this.state.redirect){
   //return(<Redirect to={'/profile'}/>)
 }
    return (

      <form id='createUser' onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Write To Task Here </label>
          <input id='task' name='task' ref ='task' type="text" class="form-control"   placeholder="Enter YYour Task here"/>
        </div>


        <button  type="submit" class="btn btn-primary">Submit</button>
      </form>

    );
  }
}

export default AddTask;
