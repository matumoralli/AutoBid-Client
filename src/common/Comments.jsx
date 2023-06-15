import Comment from "./Comment";

const Comments = ({ comments }) => {
  if (!comments?.length)
    return (
      <p className="text-center text-gray-500">
        No hay ningún comentario para mostrar de momento, sé el primero en
        comentar
      </p>
    );

  return (
    <div className="mt-2 max-h-[50vh] overflow-y-auto rounded-md border p-4">
      <ul className="flex flex-col gap-2">
        {comments.map((comment, index) => (
          <Comment
            commentData={comment}
            cond={index + 1 !== comments.length}
            key={comment + Math.random()}
          />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
