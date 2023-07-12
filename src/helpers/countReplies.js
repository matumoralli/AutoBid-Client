export default function countReplies(comment = {}, repliesState = []) {
  const commentRepliesAmmount = Math.max(Number(comment?.Replies?.length) || 0);
  const repliesStateAmmount = Number(
    repliesState?.filter((reply) => reply.CommentId === comment.id)?.length
  );
  const repliesAmmount = commentRepliesAmmount + repliesStateAmmount;

  if (repliesAmmount === 0) {
    return "";
  }

  if (repliesAmmount === 1) {
    return "1 respuesta";
  }

  if (repliesAmmount > 1) {
    return `${repliesAmmount} respuestas`;
  }
}
