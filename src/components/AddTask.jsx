import { useState } from "react";

function AddTask({ handleChanges }) {
  const [taskValue, setTaskValue] = useState({
    title: "",
    description: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setTaskValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col gap-2 space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        onChange={handleInputChange}
        name="title"
        placeholder="Título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={taskValue.title}
      />
      <input
        onChange={handleInputChange}
        name="description"
        placeholder="Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={taskValue.description}
      />
      <button
        onClick={(event) => {
          // Verifica se o título e a descrição não estão vazios
          if (
            taskValue.title.trim() === "" ||
            taskValue.description.trim() === ""
          ) {
            alert("Preencha todos os campos, antes de adicionar a tarefa");
            event.preventDefault();
            return;
          }
          handleChanges(taskValue.title, taskValue.description);
          setTaskValue({ title: "", description: "" });
          event.preventDefault();
        }}
        type="submit"
        className="bg-slate-500 px-4 py-2 text-slate-100 font-bold rounded-md shadow"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
