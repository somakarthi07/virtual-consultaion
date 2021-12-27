import {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            if(localStorage.getItem("jwt")){
                try {
                    const config = {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("jwt")}`
                        }
                    }
                    const resp = await fetch(url, config);
                    const data = await resp.json();
                    if(!resp.ok){
                        setError("Something went wrong...");
                        history.push("/login")
                        setLoading(false);
                        setData(null);
                    }else{
                        setData(data);
                        setLoading(false);
                        setError(null);
                    }
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                    setData("");
                }
            }else{
                setData(false);
                setError(false);
                setLoading(false);
            }
        }
        fetchData();
        
    }, [url, history]);

    return {data, error, loading};
}

export default useFetch; 