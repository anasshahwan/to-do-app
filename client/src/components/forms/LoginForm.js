import React from 'react';
import axios from 'axios';
import {  Redirect } from 'react-router'

class LoginForm extends React.Component {


  state = {
      email: '',
      password:'',
      redirect:false
    }

    handleSubmit = event => {
      event.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;

console.log(email + "  " + password);
      axios.post(`http://localhost:3001/users/login`, {

	"email":email,
	"password": password

})
        .then(res => {

          this.setState({redirect:true});
 //      const = parse = JSON.parse(res);
      
        localStorage.getItem('token');
        localStorage.setItem('token',res.data.token);
        localStorage.getItem('_id');
        localStorage.setItem('_id',res.data._id);
      //    console.log(res.data.token);
        })
    }


  render() {

 if(this.state.redirect){
   return(<Redirect to={'/profile'}/>)
 }
    return (

      <form id='createUser' onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input id='email' name='email' ref ='email' type="email" class="form-control"   placeholder="Enter email"/>
        </div>

        <div class="form-group">
          <label >Password</label>
          <input type="password"  id='password' class="form-control"  name='password'   placeholder="Password"/>
        </div>

        <button  type="submit" class="btn btn-primary">Submit</button>
      </form>

    );
  }
}

export default LoginForm;
