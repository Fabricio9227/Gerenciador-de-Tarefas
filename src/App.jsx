import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function handleDeleteTask(taskId) {
    // Cria uma nova lista de tarefas, filtrando/removendo a tarefa que foi deletada
    // A arrow function é uma função anônima que retorna o valor da tarefa que não tem o id igual ao id da tarefa que foi deletada

    const newTask = tasks.filter((task) => task.id !== taskId);
    // Atualiza o estado das tarefas com a nova lista de tarefas

    setTasks(newTask);
  }

  function handleChanges(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    // Adiciona a nova tarefa ao estado das tarefas
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask handleChanges={handleChanges} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
