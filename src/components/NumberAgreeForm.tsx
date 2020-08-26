import React from "react";
import {Typography} from "@material-ui/core";
import NumbersList from "./NumbersList";
import {Redirect} from 'react-router-dom';
import classes from "./Style.module.css";
import cx from "classnames";

interface Props {
    num?: number;
    randNum: number;
    numbersList: number[];
    buttonHandler: (min: number, max: number) => void;
}

const NumberAgreeForm: React.FC<Props> = props => {


    return (
        <div>
            <div className={classes.SubmitFormControl}>
                <Typography variant="h5" gutterBottom>
                    This is a random number.
                    Your number is less or more?
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {props.randNum}
                </Typography>
                <div>
                    <button className={cx(classes.Button,classes.Button1)} onClick={() => props.buttonHandler(props.randNum,100)}>
                        +
                    </button>
                    <button className={cx(classes.Button,classes.Button2)} onClick={() => props.buttonHandler(0,props.randNum)}>
                        -
                    </button>
                </div>
            </div>
            <NumbersList items={props.numbersList}/>
            {props.randNum === props.num && <Redirect to={'/summary'}/>}
        </div>
    );
};

export default NumberAgreeForm;