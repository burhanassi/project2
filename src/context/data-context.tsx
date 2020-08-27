import React, {useState} from "react";

export const DataContext = React.createContext({
    num: -1 as number,
    randNum: Math.floor(Math.random()*101) as number,
    redirects: false as boolean,
    randNumList: [] as number[],
    button: ():void => {},
    click: ():void => {},
    change: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>):void => {},
    backToHome: ():void => {},
    addHandle: ():void => {},
    removeHandle: ():void => {}
});

const DataContextProvider: React.FC = props => {
    const [number, setNumber] = useState<number>(-1);
    const [RandomNumber, setRandomNumber] = useState<number>(Math.floor(Math.random()*102));
    const [randomNumbersList, setRandomNumbersList] = useState<number[]>([]);
    const [isRedi, setIsRedi] = useState<boolean>(false);

    const [add, setAdd] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);

    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);

    const buttonHandler = () => {
        setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
        if(add){
            setMin(RandomNumber);
        }
        if(remove){
            setMax(RandomNumber);
        }
        setRandomNumbersList(prevList => [...prevList, RandomNumber]);
    };

    const addHandle = () => {
        setAdd(true);
        setRemove(false);
    }

    const removeHandle = () => {
        setRemove(true);
        setAdd(false);
    }

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
            value={{button: buttonHandler,
                click: clickHandler,
                change: changeHandler,
                backToHome: backToHomeHandler,
                addHandle: addHandle,
                removeHandle: removeHandle,
                num: number,
                randNum: RandomNumber,
                redirects: isRedi,
                randNumList: randomNumbersList
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;