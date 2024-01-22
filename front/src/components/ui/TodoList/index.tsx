const mockData = [
  { id: 1, name: "Первое", done: true, index: 3 },
  { id: 2, name: "Второе", done: false, index: 1 },
  { id: 3, name: "Третье", done: false, index: 2 },
  { id: 4, name: "Четвертое", done: true, index: 4 },
  { id: 5, name: "Пятое", done: false, index: 5 }
];

const TodoList = () => {
  const sortedData = mockData.sort((a, b) => a.index - b.index);

  return (
    <div className="flex flex-col gap-5">
      {sortedData.map((item, index) => (
        <div key={item.id} className={"flex gap-5" + (!item.done ? " text-gray-500" : "")}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
