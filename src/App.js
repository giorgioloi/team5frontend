import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';

var mockData = {
  "data": [{
      "id": "0",
      "title": "Hello blog 1",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "id": "1",
      "title": "Hello blog 2",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2012-03-23T18:25:43.511Z"
    },
    {
      "id": "2",
      "title": "Hello blog 3",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2012-02-23T18:25:43.511Z"
    },
    {
      "id": "3",
      "title": "Hello blog 4",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2012-01-23T18:25:43.511Z"
    },
    {
      "id": "4",
      "title": "Hello blog 5",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2011-04-23T18:25:43.511Z"
    },
    {
      "id": "5",
      "title": "Hello blog 6",
      "summary": "Silent sir say desire fat him letter.",
      "date": "2011-03-23T18:25:43.511Z"
    }
  ],
};

export default class App extends React.Component {

  state = {
    data: ''
  }


  componentDidMount() {
    this.setState({
      data: mockData["data"].slice(0, 4)
    });
  }

  render() {
    return ( < Homepage / > )
  }



}