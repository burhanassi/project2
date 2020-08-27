import React, {useContext} from "react";
import classes from "./Style.module.css";
import {Typography} from "@material-ui/core";
import {DataContext} from "../context/data-context"

const NumbersList: React.FC = () => {
    const dataContext = useContext(DataContext);

    return <div className={classes.SubmitFormControl}>
        <Typography className={classes.Item} variant="h6" gutterBottom>
            This is the random numbers list:
        </Typography>
        <ul>
            {dataContext.randNumList.map(number => (
                <li key={number}>{number}</li> // try to solve: key not always unique
            ))}
        </ul>
    </div>
};

export default NumbersList;