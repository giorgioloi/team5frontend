import React  from 'react';
import './App.css';
import Homepage from './pages/Homepage';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default class App extends React.Component {

  state = {
    data: ""
  }

  render() {
    return (
      <Homepage/>
    )
  }

  api() {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
      this.setState({ data: res}, () => {
      });
    })
  }

}