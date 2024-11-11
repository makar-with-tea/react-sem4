import React, {useState} from 'react';
import './TodoItem.css'; // Импортируем CSS-файл

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}
// Использованы инлайн-стили для зачеркивания задачи при выполнении и CSS файл для общей стилизации
// Добавление и удаление задач с помощью условного рендеринга
const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, toggleComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => removeTodo(todo.id), 300); 
  };

  return isVisible ? (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.task}</span>
      <button onClick={handleRemove}>🗑️</button>
    </li>
  ) : null; // Условный рендеринг
};

export default TodoItem;
