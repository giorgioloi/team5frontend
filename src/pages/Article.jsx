import CardContainer from '../containers/card-container/card-container'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import './Article.css';
//import BaseContainer from '../containers/base-container/base-container'
//import Header from '../containers/header/header';
import axios from 'axios-https-proxy-fix';
//const cheerio = require('cheerio');

function Article(props) {
  const url = 'http://localhost:3000/articles/' + props.location.state.id
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("ciao");
    if (loading)
      axios.get(url).then(json => setData(json.data)).then(setLoading(false)).catch(console.error)
  }, [url, setLoading, loading])

  let article = data
  return (
    <Container fluid>
      <Row>
        <Col>
          <CardContainer key={article._id} article={article} />
        </Col>
      </Row>
    </Container>
  );
}

export default Article;