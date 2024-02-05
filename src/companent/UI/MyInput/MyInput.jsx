import React from 'react';
import classes from "./MyInput.module.css";
const MyInput = (props) => {
    return (
        <div>
            <input className={classes.myInput} {...props} type="text"/>
        </div>
    );
};

export default MyInput;