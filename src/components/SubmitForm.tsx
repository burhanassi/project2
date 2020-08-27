import React, {useContext} from "react";
import classes from "./Style.module.css";
import {Button, TextField, Typography} from "@material-ui/core";
import {DataContext} from "../context/data-context";

interface Props {
    clicked: () => void;
}



const SubmitForm: React.FC<Props> = props => {
    const dataContext = useContext(DataContext);

    const clickHandler = () => {
        dataContext.click();
    };

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dataContext.change(event);
    };

    return (<div className={classes.SubmitFormControl}>
        <div className={classes.SubmitForm} >
            <Typography className={classes.Item} variant="h4" gutterBottom>
                Enter a number from 0 to 100
            </Typography>
            <TextField className={classes.Item} onChange={(e) => changeHandler(e)} name={"number"} type={"number"} id="name" label="Your Number" variant="outlined" />
            <Button className={classes.Item} onClick={clickHandler} variant="contained" color="primary">
                Submit
            </Button>
        </div>
    </div>);
};

export default SubmitForm;