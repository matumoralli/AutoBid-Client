import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import DefButton from "@/common/DefButton";
import { postComment, postReply } from "@/redux/auction/auctionSlice";
import sortCommentsAndBids from "@/helpers/sortCommentsAndBids";
import commentDate from "@/utils/commentDate";
import { useLazyGetCommentQuery } from "@/redux/api/apiSlice";

export default function CommentBox({ auction, user, router }) {
  const dispatch = useDispatch();
  const [replyShowing, setReplyShowing] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [trigger, result, lastPromiseInfo] = useLazyGetCommentQuery();

  const countReplies = (comment = {}, repliesState = []) => {
    const commentRepliesAmmount = Math.max(
      Number(comment?.Replies?.length) || 0
    );
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
  };

  useMemo(() => {
    setComments((prev) => [
      ...prev,
      ...sortCommentsAndBids(auction?.Comments, auction?.Bids),
    ]);
  }, [auction]);

  const handleComment = async (e) => {
    e.preventDefault();
    const { payload } = await dispatch(
      postComment({ auctionId: auction.id, userId: user.id, comment: comment })
    );
    const newComment = await trigger(payload.id).unwrap();
    setComments((prev) => [...prev, newComment]);
    return setComment("");
  };

  const handleReply = async (e) => {
    e.preventDefault();
    const { payload } = await dispatch(
      postReply({ commentId: replyShowing, userId: user.id, reply: reply })
    );
    setReplies((prev) => [
      ...prev,
      {
        id: payload?.id,
        createdAt: payload?.createdAt,
        CommentId: replyShowing,
        UserId: user.id,
        content: reply,
      },
    ]);
    return setReply("");
  };

  const showReplies = (e) => {
    e.preventDefault();
    replyShowing === e.target.parentElement.parentElement.attributes.id.value
      ? setReplyShowing("")
      : setReplyShowing(
          e.target.parentElement.parentElement.attributes.id.value
        );
  };

  return (
    <section className="mx-2 border-b-[1px] py-6">
      <h1 className="mb-4 text-left text-3xl font-bold">
        Comentarios y ofertas
      </h1>
      <form id="commentTextArea">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          className=" w-full rounded-md border-2 border-gray-800"
          maxLength={255}
          name="comment"
          form="commentTextArea"
          rows="4"
          value={comment}
        ></textarea>
        <div className="flex justify-end ">
          <DefButton
            type="submit"
            onClick={(e) => handleComment(e)}
            className={`mx-0 bg-gray-800 text-xs text-white hover:bg-gray-900`}
          >
            Comentar
          </DefButton>
        </div>
      </form>
      <ul className="flex flex-col gap-4">
        {comments.toReversed().map((c) => {
          if (c?.ammount) {
            return (
              <li className=" mb-2 ms-1 flex flex-col" key={c.id}>
                <div className="flex items-center gap-2">
                  <a className="font-semibold">{c.User.name}</a>
                  <p className="text-sm text-gray-400">
                    {commentDate(c.createdAt)}
                  </p>
                </div>
                <div className="my-1 mr-auto ms-1 flex flex-col items-center  text-sm">
                  <p className="mr-auto rounded-lg bg-zinc-800 px-2 py-1 font-semibold text-white">
                    Oferta ${c.ammount.toLocaleString()}
                  </p>
                </div>
              </li>
            );
          }

          if (c?.content) {
            return (
              <li className=" ms-1 flex flex-col" key={c.id} id={c.id}>
                <div className="flex items-center gap-2">
                  <a className="font-semibold">{c.User.name}</a>
                  <p className="text-sm text-gray-400">
                    {commentDate(c.createdAt)}
                  </p>
                </div>
                <div className="my-1 mr-auto ms-1 flex flex-col items-center  text-sm ">
                  <p>{c.content}</p>
                </div>
                <div className=" flex justify-between">
                  <button
                    onClick={(e) => showReplies(e)}
                    className=" text-sm font-light text-gray-400"
                  >
                    {countReplies(c, replies)}
                  </button>
                  <button
                    onClick={(e) => showReplies(e)}
                    className=" text-sm font-light text-gray-400"
                  >
                    Responder
                  </button>
                </div>
                {replyShowing === c.id && (
                  <ul className="mt-2">
                    {c?.Replies?.map((reply) => {
                      return (
                        <ol
                          className=" mb-2 ms-3 flex flex-col text-sm text-zinc-700"
                          key={reply.id}
                        >
                          <div className="flex items-center gap-2">
                            <a className="font-semibold">{c.User.name}</a>
                            <p className=" text-gray-400">
                              {commentDate(reply.createdAt)}
                            </p>
                          </div>
                          <div className="my-1 mr-auto ms-1 flex flex-col items-center  ">
                            <p>{reply.content}</p>
                          </div>
                        </ol>
                      );
                    })}
                    {replies
                      ?.filter((reply) => reply.CommentId === c.id)
                      .map((reply) => {
                        return (
                          <ol
                            className=" mb-2 ms-3 flex flex-col text-sm text-zinc-700"
                            key={reply.id}
                          >
                            <div className="flex items-center gap-2">
                              <a className="font-semibold">{c.User.name}</a>
                              <p className=" text-gray-400">
                                {commentDate(reply.createdAt)}
                              </p>
                            </div>
                            <div className="my-1 mr-auto ms-1 flex flex-col items-center  ">
                              <p>{reply.content}</p>
                            </div>
                          </ol>
                        );
                      })}
                    <form className="w-full " id="replyTextArea">
                      <textarea
                        onChange={(e) => setReply(e.target.value)}
                        className=" mx-auto mb-1 block w-10/12 rounded-md border-2 border-gray-800"
                        maxLength={255}
                        name="reply"
                        form="replyTextArea"
                        rows="2"
                        value={reply}
                      ></textarea>

                      <div className="flex justify-end ">
                        <DefButton
                          type="submit"
                          onClick={(e) => handleReply(e)}
                          className={`mx-0 bg-gray-800 text-xs text-white hover:bg-gray-900`}
                        >
                          Responder
                        </DefButton>
                      </div>
                    </form>
                  </ul>
                )}
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
}
