import { useEffect, useState } from "react";
import { getCommentsByUser } from "../utils/utils";

export  function useComments(username) {
    const [comments, setComments] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getCommentsByUser(username)
            .then(res => {
                setComments(res)
                setIsLoading(false)
            })
    }, [username])
    
    return { comments , isLoading};
}