import { users } from "../db.json";

const getUseData = (userId) =>
  users?.find((user) => Number(user.id) === Number(userId));

const Answers = ({ answers }) => {
  return (
    <div className="ml-[2.5rem] mt-2 max-h-[25vh] overflow-y-auto rounded-md border p-4">
      <ul className="flex flex-col gap-2">
        {answers.map(({ userId, comment, date }) => {
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
                <span className="text-md hidden text-gray-400 md:block">
                  Hace {new Date(date).getHours()} hora/s
                </span>
              </div>

              <p className="ml-[2.5rem] text-sm text-gray-600">{comment} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
