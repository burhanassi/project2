import React, {useContext} from 'react';
import classes from './Style.module.css';
import NumbersList from "./NumbersList";
import {Button, Typography} from "@material-ui/core";
import {DataContext} from "../context/data-context";

const Summary: React.FC = () => {
    const dataContext = useContext(DataContext);

    return <div className={classes.SubmitFormControl}>
        <div className={classes.SummaryCircle}>
            <Typography className={classes.Itemm} variant="h5" gutterBottom>
                Your Number:
            </Typography>
            <Typography className={classes.Itemm} variant="h6" gutterBottom>
                {dataContext.num}
            </Typography>
        </div>
        <NumbersList/>
        <Button onClick={dataContext.backToHome} variant={"contained"} color={"secondary"}>Back to home page</Button>
    </div>
};

export default Summary;