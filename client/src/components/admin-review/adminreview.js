import React, { useEffect, useState } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";

function AdminReview(props) {
  const [reviews, setReviews] = useState([]);
  const [formObject, setFormObject] = useState({
    userName: "",
    userComment: "",
    rating: 5,
  });

  // Load all books and store them with setBooks
  useEffect(() => {
    loadReviews();
  }, []);

  // Loads all books and sets them to books
  function loadReviews() {
    API.getReviews()
      .then(res => setReviews(res.data))
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteReview(id) {
    API.deleteReview(id)
      .then(res => loadReviews())
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Row>
        <Col size="md-9 sm-12" align="center">
          <Jumbotron>
            <h1>Customer Reviews</h1>
          </Jumbotron>
          {reviews.length ? (
            <List>
              {reviews.map(review => {
                return (
                  <ListItem key={review._id}>
                    <a href={"reviews/" + review._id}>
                      <strong>
                        {review.userName} by {review.userComment}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => deleteReview(review._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminReview;
