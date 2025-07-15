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
    const [pointChipPlayer, setPointChipPlayer]:any = useState(0);
    const [pointChipOpponent, setPointChipOpponent]:any = useState(0);
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
    const [showDicePoints, setShowDicePoints] = useState(false);
    const [showChipPlayer, setShowChipPlayer] = useState(true);
    const [showChipOpponent, setShowChipOpponent] = useState(true);

    const currentCountRound = countRound;
    const currentChipPlayer = chipPlayer;
    const currentChipOpponent = chipOpponent;
    const currentCounterBet = counterBet;

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    useEffect(() => {
        if(currentChipPlayer <= 0){
            setShowChipPlayer(false);
        }
        else if(currentChipPlayer > 0){
            setShowChipPlayer(true);
        }
    }, [currentChipPlayer]);

    useEffect(() => {
        if(currentChipOpponent <= 0){
            setShowChipOpponent(false);
        }
        else if(currentChipOpponent > 0){
            setShowChipOpponent(true);
        }
    }, [currentChipOpponent]);

    useEffect(() => {
        if(chipPlayer >= 20 && stateCalculationButton === true) {
        setCountLoyal((prev:any) => prev + 1);
        setStateFinal({win: true, lose: false, draw: false,});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chipPlayer, stateOpponentThrow, stateCalculationButton]);

    useEffect(() => {
        if(chipOpponent >= 20 && stateCalculationButton === true) {
        setCountContra((prev:any) => prev + 1);
        setStateFinal({win: false, lose: true, draw: false,});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chipOpponent, statePlayerThrow, stateCalculationButton])

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if(stateTime === false) {
            timer = setTimeout(() => {
            setCountNeutral((prev:any) => prev + 1);
            setStateFinal({win: false, lose: false, draw: true,});
        }, 90000);  
    }
    return () => clearTimeout(timer); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateTime]);
    
    function handleBetPlayer() {
        if(chipPlayer === 0) return;
        if(chipOpponent === 0) return;
        if (betPlayer >= 3 && chipPlayer <= 0) return;
        if (betOpponent >= 3 && chipOpponent <= 0) return;
        setStateCalculationButton(false);
        if(countRound > 0 && countRound % 2 === 1){
            setButtonBetState(true);
        };
        if(countRound > 0 && countRound % 2 === 0){
            setButtonBetState(false);
        };
        setShowDicePoints(false);
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

        if(chipPlayer > 3){
            for(let i = 1; i <= numberOfCalls; i++) {
                    handleBetPlayer();
        }
        }
        else if(chipPlayer === 3){
                    handleBetPlayer();
                    handleBetPlayer();
                    handleBetPlayer();
        }
        else if(chipPlayer === 2){
                    handleBetPlayer();
                    handleBetPlayer();
        }
        else if(chipPlayer === 1){
                    handleBetPlayer();
        }

        setTimeout(() => {
            setStateBetOpponent(true);
        },2000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[countRound]);

    useEffect(() => {
        if(stateBetOpponent === true){
            handleDice();
            setStateBetOpponent(false);
            setStateOpponentThrow(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[stateBetOpponent]);

    useEffect(() => {
    let timer: NodeJS.Timeout;
    if (stateOpponentThrow === true) {
        timer = setTimeout(() => {
            handlePickUpCoins();
        }, 1000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setShowDicePoints(true);
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

            <div className={classes.pointDicePlayerField}><h1>Кости игрока</h1></div>
            <div className={classes.sumPointsPlayer}><h1>{showDicePoints && `${pointChipPlayer}`}</h1></div>

            {showBet && <div className={classes.betPlayer}><h1>{currentCounterBet}</h1></div>}
                    
            {showCheating &&  <button className={classes.buttonCheating} onClick={handleCheating} disabled={buttonBetState === true || buttonDisabled === true }>Шулерство</button>}
            {showTrickery && <button className={classes.buttonTrickery} onClick={handleTrickery} disabled={buttonBetState === true || buttonDisabled === true}>Хитрость</button> }

            <div className={classes.chipPlayerField}>
                <button className={classes.chipPlayer} onClick={handleBetPlayer} disabled={betPlayer === 3 || chipPlayer <= 0 || buttonDisabled === true || currentCountRound % 2 === 1 } title="Монеты игрока"></button>
                {showChipPlayer && <h1>Монеты игрока: {currentChipPlayer}</h1>}
            </div>
            
            {showButtonOpponent && <button className={classes.diceButton} onClick={handleDice} disabled={betPlayer === 0 || betOpponent === 0 || buttonDisabled === true || countDice === 1}>Бросить кубики</button>}
            
            {showButtonOpponentCoins && <button className={classes.pickUpCoinsButton} onClick={handlePickUpCoins} disabled={stateDice === false && stateCoinsButton === false}>Расчёт</button>}

            <div className={classes.chipOpponentField}>
                <button className={classes.chipOpponent} disabled={betOpponent === 3 || chipOpponent <= 0 || buttonDisabled === true} title="Монеты оппонента"></button>
                {showChipOpponent && <h1>Монеты оппонента: {currentChipOpponent}</h1>}
            </div>

            {showBet && <div className={classes.betOpponent}><h1>{currentCounterBet}</h1> </div>}

            <div className={classes.pointDiceOpponentField}><h1>Кости оппонента</h1></div>
            <div className={classes.sumPointsOpponent}><h1>{showDicePoints && `${pointChipOpponent}`}</h1></div>

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
                        Вы победили. Новичкам везёт, - сказал караванщик. 
                        Как вдруг, будто из ниоткуда, перед ними, заслоняя солнце, появился стражник. Нахмурив брови, он произнёс: - Так-так-так. 
                        Азартными играми балуетесь?
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}

                {stateFinal.lose && <div className={classes.finalModal}>
                    <h3>
                        Вы проиграли. Ничего, такое бывает, не расстраивайтесь, - с ехидной улыбкой промолвил караванщик. 
                        Как неожиданно из-за угла к ним подошел стражник и уставился на разбросанные кости на пороге дома. 
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}

                {stateFinal.draw && <div className={classes.finalModal}>
                    <h3>
                        Прекратите это немедленно! - жёстким тоном потребовал внезапно появившийся стражник.
                    </h3>
                    <p onClick={handleNextMessage}>---Продолжить---</p>
                </div>}
          
        </div>
    )
}