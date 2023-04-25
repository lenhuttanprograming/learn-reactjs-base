import { useEffect, useState, useMemo } from 'react';
import TodoList from '../../Components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import TodoForm from 'features/Todo/Components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status;
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  function handleTodoList(todo, idx) {
    //clone current array to new array
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    setTodoList(newTodoList);
  }

  const handleFilterAll = () => {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleFilterCompleted = () => {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleFilterNew = () => {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderFilterTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || todo.status === filteredStatus);
  }, [filteredStatus, todoList]);

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderFilterTodoList} onTodoClick={handleTodoList} />

      <button onClick={handleFilterAll}>Show All</button>
      <button onClick={handleFilterCompleted}>Show Completed</button>
      <button onClick={handleFilterNew}>Show New</button>
    </div>
  );
}
export default ListPage;
