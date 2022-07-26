const Counter = (props) => {

    const { 
        counter,
        increase,
        decrease
     } = props;

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button
                onClick={increase}
            >+</button>
            <button
                onClick={decrease}
            >-</button>
        </div>
    )
};

export default Counter;