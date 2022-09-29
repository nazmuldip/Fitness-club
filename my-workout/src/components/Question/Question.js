import './Question.css';
import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>Question</h1>
            <h3>How React works?</h3>
            <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application</p>
            <h3>Difference between props and state</h3>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>
            <h3>USeEffect uses</h3>
            <p>Ans: Basically UseEffect use many kind of things <br /> 1.updating the DOM,  and timers <br /> 2.runs on every render <br />3.fetching data</p>
        </div>
    );
};

export default Question;
