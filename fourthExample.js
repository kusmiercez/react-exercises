import React, {useState, useEffect} from 'react';

const FourthExample = () => {
    const [data, setData] = useState()

    const fetchData = async () => {
        return await fetch("url");
    }

    //useEffect expect return value from first argument will be undefined
    //or function but not promise, it can't handle it
    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData)
    }, [])

    return null
};

export default FourthExample;