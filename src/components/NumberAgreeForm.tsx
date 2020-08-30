import React, {useContext, useState} from "react";
import {Typography} from "@material-ui/core";
import NumbersList from "./NumbersList";
import {Redirect} from 'react-router-dom';
import classes from "./Style.module.css";
import cx from "classnames";
import {DataContext} from "../context/data-context";

const NumberAgreeForm: React.FC = () => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);
    const dataContext = useContext(DataContext);
    const plusButtonHandler = () => {
        if(dataContext.randNum > min){
            setMin(dataContext.randNum+1);
        }
        console.log(min, max);
        const randomNumber = Math.floor(Math.random() * (max - dataContext.randNum + 1) + dataContext.randNum);
        dataContext.RNDispatch({type: 'SET', randNum: randomNumber});
        dataContext.dispatch({
            type: 'ADD',
            randNum: randomNumber,
            randNumbersList: [...dataContext.randNumList, dataContext.randNum]
        });
    };
    const minusButtonHandler = () => {
        if(dataContext.randNum < max){
            setMax(dataContext.randNum-1);
        }
        console.log(min, max);
        const randomNumber = Math.floor(Math.random() * (dataContext.randNum - min + 1) + min);
        dataContext.RNDispatch({type: 'SET', randNum: randomNumber});
        dataContext.dispatch({
            type: 'ADD',
            randNum: randomNumber,
            randNumbersList: [...dataContext.randNumList, dataContext.randNum]
        });
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