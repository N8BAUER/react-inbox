import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
      <div class="row toolbar">
  <div class="col-md-12">
    <p class="pull-right">
      <span class="badge badge">2</span>
      unread messages
    </p>

    <a class="btn btn-danger">
      <i class="fa fa-plus"></i>
    </a>

    <button class="btn btn-default">
      <i class="fa fa-minus-square-o"></i>
    </button>

    <button class="btn btn-default">Mark As Read</button>

    <button class="btn btn-default">Mark As Unread</button>

    <select class="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select class="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button class="btn btn-default">
      <i class="fa fa-trash-o"></i>
    </button>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>
<div class="row message unread">
  <div class="col-xs-1">
    <div class="row">
      <div class="col-xs-2">
        <input type="checkbox" />
      </div>
      <div class="col-xs-2">
        <i class="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div class="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

</div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
