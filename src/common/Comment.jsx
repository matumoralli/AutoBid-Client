import { FiCornerRightDown, FiCornerRightUp, FiSend } from "react-icons/fi";
import { users } from "../db.json";
import { useState } from "react";
import Answers from "./Answers";

const getUseData = (userId) =>
  users?.find((user) => Number(user.id) === Number(userId));

const Comment = ({ commentData, cond }) => {
  const { userId, comment, date, answers } = commentData;
  const { name, image } = getUseData(userId);

  const [showAnswers, setShowAnswers] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [newAnswer, setNewAnswer] = useState("");

  const handleShowAnswers = () => {
    answers.length && setShowAnswers(!showAnswers);
  };
  const handleShowResponse = () => setShowResponse(!showResponse);
  const handleChange = (e) => setNewAnswer(e.target.value);

  return (
    <li className={`${cond && "mb-3 border-b pb-3"}`}>
      <div className="flex items-center gap-2">
        <img
          src={image || "https://source.unsplash.com/random/300/?user"}
          alt={name + "-userAvatar"}
          className="h-8 w-8 rounded-full"
        />
        <span className="text-lg font-medium">{name}</span>
        <span className="text-md hidden text-gray-400 md:block">
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
            className={`flex items-center gap-1 rounded-md border-2 p-1 text-xs font-medium ${
              answers.length
                ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                : "cursor-default border-gray-500 text-gray-500"
            } transition-all duration-300`}
            onClick={handleShowAnswers}
          >
            {answers?.length} repuesta/s{" "}
            {showAnswers ? <FiCornerRightUp /> : <FiCornerRightDown />}
          </button>
        </li>
      </ul>
      {showResponse && (
        <form className="relative ml-[2.5rem] mt-2">
          <input
            type="text"
            name="newAnswer"
            value={newAnswer}
            onChange={handleChange}
            placeholder="Agrega una respuesta..."
            className="w-full border-b border-gray-500 border-opacity-25 p-1 text-gray-500 outline-none transition-all duration-300 hover:border-opacity-100 focus:border-opacity-100"
          />
          <button
            type="submit"
            className={`absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 ${
              newAnswer
                ? "text-opacity-50 hover:scale-105 hover:text-opacity-100"
                : "text-opacity-25 hover:cursor-not-allowed"
            } transition-all duration-300`}
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
