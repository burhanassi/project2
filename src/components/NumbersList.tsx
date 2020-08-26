import React from "react";
import classes from "./Style.module.css";
import {Typography} from "@material-ui/core";

interface ListProps {
    items: number[]
}

const NumbersList: React.FC<ListProps> = props => {
    return <div className={classes.SubmitFormControl}>
        <Typography className={classes.Item} variant="h6" gutterBottom>
            This is the random numbers list:
        </Typography>
        <ul>
            {props.items.map(number => (
                <li key={number}>{number}</li>
            ))}
        </ul>
    </div>
};

export default NumbersList;