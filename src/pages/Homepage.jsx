import React from 'react';
import './Homepage.css';
import CardContainer from '../containers/card-container/card-container'
import { Container, Row, Col } from 'react-bootstrap'

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles:
        [{
          id: 0,
          title: "Hello blog 1",
          body: "Silent sir say desire fat him letter.",
        },
        {
          id: 1,
          title: "Hello blog 2",
          body: "Silent sir say desire fat him letter.",
        },
        {
          id: 2,
          title: "Hello blog 3",
          body: "Silent sir say desire fat him letter.",

        },
        {
          id: 3,
          title: "Hello blog 4",
          body: "Silent sir say desire fat him letter.",

        },
        {
          id: 4,
          title: "Hello blog 5",
          body: "Silent sir say desire fat him letter.",

        },
        {
          id: "5",
          title: "Hello blog 6",
          body: "Silent sir say desire fat him letter.",

        }
        ],
    }
  }

  render() {
    let articles = this.state.articles.map(article => {
      return (
        <Col sm="4">
          <CardContainer key={article.id} article={article} />
        </Col>
      )
    })


    return (
      <Container fluid>
        <Row>
          {articles}
        </Row>
      </Container>

    )
  }

}