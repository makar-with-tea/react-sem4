import React from 'react';

interface TaskProps {
  curTask: string;
  prevTask: string;
}

const CurrentAndPreviousTask: React.FC<TaskProps> = ({ curTask, prevTask }) => (
  <div>
    <p>Текущая задача: {curTask}</p>
    <p>Предыдущая задача: {prevTask}</p>
  </div>
);

export default CurrentAndPreviousTask;
