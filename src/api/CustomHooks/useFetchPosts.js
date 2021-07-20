import { useState, useEffect } from 'react';

const useFetchPosts = (url, perPage) => {
    const [data, setData] = useState(null);
    const [pageCount, setPageCount] = useState(1);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                setPageCount(Math.ceil(res.headers.get('Content-Range') / perPage));
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    // console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);

        return () => abortCont.abort();
    }, [perPage, url]);

    return {data, pageCount, isPending, error}
}

export default useFetchPosts;