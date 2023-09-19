import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";

export function useCategories() {
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getCategories()
            .then(categories => {
                setCategories(categories);
                setIsLoading(false)
        })
    }, [])
    return {categories, isLoading}
}