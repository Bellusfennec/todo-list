const Copyright = () => {
  const todayYear = new Date().getFullYear();
  return <p>Todo List © {todayYear > 2024 ? `2024-${todayYear}` : 2024}</p>;
};

export default Copyright;
