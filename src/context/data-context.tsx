import React, {useState} from "react";

export const DataContext = React.createContext({
    num: -1 as number,
    randNum: Math.floor(Math.random()*102) as number,
    redirects: false as boolean,
    randNumList: [] as number[],
    button: (min: number, max: number):void => {},
    click: ():void => {},
    change: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>):void => {},
    backToHome: ():void => {}
});

const DataContextProvider: React.FC = props => {
    const [number, setNumber] = useState<number>(-1);
    const [RandomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random()*102));
    const [randomNumbersList, setRandomNumbersList] = useState<number[]>([]);
    const [isRedi, setIsRedi] = useState<boolean>(false);

    const buttonHandler = (min: number, max: number) => {
        setRandomNumbersList(prevList => [...prevList, RandomNumber]);
        setRandomNumber(Math.floor(Math.random() * (max - min) + min));
    };

    const clickHandler = () => {
        setIsRedi(true);
        console.log(number);
    };

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 100) {
            setNumber(parseInt(e.target.value) || number)
        } else {
            window.alert("Please Enter A Number from 0 to 100");
        }
    };

    const backToHomeHandler = () => {
        setRandomNumbersList([]);
        setIsRedi(false);
    };

    return (
        <DataContext.Provider
            value={{button: buttonHandler, click: clickHandler, change: changeHandler, backToHome: backToHomeHandler, num: number, randNum: RandomNumber, redirects: isRedi, randNumList: randomNumbersList}}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;