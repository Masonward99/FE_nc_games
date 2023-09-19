import { useEffect, useState } from "react";
import { getReview } from "../utils/utils";

export function useReviewById(review_id) {
    const [review, setReview] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReview(review_id)
            .then(res => {
                setReview(res)
                setIsLoading(false)
            })
    }, [review_id])
    return { review, isLoading };
}