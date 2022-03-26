import React from 'react';
import './Theory.css'

const Theory = () => {
    return (
        <div className='theory'>
            <h2>How React works?</h2>
            <h4>React is a JavaScript Library. React lets us use XML, which makes it very easy and comfortable to create dynamic user interfaces.  It allows to use components, through which we can write or built complex UIs into small and separated pieces. It uses props to transfer data from one component to another and is unidirectional. Even without reloading the entire page we can see the change in data, from web application. React is fast-moving, flexible and expandable</h4>
            <h2>How useState works?</h2>
            <h4> UseState is actually a function also called Hook. It gives us the state variable in functional components. It takes the initial state of a function and then returns the current state value and another function, in a variable, to update the initial value. We can pass the initial value to useState function, as an argument. So, when react will start to run it will set that initial value set by us, as the first element of the array.</h4>
        </div>
    );
};

export default Theory;