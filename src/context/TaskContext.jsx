import { createContext, useEffect, useState } from "react";
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        description: task.description,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask,
    }}>{props.children}</TaskContext.Provider>
  );
}

export default TaskContext;
