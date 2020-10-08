import React from 'react';
import { ListGroup } from 'react-bootstrap';

const List = ({todos, setTodos}) => {
  if (todos && todos.length > 0) {
    return (
      <ListGroup className="my-3"> Hello! 
        {todos.map((todo, i) => (
          <ListGroup.Item key={i}>
            {todo.item}
          </ListGroup.Item>
        )) } Hope you have a great day ahead!!
      </ListGroup>
    );
  }

  return null;
};

export default List;