import React, {useState, useMemo} from 'react';

const ThirdExample = ({someProp}) => {
    if (someProp) {
        //we can't put hooks in conditions because
        //react doesn't know exact ordering of hooks
        //order is important for React for how React associate hook calls with component
        const [value, setValue] = useState(0)
    }

    //we shouldn't do this everywhere because it simply cost us memory
    useMemo(() => {
        return "caching..."
    }, [someProp])

    return (
        //we can use React.Fragment if we want provide some props like key etc.
        <React.Fragment>
            {/*{Some code}*/}
        </React.Fragment>
    )
};

export default ThirdExample;