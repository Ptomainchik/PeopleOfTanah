import { useEffect, useState } from "react";
import classes from "../../../../Styles/StylesKingdomInmar/Dice.module.css";
import { RulesDice } from "./RulesDice";

interface DevelopmentsProps {
    setCountLoyal: (value: any) => void;
    setCountContra: (value: any) => void;
    setCountNeutral: (value: any) => void;
    handleNextMessage: () => void;
}

export const Dice = ({setCountLoyal,
    setCountContra,
    setCountNeutral,
    handleNextMessage}: DevelopmentsProps) => {
    const [showBet, setShowBet] = useState(false);  
    const [showCheating, setShowCheating] = useState(true);
    const [showTrickery, setShowTrickery] = useState(true);
    const [buttonCheatingState, setButtonCheatingState] = useState(false);
    const [buttonBetState, setButtonBetState] = useState(false);
    const [counterBet, setCounterBet] = useState(0);    
    const [chipPlayer, setChipPlayer] = useState(10);
    const [chipOpponent, setChipOpponent] = useState(10);
    const [betPlayer, setBetPlayer] = useState(0);
    const [betOpponent, setBetOpponent] = useState(0);
    const [pointChipPlayer, setPointChipPlayer] = useState(0);
    const [pointChipOpponent, setPointChipOpponent] = useState(0);
    const [randomDice, setRandomDice] = useState([0, 0, 0, 0, 0]);
    const [randomDiceOpponent, setRandomDiceOpponent] = useState([0, 0, 0, 0, 0]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [countRound, setCountRound] = useState(0);
    const [countDice, setCountDice] = useState(0);
    const [stateDice, setStateDice] = useState(false);
    const [stateBetOpponent, setStateBetOpponent] = useState(false);
    const [stateOpponentThrow , setStateOpponentThrow] = useState(false);
    const [statePlayerThrow , setStatePlayerThrow] = useState(false);
    const [stateFinal, setStateFinal] = useState({win: false, lose: false, draw: false,});
    const [stateTime, setStateTime] = useState(true);
    const [stateCoinsButton, setStateCoinsButton] = useState(false);
    const [showButtonOpponent, setShowButtonOpponent] = useState(true);
    const [showButtonOpponentCoins, setShowButtonOpponentCoins] = useState(true);
    const [stateCalculationButton, setStateCalculationButton] = useState(false);

    const currentCountRound = countRound;
    const currentChipPlayer = chipPlayer;
    const currentChipOpponent = chipOpponent;
    const currentCounterBet = counterBet;

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if(chipOpponent === 0 && stateOpponentThrow === false && stateCalculationButton === true) {
        setCountLoyal((prev:any) => prev + 1);
        setStateFinal({win: true, lose: false, draw: false,});
    }
    else if(chipPlayer === 0 && statePlayerThrow === false && stateCalculationButton === true) {
        setCountContra((prev:any) => prev + 1);
        setStateFinal({win: false, lose: true, draw: false,});
    }
    else if(stateTime === false) {
            timer = setTimeout(() => {
            setCountNeutral((prev:any) => prev + 1);
            setStateFinal({win: false, lose: false, draw: true,});
        }, 300000);  
    }
    return () => clearTimeout(timer); 
    }, [chipOpponent, chipPlayer, stateOpponentThrow, statePlayerThrow, stateTime]);
    
    function handleBetPlayer() {
        if(chipPlayer === 0) return;
        if(chipOpponent === 0) return;
        if (betPlayer >= 3 || chipPlayer <= 0) return;
        if (betOpponent >= 3 || chipOpponent <= 0) return;
        setStateCalculationButton(false);
        if(countRound > 0 && countRound % 2 === 1){
            setButtonBetState(true);
        };
        if(countRound > 0 && countRound % 2 === 0){
            setButtonBetState(false);
        };
        setStateTime(false);
        setStatePlayerThrow(true);
        setShowBet(true);
        setChipPlayer(prev => prev - 1);
        setBetPlayer(prev => prev +1);
        setChipOpponent(prev => prev - 1);
        setBetOpponent(prev => prev + 1);
        setCounterBet(prev => prev + 1);
    };

    useEffect(() => {
        if(countRound > 0 && countRound % 2 === 0) {
            setShowButtonOpponent(true);
        }
    }, [countRound]);

    useEffect(() => {
        if(countRound > 0 && countRound % 2 === 1) {
            setStateCoinsButton(false);
            setShowButtonOpponent(false);
            setShowButtonOpponentCoins(false)

        const numberOfCalls = Math.floor(Math.random() * 3) + 1;

        for(let i = 1; i <= numberOfCalls; i++) {
            setTimeout(() => {
                handleBetPlayer();
            }, i * 1000); 
        }
        setTimeout(() => {
            setStateBetOpponent(true);
        },4000);
    }
    },[countRound]);

    useEffect(() => {
        if(stateBetOpponent === true){
            handleDice();
            setStateBetOpponent(false);
            setStateOpponentThrow(true);
        }
    },[stateBetOpponent]);

    useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stateOpponentThrow === true) {
        timer = setTimeout(() => {
            handlePickUpCoins();
        }, 1000);
    }
    return () => clearTimeout(timer);
}, [stateOpponentThrow]);

    function handleCheating() {
        setShowCheating(false);
        setButtonCheatingState(true);
    };

    function handleTrickery() {
        setShowTrickery(false);

        if(chipOpponent >= 4) {
            setChipOpponent(prevChip => prevChip - 3);
            setChipPlayer(prevChip => prevChip + 3);
        }
        else if(chipOpponent <= 3) {
            return;
        }
    };

    function handleDice() {
        setCountDice(prev => prev + 1);
        if(countRound > 0 && countRound % 2 === 0) {
            setShowButtonOpponentCoins(true);
        }
        setButtonBetState(true);
        
        if(betPlayer === 0 && betOpponent === 0) return;

        const playerDice = Array.from({length: 5}, () => rollDice());
        setRandomDice(playerDice);
        const playerPoints = playerDice.reduce((sum, num) => sum + num, 0);
        setPointChipPlayer(playerPoints);

        const opponentDice = Array.from({length: 5}, () => rollDice());
        setRandomDiceOpponent(opponentDice);
        const opponentPoints = opponentDice.reduce((sum, num) => sum + num, 0);
        setPointChipOpponent(opponentPoints);
        setStateDice(true);
    }

    function handlePickUpCoins() {
        setCountDice(0);
        setStateOpponentThrow(false);
        setStatePlayerThrow(false);
        setCounterBet(0);
        const timer = setTimeout(() => {
            if(pointChipPlayer > pointChipOpponent && buttonCheatingState === false){
            setChipPlayer(prev => prev + betPlayer + betOpponent);
        } 
        else if(pointChipPlayer < pointChipOpponent && buttonCheatingState === false){
            setChipOpponent(prev => prev + betPlayer + betOpponent);
        } 
        else if(pointChipPlayer === pointChipOpponent && buttonCheatingState === false){
            setChipPlayer(prev => prev + betPlayer);
            setChipOpponent(prev => prev + betOpponent);
        }
        else if(buttonCheatingState === true) {
            setChipPlayer(prev => prev + betPlayer + betOpponent);
            setButtonCheatingState(false);
        }
        },1000);

        setShowBet(false);
        setBetPlayer(0);
        setBetOpponent(0);
        setStateDice(true);
        setCountRound(prev => prev + 1);
        setStateCoinsButton(false);
        setStateCalculationButton(true);
       
        return () => clearTimeout(timer);
    }
  
    return (
        <div className={classes.miniGamePage}>
            <RulesDice setButtonDisabled={setButtonDisabled}/>
           
                <div className={classes.dicePlayerField}>
                    {randomDice.map((dice, index) => {
                        let diceClass = classes.dice;
                        switch(dice) {
                            case 1: diceClass = classes.dice1; break;
                            case 2: diceClass = classes.dice2; break;
                            case 3: diceClass = classes.dice3; break;
                            case 4: diceClass = classes.dice4; break;
                            case 5: diceClass = classes.dice5; break;
                            case 6: diceClass = classes.dice6; break;
                            default: diceClass = classes.dice;
                        }
                        
                        return (
                            <div key={`player-${index}`} className={diceClass} 
                                 style={{position: "absolute", top: "50%", left: `${7 + 20 * index}%`, transform: "translateY(-50%)"}}>
                            </div>
                        );
                    })}
                </div>

            <div className={classes.pointDicePlayerField}><h1>Кости игрока: {pointChipPlayer}</h1></div>

            {showBet && <div className={classes.betPlayer}><h1>{currentCounterBet}</h1></div>}
                    
            {showCheating &&  <button className={classes.buttonCheating} onClick={handleCheating} disabled={buttonBetState === true || buttonDisabled === true }>Шулерство</button>}
            {showTrickery && <button className={classes.buttonTrickery} onClick={handleTrickery} disabled={buttonBetState === true || buttonDisabled === true}>Хитрость</button> }

            <div className={classes.chipPlayerField}>
                <button className={classes.chipPlayer} onClick={handleBetPlayer} disabled={betPlayer === 3 || chipPlayer <= 0 || buttonDisabled === true || currentCountRound % 1 === 1 } title="Монеты игрока"></button>
                <h1>Монеты игрока: {currentChipPlayer}</h1>
            </div>
            
            {showButtonOpponent && <button className={classes.diceButton} onClick={handleDice} disabled={betPlayer === 0 || betOpponent === 0 || buttonDisabled === true || countDice === 1}>Бросить кубики</button>}
            
            {showButtonOpponentCoins && <button className={classes.pickUpCoinsButton} onClick={handlePickUpCoins} disabled={stateDice === false && stateCoinsButton === false}>Расчёт</button>}

            <div className={classes.chipOpponentField}>
                <button className={classes.chipOpponent} disabled={betOpponent === 3 || chipOpponent <= 0 || buttonDisabled === true} title="Монеты оппонента"></button>
                <h1>Монеты оппонента: {currentChipOpponent}</h1>
            </div>

            {showBet && <div className={classes.betOpponent}><h1>{currentCounterBet}</h1> </div>}

            <div className={classes.pointDiceOpponentField}><h1>Кости оппонента: {pointChipOpponent}</h1></div>

                <div className={classes.diceOpponentField}>
                    {randomDiceOpponent.map((dice, index) => {
                        let diceClass = classes.dice;
                        switch(dice) {
                            case 1: diceClass = classes.dice1; break;
                            case 2: diceClass = classes.dice2; break;
                            case 3: diceClass = classes.dice3; break;
                            case 4: diceClass = classes.dice4; break;
                            case 5: diceClass = classes.dice5; break;
                            case 6: diceClass = classes.dice6; break;
                            default: diceClass = classes.dice;
                        }
                        
                        return (
                            <div key={`opponent-${index}`} className={diceClass} 
                                 style={{position: "absolute", top: "50%", left: `${7 + 20 * index}%`, transform: "translateY(-50%)"}}>
                            </div>
                        );
                    })}
                </div>

                {stateFinal.win && <div className={classes.finalModal}>
                    <h3>
                        Твоя взяла. 
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}

                {stateFinal.lose && <div className={classes.finalModal}>
                    <h3>
                        Ты проиграл.
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}

                {stateFinal.draw && <div className={classes.finalModal}>
                    <h3>
                        Игру прервал стражник.
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}
          
        </div>
    )
}