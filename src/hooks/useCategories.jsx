import { useEffect, useState } from "react";
import { getCategories } from "../utils/utils";

export function useCategories() {
    useEffect(() => {
        getCategories()
            .then(categories => { 
                localStorage.setItem('categories', JSON.stringify(categories))
        })
    }, [])
}