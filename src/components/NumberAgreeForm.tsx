import React, {useContext} from "react";
import {Typography} from "@material-ui/core";
import NumbersList from "./NumbersList";
import {Redirect} from 'react-router-dom';
import classes from "./Style.module.css";
import cx from "classnames";
import {DataContext} from "../context/data-context";

const NumberAgreeForm: React.FC = () => {
    const dataContext = useContext(DataContext);

    const plusButtonHandler = () => {
        dataContext.addHandle();
        dataContext.button();
    };
    const minusButtonHandler = () => {
        dataContext.removeHandle();
        dataContext.button();
    };

    return (
        <div>
            <div className={classes.SubmitFormControl}>
                <Typography variant="h5" gutterBottom>
                    <p>This is a random number.</p>
                    <p>Your number is less or more?</p>
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {dataContext.randNum}
                </Typography>
                <div>
                    <button className={cx(classes.Button,classes.Button1)} onClick={() => plusButtonHandler()}>
                        +
                    </button>
                    <button className={cx(classes.Button,classes.Button2)} onClick={() => minusButtonHandler()}>
                        -
                    </button>
                </div>
            </div>
            <NumbersList/>
            {dataContext.randNum === dataContext.num && <Redirect to={'/summary'}/>}
        </div>
    );
};

export default NumberAgreeForm;