import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value)
    
    
const handleAdd = () => {
    // console.log(event);
    setCounter( (c) => c +1 )

    
};

const handleLess = () => {
   setCounter((c) => c -1)

}

const handleReset = () => {
    setCounter ( () =>value )
}
console.log(handleReset)


    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleLess}>-1</button>
            <button onClick={handleReset} >Resest</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 'No hay valor'
};
