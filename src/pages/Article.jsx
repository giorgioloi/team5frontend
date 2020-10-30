import CardContainer from '../containers/card-container/card-container'
import { Container } from 'react-bootstrap'
import React, { useState, useEffect, } from 'react';
import './Article.css';
import axios from 'axios-https-proxy-fix';
import { useLocation } from 'react-router-dom'

function Article(props) {
  const location = useLocation()
  console.log(location);
  const url = 'https://team5blogbackend.herokuapp.com/articles/' + location.state.id
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
    <Container>
      <CardContainer key={data._id} article={data} />
    </Container>
  );
}

export default Article;