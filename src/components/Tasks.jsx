import { ChevronRightIcon } from "lucide-react";
import { Trash2 } from "lucide-react";

function Tasks({ tasks, handleTaskClick, handleDeleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => handleTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md${
              task.isCompleted ? " line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash2 />
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
