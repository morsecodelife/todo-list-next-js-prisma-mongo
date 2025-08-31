const TodoBlank = () => {
  return (
    <div className="border-dashed border-1 border-gray-300 p-4 rounded-lg shadow-sm opacity-60">
      <h2 className="font-bold">Add a new task</h2>
      <p className="text-sm text-gray-500">
        No tasks available. Please add a new task.
      </p>
    </div>
  );
};

export default TodoBlank;
