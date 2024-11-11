import { Component } from 'react';
import AddTodo from './AddTodo';
import CurrentAndPreviousTask from './CurrentAndPreviousTask';
import TodoList from './TodoList';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  isVisible: boolean;
}

interface TodoAppState {
  todos: Todo[];
  curTask: string;
  prevTask: string;
}

/* Организовано управление задачами в родительском компоненте, который будет 
передавать состояние дочерним компонентам через props. */
class TodoApp extends Component<{}, TodoAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
      curTask: '',
      prevTask: '',
    };
  }

  /* Добавление и удаление задач. Реализован функционал добавления новой задачи в 
список, используя состояние компонента.  */
  addTodo = (task: string) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: Date.now(), task, completed: false, isVisible: true }],
      curTask: task,
      prevTask: prevState.curTask,
    }));
  };

  removeTodo = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isVisible: false } : todo
      ),
    }));
  };

  toggleComplete = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todos, curTask: currentTask, prevTask: previousTask } = this.state;
    return (
      <div className="App">
        <h1>Список задач</h1>
        <AddTodo addTodo={this.addTodo} />
        <CurrentAndPreviousTask curTask={currentTask} prevTask={previousTask} />
        <TodoList todos={todos} removeTodo={this.removeTodo} toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default TodoApp;
