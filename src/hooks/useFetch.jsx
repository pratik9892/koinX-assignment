import { fetchData } from "../utils/getDataFromApi.js";

import React, { useEffect ,useState} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchData(url)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })}, [url])
  return {
    data,loading,error
  }
}
