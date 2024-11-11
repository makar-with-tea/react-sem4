import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

/* Список задач. Отображается список задач (циклический рендеринг) с возможностью 
добавления новых задач. Для каждой задачи используется уникальный key. */
/* Для удаления задачи используйте условный рендеринг: при нажатии на кнопку "Удалить" задача исчезает из списка. */
const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, toggleComplete }) => (
  <ul style={{ textAlign: 'left' }}>
    {todos.map((todo) => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        removeTodo={removeTodo} 
        toggleComplete={toggleComplete} 
      />
    ))}
  </ul>
);

export default TodoList;
