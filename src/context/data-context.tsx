import React, {useReducer, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";

export const DataContext = React.createContext({
    num: -1 as number,
    randNum: Math.floor(Math.random()*101) as number,
    redirects: false as boolean,
    randNumList: [] as number[],
    click: ():void => {},
    change: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>):void => {},
    backToHome: ():void => {},
    dispatch: (action: {type: string, randNum: number, randNumbersList: number[]}):any => {},
    RNDispatch: (action: {type: string, randNum: number}):any => {},
});

const RandomNumbersListReducer = (randNumbersList: number[], action: {type: string, randNum: number, randNumbersList: number[]}): any => {
    switch (action.type) {
        case 'SET': return action.randNumbersList;
        case 'ADD': return [...randNumbersList, action.randNum];
        default: throw new Error("Error with random numbers list!");
    }
}

const  RandomNumberReducer = (randomNumber: number, action: {type: string, randNum: number}): any => {
    switch (action.type) {
        case 'SET': return action.randNum;
        default: throw new Error("Error with random number!");
    }
}

const DataContextProvider: React.FC = props => {
    const [randomNumbersList, dispatch] = useReducer(RandomNumbersListReducer, []);
    const [randomNumber, RNDispatch] = useReducer(RandomNumberReducer, Math.floor(Math.random()*101));

    const [number, setNumber] = useState<number>(-1);
    const [isRedi, setIsRedi] = useState<boolean>(false);

    let history = useHistory();

    const clickHandler = () => {
        setIsRedi(true);
        history.push('/agree');
    };

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 100) {
            setNumber(parseInt(e.target.value) || number)
        } else {
            window.alert("Please Enter A Number from 0 to 100");
        }
    };

    const backToHomeHandler = () => {
        history.goBack();
        dispatch({
            type: 'SET',
            randNum: Math.floor(Math.random()*101),
            randNumbersList: []
        });
        setIsRedi(false);
    };

    return (
        <DataContext.Provider
            value={{
                click: clickHandler,
                change: changeHandler,
                backToHome: backToHomeHandler,
                num: number,
                randNum: randomNumber,
                redirects: isRedi,
                randNumList: randomNumbersList,
                dispatch: dispatch,
                RNDispatch: RNDispatch
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default withRouter(DataContextProvider);