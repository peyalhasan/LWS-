import { useEffect } from "react";
import { useState } from "react";
import fetchResults from "../utlis/fetResult";

export default function useData(query, page) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        let ignore = false;
        fetchResults(query, page).then(json => {
            if (!ignore) {
                setResults(json)
            }
        })

        // cleanup 
        return () => {
            ignore = true
        }
    }, [query, page])
    return results
}