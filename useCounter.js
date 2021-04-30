import React, { useState } from 'react';

export const useCounter = (initialState=10 ) => {

    const [counter, setCounter] = useState(initialState);

    
    const increment =(/* factor */)=> {
        setCounter (counter+ 1 /* factor */);
    }    

    const decrement =(/* factor */)=> {
        setCounter (counter- 1 /* factor */);
    } 

    const reset =()=> {
        setCounter (initialState);
    } 
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
