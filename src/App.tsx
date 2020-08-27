import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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

    const clickHandler = (event: React.FormEvent) => {
        window.history.pushState(null, '','/agree');
        console.log(number);
        setNumber(-1);
    };

    const SubmitForm = (<div className={classes.SubmitFormControl}>
        <div className={classes.SubmitForm} >
            <Typography className={classes.Item} variant="h4" gutterBottom>
                Enter a number from 0 to 100
            </Typography>
            <TextField className={classes.Item} onChange={(e) => {
                if(parseInt(e.target.value) >= 0 && parseInt(e.target.value)  <= 100){
                    setNumber(parseInt(e.target.value) || number)
                }else {
                    window.alert("Please Enter A Number from 0 to 100");
                }
            }} name={"number"} type={"number"} id="name" label="Your Number" variant="outlined" />
            <Button className={classes.Item} onClick={clickHandler} variant="contained" color="primary">
                Submit
            </Button>
        </div>
    </div>);

    let routes = <Switch>
        <Route exact path={'/summary'} render={() => <Summary items={numbersList} num={number}/>}/>
        <Route exact path={'/agree'} render={() => <NumberAgreeForm num={number} randNum={randomNum} numbersList={numbersList} buttonHandler={buttonHandler}/>}/>
        <Route exact path={'/'} render={() => SubmitForm}/>
    </Switch>

  return (
    <div>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
