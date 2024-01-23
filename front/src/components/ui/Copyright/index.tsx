const Copyright = () => {
  const todayYear = new Date().getFullYear();
  return <p>Niyaz with love © {todayYear > 2024 ? `2024-${todayYear}` : 2024}</p>;
};

export default Copyright;
