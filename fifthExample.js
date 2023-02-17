import React from 'react';

const FifthExample = ({children}) => {

    return (
        //this code will work only when children will be an array of elements
        //so in parent component we should put some elements which are on the same tree level
        //between opening and closing tag of this component
        //then elements will be wrapped in array
        //we can also pass array of elements by children prop without using opening/closing tags approach
        //when we provide only one element between tags or we provide something else
        //to children props than array of elements the code will fail
        <div>
            {children.map((element, index) => {
                return (
                    <React.Fragment key={index}>
                        {React.cloneElement(element)}
                    </React.Fragment>
                )
            })}
        </div>
        );
};

export default FifthExample;