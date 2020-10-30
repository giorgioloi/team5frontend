import CardContainer from '../containers/card-container/card-container'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import './Article.css';
//import BaseContainer from '../containers/base-container/base-container'
//import Header from '../containers/header/header';
import axios from 'axios-https-proxy-fix';
//const cheerio = require('cheerio');

function Article(props) {
  const url = 'https://team5blogbackend.herokuapp.com/articles/' + props.location.state.id
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("ciao");
    if (loading)
      axios.get(url).then(json => setData(json.data)).then(setLoading(false)).catch(console.error)
  }, [url, setLoading, loading])

  // console.log(data);
  // let comments = data.map(comment => {
  //   return (
  //     <div className="commentsection">
  //       <h5>{comment.comments.nickname}</h5>
  //       <p>{comment.comments.body}</p>
  //     </div>
  //   )
  // })


  return (
    <Container fluid>
      <Row>
        <Col>
          <CardContainer key={data._id} article={data} />

        </Col>
      </Row>
    </Container>
  );
}

export default Article;