import React from 'react';
import { Link } from 'react-router-dom';
import style from '../css/navbar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (


      <nav class="navbar navbar-expand-lg navbar-light bg-dark">

 <span>To Do App Logo</span>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav  mx-auto">
    <li class="nav-item active">
      <Link to={{ pathname: '/homepage' }}>  Home</Link>

    </li>
    <li class="nav-item">
      <Link to={{ pathname: '/login' }}> Login</Link>
    </li>


  </ul>

</div>
</nav>
    );
  }
}
