import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classNames from 'classnames';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (onTodoClick) {
      onTodoClick(todo, idx);
    }
  };

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}
            className={classNames({
              completed: todo.status === 'completed',
              'item-list': true,
            })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
