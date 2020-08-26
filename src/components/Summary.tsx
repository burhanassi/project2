import React from 'react';
import classes from './Style.module.css';
import NumbersList from "./NumbersList";
import {Typography} from "@material-ui/core";

interface Props{
    items: number[];
    num?: number;
}

const Summary: React.FC<Props> = props => {
    return <div className={classes.SubmitFormControl}>
        <div className={classes.SummaryCircle}>
            <Typography className={classes.Item} variant="h6" gutterBottom>
                Your Number:
            </Typography>
            <Typography className={classes.Item} variant="h6" gutterBottom>
                {props.num}
            </Typography>
        </div>
        <NumbersList items={props.items}/>
    </div>
};

export default Summary;