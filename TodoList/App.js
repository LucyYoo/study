//App 에서는 어떤 컴포넌트를  만듦
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { getItem, setItem } from "./storage.js";
import TodoCount from "./TodoCount.js";

export default function App({ $target, initialState }) {
  // this.state = {
  //   todos: [],
  //   CompletedTodos: 0,
  // };

  // this.setState = (nextState) => {
  //   this.state = nextState;
  //   todoList.setState({
  //     todos: this.state.todos,
  //   });
  // };

  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = {
        id: todoList.state.length,
        content: text,
        isCompleted: false,
      };

      console.log(todoList.state);
      const newTodo = [...todoList.state, nextState];
      todoList.setState(newTodo);
      todoCount.setState(newTodo);
      // const newTodo = [...this.state.todos, nextState];
      // console.log(this.state.todos);
      // this.setState({
      //   ...this.state,
      //   todos: newTodo,
      // });

      setItem("todos", newTodo);
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
    onToggle: (id) => {
      const toggleTodo = todoList.state.findIndex(
        (todo) => todo.id === parseInt(id, 10)
      );
      const nextState = [...todoList.state];

      nextState[toggleTodo].isCompleted = !nextState[toggleTodo].isCompleted;

      todoList.setState(nextState);
      todoCount.setState(nextState);
      setItem("todos", nextState);
    },
    onRemove: (e, id) => {
      const li = e.target.parentElement;
      li.remove();
      let nextState = [...todoList.state];
      nextState = todoList.state.filter(
        (todo) => todo.id !== parseInt(li.dataset.id)
      );

      setItem("todos", nextState);
      todoList.setState(nextState);
      todoCount.setState(nextState);
    },
  });

  const todoCount = new TodoCount({
    $target,
    initialState: todoList.state,
  });
  //새로고침해야 적용되는 상태
}

