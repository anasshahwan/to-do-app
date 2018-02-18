import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Example extends React.Component {

  state = {
      email: '',
      password:'',
      username:''
    }

    handleChange = event => {
      this.setState({ email: event.target.value });
      this.setState({ password: event.target.value });
      this.setState({ username: event.target.value });

    }

    handleSubmit = event => {
      event.preventDefault();

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var username = document.getElementById("username").value;


      console.log(email + "  " + password + " " + username );

      axios.post(`http://localhost:3001/users/signup`, {
        email: email,
        username: username,
        password: password
      })
        .then(res => {

          console.log(res);
          console.log(res.data);
        })
    }


    render() {
      return (
        <div className="App">


 <h1>Sign Up Page </h1>
          <form id='createUser' onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input  name='email' id='email' ref ='email' type="email" class="form-control"   placeholder="Enter email"/>
            </div>
            <div class="form-group">
              <label >UserName</label>
              <input name='username'  id='username' type="text" class="form-control"  placeholder="Enter UserName"/>
            </div>
            <div class="form-group">
              <label >Password</label>
              <input type="password" class="form-control" id='password' name='password'  placeholder="Password"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <Link to='/login'>Login</Link>
          <Link to='/homepage'>I Dont Want To SignUp</Link>
        </div>

      );
    }

}
