import React, { useRef } from 'react';

interface AddTodoProps {
  addTodo: (task: string) => void;
}

/* Форма для добавления новой задачи. Для этого вызывается функция addTodo,
которая добавляет новую задачу в список. */
/* Для поля ввода задачи использован useRef, чтобы автоматически устанавливать фокус на поле после добавления новой задачи. */
const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = inputRef.current?.value;
    if (task) {
      addTodo(task);
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Добавить задачу..." />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddTodo;
