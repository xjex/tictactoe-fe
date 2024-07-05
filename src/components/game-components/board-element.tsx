import React from "react";
interface BoardElementProps {
  value: string | null;
  onClick: () => void;
}

const BoardElement: React.FC<BoardElementProps> = ({ value, onClick }) => {
  if (!value) {
    return (
      <button className="w-16 h-16 border border-gray-400" onClick={onClick} />
    );
  }

  if (value === "X") {
    return (
      <button className="w-16 h-16 border border-gray-400  bg-green-600 text-slate-100 ">
        X
      </button>
    );
  }

  if (value === "O") {
    return (
      <button className="w-16 h-16 border border-gray-400 bg-red-600  text-slate-100">
        O
      </button>
    );
  }
  return (
    <button
      className="w-32 h-16 border border-gray-400 bg-green-600 flex items-center justify-center text-2xl font-bold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default BoardElement;
