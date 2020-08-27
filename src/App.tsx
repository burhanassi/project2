import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NumberAgreeForm from "./components/NumberAgreeForm";
import Summary from "./components/Summary";
import classes from "./components/Style.module.css";
import {Button, TextField, Typography} from "@material-ui/core";
import {DataContext} from "./context/data-context";

function App() {
    const dataContext = useContext(DataContext);

    const clickHandler = () => {
        dataContext.click();
    };

    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dataContext.change(event);
    };

    const SubmitForm = (<div className={classes.SubmitFormControl}>
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

    let routes = <Switch>
        <Route exact path={'/summary'} component={Summary}/>
        <Route exact path={'/agree'} component={NumberAgreeForm}/>
        <Route exact path={'/'} render={() => SubmitForm}/>
    </Switch>

  return (
    <div>
        <BrowserRouter>
            {dataContext.redirects && <Redirect to={'/agree'} from={'/'}/>}
            {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
