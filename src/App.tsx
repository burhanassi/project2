import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import NumberAgreeForm from "./components/NumberAgreeForm";
import Summary from "./components/Summary";
import classes from "./components/Style.module.css";
import {Button, TextField, Typography} from "@material-ui/core";


function App() {
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random()*100));
    const [numbersList, setNumbersList] = useState<number[]>([]);

    const [number, setNumber] = useState(-1);

    const buttonHandler = (min: number, max: number) => {
        setNumbersList(prevList => [...prevList, randomNum]);
        setRandomNum(Math.floor(Math.random() * (max - min) + min));
    };

    let redirects = null;

    const submitHandler = (event: React.FormEvent) => {
        redirects = <Redirect to={'/agree'} from={'/'}/>;
        console.log(number);
    };

    const SubmitForm = (<div className={classes.SubmitFormControl}>
        <form onSubmit={submitHandler} className={classes.SubmitForm} >
            <Typography className={classes.Item} variant="h4" gutterBottom>
                Enter a number from 0 to 100
            </Typography>
            <TextField className={classes.Item} onChange={(e) => setNumber(parseInt(e.target.value) || number)} name={"number"} type={"number"} id="name" label="Your Number" variant="outlined" />
            <Button onClick={() => <Redirect to={'/agree'}/>} className={classes.Item} type={"submit"} variant="contained" color="primary">
                Submit
            </Button>
        </form>
    </div>);

    let routes = <Switch>
        <Route exact path={'/'} render={() => SubmitForm}/>
        <Route exact path={'/agree'} render={() => <NumberAgreeForm num={number} randNum={randomNum} numbersList={numbersList} buttonHandler={buttonHandler}/>}/>
        <Route exact path={'/summary'} render={() => <Summary items={numbersList} num={number}/>}/>
    </Switch>

  return (
    <div>
        <BrowserRouter>
            {routes}
            {redirects}
        </BrowserRouter>
    </div>
  );
}

export default App;
