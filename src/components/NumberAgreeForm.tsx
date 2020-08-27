import React, {useContext} from "react";
import {Typography} from "@material-ui/core";
import NumbersList from "./NumbersList";
import {Redirect} from 'react-router-dom';
import classes from "./Style.module.css";
import cx from "classnames";
import {DataContext} from "../context/data-context";

const NumberAgreeForm: React.FC = () => {
    const dataContext = useContext(DataContext);

    const buttonHandler = (min: number, max: number) => {
        dataContext.button(min, max);
    };

    return (
        <div>
            <div className={classes.SubmitFormControl}>
                <Typography variant="h5" gutterBottom>
                    This is a random number.
                    Your number is less or more?
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {dataContext.randNum}
                </Typography>
                <div>
                    <button className={cx(classes.Button,classes.Button1)} onClick={() => buttonHandler(dataContext.randNum,102)}>
                        +
                    </button>
                    <button className={cx(classes.Button,classes.Button2)} onClick={() => buttonHandler(0,dataContext.randNum)}>
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