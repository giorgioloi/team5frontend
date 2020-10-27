import React, { useState, useEffect } from 'react';
import './Article.css';
//import BaseContainer from '../containers/base-container/base-container'
//import Header from '../containers/header/header';
import axios from 'axios-https-proxy-fix';
//const cheerio = require('cheerio');

function Article() {
  //const url = 'https://jsonplaceholder.typicode.com/users'
  const url = 'http://localhost:3000/articles'
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(url).then(json => setData(json.data)).catch(console.error)
  }, [])

  return (
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Article;