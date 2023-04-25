import React from 'react';
import PropTypes from 'prop-types';
import TodoList from 'features/TodoV3/Components/TodoList';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import TodoForm from 'features/TodoV3/Components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Sleep',
      status: 'new',
    },
    {
      id: 2,
      title: 'Code',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Eat',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const history = useHistory();
  const location = useLocation();
  const [filteredTodoList, setFilteredTodoList] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status;
  });

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx].status = newTodoList[idx].status === 'completed' ? 'new' : 'completed';
    setTodoList(newTodoList);
  };

  const handleAllBtn = () => {
    const params = { status: 'all' };

    history.push({
      pathname: location.path,
      search: queryString.stringify(params),
    });
  };

  const handleNewBtn = () => {
    const params = { status: 'new' };

    history.push({
      pathname: location.path,
      search: queryString.stringify(params),
    });
  };

  const handleCompletedBtn = () => {
    const params = { status: 'completed' };

    history.push({
      pathname: location.path,
      search: queryString.stringify(params),
    });
  };

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredTodoList(params.status || 'all');
  }, [location.search]);

  const renderFilteredTodo = todoList.filter((todo) => filteredTodoList === 'all' || todo.status === filteredTodoList);

  const handleSubmitForm = (values) => {
    const newTodoList = [...todoList];
    const newTodo = {
      id: newTodoList.length + 1,
      title: values.title,
      status: 'new',
    };

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <TodoForm onSubmit={handleSubmitForm}></TodoForm>

      <TodoList todoList={renderFilteredTodo} onTodoClick={handleTodoClick}></TodoList>

      <button onClick={handleAllBtn}>All Todos</button>
      <button onClick={handleNewBtn}>New Todos</button>
      <button onClick={handleCompletedBtn}>Completed Todos</button>
    </div>
  );
}

export default ListPage;
