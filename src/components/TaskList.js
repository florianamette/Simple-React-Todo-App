import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => onToggleTask(task.id)}
                    onDelete={() => onDeleteTask(task.id)}
                />
            ))}
        </ul>
    );
}

export default TaskList;