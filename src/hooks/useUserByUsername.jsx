import { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/utils";

export function useUserByUsername(username) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUserByUsername(username)
            .then(user => {
                setUser(user)
                setIsLoading(false)
            })
        },
    [username])
    return {user, isLoading}
}