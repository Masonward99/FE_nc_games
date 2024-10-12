import { useEffect, useState } from "react";
import { getComments } from "../utils/utils";

export function useCommentsByReview(review_id) {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        getComments(review_id)
            .then(comments => {
                setComments(comments)
            })
    }, [review_id])
    return {comments, review_id}
}