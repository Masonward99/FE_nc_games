import { useEffect, useState } from "react";
import {  getReviewsByUsername } from "../utils/utils";

export function useReviewsByUsername(username) {
    const [reviews, setReviews] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getReviewsByUsername(username)
            .then((res) => {
                setReviews(res)
                setIsLoading(false)
            })
        },
    [username])
    return {isLoading, reviews}
}