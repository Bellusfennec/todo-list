import { FaHeart } from "react-icons/fa";

const Copyright = () => {
  const todayYear = new Date().getFullYear();
  return (
    <p className="flex gap-[5px] items-center">
      <span>Niyaz with</span> <FaHeart className="text-red-600" /> <span>©</span>{" "}
      <span>{todayYear > 2024 ? `2024-${todayYear}` : 2024}</span>
    </p>
  );
};

export default Copyright;
