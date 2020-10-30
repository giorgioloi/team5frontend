import CardContainer from '../containers/card-container/card-container'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import './Homepage.css';

//import Header from '../containers/header/header';
import axios from 'axios-https-proxy-fix';
//const cheerio = require('cheerio');

function Homepage() {
  const url = 'https://team5blogbackend.herokuapp.com/articles'
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(url).then(json => setData(json.data)).catch(console.error)
  }, [])

  let articles = data.map(article => {
    article.body = article.body.substring(0, 200)
    return (
      <Col>
        <CardContainer key={article._id} article={article} />
      </Col>
    )
  })

  return (
    <Container fluid>
      <Row>
        {articles}
      </Row>
    </Container>
  );
}

export default Homepage;