import { useEffect, useState } from 'react';
import TodoList from '../../Components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import TodoForm from 'features/TodoV2/Components/TodoForm';

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

  //chuyen prop thanh state
  const [todoList, setTodoList] = useState(initTodoList);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const [fiteredTodoStatus, setFilteredTodoStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status;
  });

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

  function handleAllButton() {
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  function handleNewButton() {
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  function handleCompletedButton() {
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  }

  const renderFilterTodoList = todoList.filter(
    (todo) => fiteredTodoStatus === 'all' || todo.status === fiteredTodoStatus
  );

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredTodoStatus(params.status || 'all');
  }, [location.search]);

  const handleSubmitForm = (values) => {
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
      <TodoForm onSubmit={handleSubmitForm} />

      <TodoList todoList={renderFilterTodoList} onTodoClick={handleTodoList} />

      <button onClick={handleAllButton}>All Todos</button>
      <button onClick={handleNewButton}>New Todos</button>
      <button onClick={handleCompletedButton}>Completed Todos</button>
    </div>
  );
}

export default ListPage;
