import React from 'react';
import classes from './Button.css';

const button = (props) => (
    <button 
        //Use join to create a class from multiple class types with a space in between
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick = {props.clicked}>{props.children}</button>
);

export default button;