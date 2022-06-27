import React from 'react';
import {
  Col, Row, ListGroup, ListGroupItem
} from "reactstrap";
import styles from './SearchResults.module.css';

const SearchResults = ({ topic, OnSelectRelTopic, searchValue }) => {

  const OnClickRelTopic = (e) => {
    OnSelectRelTopic(e.target.textContent)
  };

  if (searchValue === null) return null;

  if (typeof topic === 'undefined' || topic === null) return null;

  if (topic.hasOwnProperty('topic') && topic.topic === null) 
    return (
      <h5 className='text-center'>No results found with that topic. Try Again!</h5>
    );

  return (
    <div>
      <Row>
        <Col xxl={12}>
          <h4 className='mb-3'>Topic:</h4>
        </Col>
        <Col>
          <p>{topic.topic.name}</p>
        </Col>
        <Col><p>Stargazers: {topic.topic.stargazerCount.toLocaleString()}</p></Col>
      </Row>
      <Row>
        <Col>
          <h4>Related topics:</h4>
          <ListGroup className={`mt-3`} >
            {topic.topic.relatedTopics.map((relTopic, index) =>
              <ListGroupItem
                tag="li"
                onClick={OnClickRelTopic}
                key={`topic_${index}`}
                className={`list-group-item-action ${styles.listItem}`}
              >
                {relTopic.name}
              </ListGroupItem>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResults;