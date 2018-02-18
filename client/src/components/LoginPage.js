import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { Link } from 'react-router-dom';
import style from '../css/loginpage.css';

export default class LoginPage extends React.Component {




  render() {
    return (
      <div className='mx-auto' id='loginDiv' >



<LoginForm/>
<Link to='/signup'>SignUp</Link>
<Link to='/homepage'>Go Back</Link>

        </div>
    );
  }
}
