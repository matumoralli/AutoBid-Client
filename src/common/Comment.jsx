import { FiCornerRightDown, FiCornerRightUp, FiSend } from "react-icons/fi";
import { users } from "../db.json";
import { useState } from "react";
import Answers from "./Answers";

const getUseData = (userId) =>
  users?.find((user) => Number(user.id) === Number(userId));

const Comment = ({ commentData }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");

  const handleShowAnswers = () => setShowAnswers(!showAnswers);
  const handleShowResponse = () => setShowResponse(!showResponse);
  const handleChange = (e) => {
    setNewAnswer(e.target.value);
  };

  const { userId, comment, date, answers } = commentData;
  const { name, image } = getUseData(userId);

  return (
    <li className="mb-3 border-b pb-3">
      <div className="flex items-center gap-2">
        <img
          src={image || "https://source.unsplash.com/random/300/?user"}
          alt={name + "-userAvatar"}
          className="h-8 w-8 rounded-full"
        />
        <span className="text-lg font-medium">{name}</span>
        <span className="text-md text-gray-400">
          Hace {new Date(date).getHours()} hora/s
        </span>
      </div>

      <p className="text-md ml-[2.5rem] text-gray-600">{comment} </p>

      <ul className="itesm-center ml-[2.5rem] mt-3 flex gap-2">
        <li>
          <button
            className="flex items-center gap-1 rounded-md border-2 border-green-500 p-1 text-xs font-medium text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
            onClick={handleShowResponse}
          >
            Responder <FiSend />
          </button>
        </li>
        <li>
          <button
            className="flex items-center gap-1 rounded-md border-2 border-blue-500 p-1 text-xs font-medium text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
            onClick={handleShowAnswers}
          >
            {answers?.length} repuesta/s{" "}
            {showAnswers ? <FiCornerRightUp /> : <FiCornerRightDown />}
          </button>
        </li>
      </ul>
      {showResponse && (
        <form className="ml-[2.5rem] mt-2 flex gap-2">
          <input
            type="text"
            name="newAnswer"
            value={newAnswer}
            onChange={handleChange}
            placeholder="Agrega una respuesta..."
            className="w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 outline-none transition-all duration-200 focus:border-gray-300 focus:bg-gray-100"
          />
          <button
            type="submit"
            className="rounded-md border-2 border-blue-500 p-2 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            <FiSend />
          </button>
        </form>
      )}
      {showAnswers && <Answers answers={answers} />}
    </li>
  );
};

export default Comment;
