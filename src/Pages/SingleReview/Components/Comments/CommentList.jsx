import { useContext } from "react";
import { UserContext } from "../../../../../Contexts/UserContext";
import CommentCard from "./CommentCard/CommentCard";

function CommentList({ comments, setComments }) {
  let { user } = useContext(UserContext);
  return (
    <>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard
                  comment={comment}
                  remove={comment.author === user.username ? true : false}
                  comments={comments}
                  setComments={setComments}
                />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
export default CommentList;
