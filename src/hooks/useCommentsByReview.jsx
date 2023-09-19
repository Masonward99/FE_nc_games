import { useEffect, useState } from "react";
import { getComments } from "../utils/utils";

export function useCommentsByReview(review_id) {
    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getComments(review_id)
            .then(comments => {
                setComments(comments)
                setIsLoading(false)
            })
    }, [review_id])
    return {comments, review_id}
}