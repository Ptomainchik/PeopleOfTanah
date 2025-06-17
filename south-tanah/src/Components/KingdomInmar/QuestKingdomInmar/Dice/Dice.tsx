import { useState } from "react";
import classes from "../../../../Styles/StylesKingdomInmar/Dice.module.css";
import { RulesDice } from "./RulesDice";

export const Dice = () => {
    const [showChip, setShowChip] = useState(false);
    const [showBet, setShowBet] = useState(false);  
    const [showBet1, setShowBet1] = useState(false);   
    const [showBet2, setShowBet2] = useState(false);    
    const [showBet3, setShowBet3] = useState(false);
    const [showCheating, setShowCheating] = useState(true);
    const [showTrickery, setShowTrickery] = useState(true);
    const [showModalRules, setShowModalRules] = useState(false);
    const [buttonCheatingState, setButtonCheatingState] = useState(false);
    const [buttonBetState, setButtonBetState] = useState(false);
    const [counterBet, setCounterBet] = useState(1);    
    const [chipPlayer, setChipPlayer] = useState(20);
    const [chipOpponent, setChipOpponent] = useState(20);
    const [betPlayer, setBetPlayer] = useState(0);
    const [betOpponent, setBetOpponent] = useState(0);
    const [pointChipPlayer, setPointChipPlayer] = useState(0);
    const [pointChipOpponent, setPointChipOpponent] = useState(0);
    const [randomDice, setRandomDice] = useState([0, 0, 0, 0, 0]);
    const [randomDiceOpponent, setRandomDiceOpponent] = useState([0, 0, 0, 0, 0]);
    const [animationKey, setAnimationKey] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    function handleBetPlayer() {
        if (betPlayer >= 3 || chipPlayer <= 0) return;

        setButtonBetState(true);
        setShowBet(true);
        setChipPlayer(chipPlayer - 1);
        setBetPlayer(betPlayer + 1);
        handleBetOpponent()
        setAnimationKey(prevKey => prevKey + 1);
        setCounterBet(counterBet + 1);
        if (counterBet === 1) {
            setTimeout(() => {
                setShowBet1(true);
            },1000);
        }
        else if (counterBet === 2) {
            setTimeout(() => {
                setShowBet2(true);
            },1000);
        }
        else if (counterBet === 3) {
            setTimeout(() => {
                setShowBet3(true);
            },1000);
        }
        else {
            setShowBet1(false);
            setShowBet2(false);
            setShowBet3(false);
        }
    };

    function handleBetOpponent() {
        if (betOpponent >= 3 || chipOpponent <= 0) return;

        setChipOpponent(chipOpponent - 1);
        setBetOpponent(betOpponent + 1);
    };

    function handleCheating() {
        setShowCheating(false);
        setButtonCheatingState(true);
    }

    function handleTrickery() {
        setShowTrickery(false);

        if (chipOpponent >= 5) {
            setChipOpponent(prevChip => prevChip -3);
            setChipPlayer(prevChip => prevChip +3);
        }
        else if (chipOpponent === 1) {
            return;
        }
        else {
            setChipOpponent(prevChip => prevChip -1);
            setChipPlayer(prevChip => prevChip +1);
        }
    }

    async function handleDice() {
        if (betPlayer === 0 && betOpponent === 0) return;

        setButtonBetState(false);

        setTimeout(() => {
                setShowBet1(false);
                setShowBet2(false);
                setShowBet3(false);
        },1000);

        setCounterBet(1);

        const playerDice = Array.from({length: 5}, () => rollDice());
        setRandomDice(playerDice);
        const playerPoints = playerDice.reduce((sum, num) => sum + num, 0);
        setPointChipPlayer(playerPoints);

        const opponentDice = Array.from({length: 5}, () => rollDice());
        setRandomDiceOpponent(opponentDice);
        const opponentPoints = opponentDice.reduce((sum, num) => sum + num, 0);
        setPointChipOpponent(opponentPoints);

        setShowChip(true);

        setTimeout(() => {
            if (playerPoints > opponentPoints && buttonCheatingState === false){
            setChipPlayer(chipPlayer + betPlayer + betOpponent);
        } 
        else if (playerPoints < opponentPoints && buttonCheatingState === false){
            setChipOpponent(chipOpponent + betPlayer + betOpponent);
        } 
        else if (playerPoints === opponentPoints && buttonCheatingState === false){
            setChipPlayer(chipPlayer + betPlayer);
            setChipOpponent(chipOpponent + betOpponent);
        }
        else if (buttonCheatingState === true) {
            setChipPlayer(chipPlayer + betPlayer + betOpponent);
            setButtonCheatingState(false);
        }
        },2000)
      
        setShowBet(false);
        setBetPlayer(0);
        setBetOpponent(0);
    }

    function handleOpenModalRules() {
        setShowModalRules(true);
    }

    function handleCloseModalRules() {
        setShowModalRules(false);
    }
  
    return (
        <div className={classes.miniGamePage}>
            <RulesDice setButtonDisabled={setButtonDisabled}/>
            {showChip && (
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
            )}

            <div className={classes.pointDicePlayerField}><h1>Очки игрока: {pointChipPlayer}</h1></div>

            {showBet && <div className={classes.betPlayer} key={`bet-player-${animationKey}`}></div>}

            {showCheating &&  <button className={classes.buttonCheating} onClick={handleCheating} disabled={buttonBetState === false || buttonDisabled === true}>Шулерство</button>}
            {showTrickery && <button className={classes.buttonTrickery} onClick={handleTrickery} disabled={buttonBetState === true || buttonDisabled === true}>Хитрость</button> }

            <button className={classes.buttonRules} onClick={handleOpenModalRules} disabled={buttonDisabled === true}>Правила</button>
            {showModalRules && <div className={classes.modalRules}> 
                <p className={classes.rules1}>Шулерство - победа в следующем розигрыше кубиков.</p>
                <p className={classes.rules2}>Хитрость - хитростью выманить монеты у оппонента.</p>
                <p className={classes.rules3}>Общие правила игры - кидай кубы а дальше будет видно.</p>
                <button className={classes.closeButton} onClick={handleCloseModalRules}>Закрыть</button>
            </div>}

            {showBet1 && <div className={classes.betPlayer1}></div> }
            {showBet2 && <div className={classes.betPlayer2}></div> }
            {showBet3 && <div className={classes.betPlayer3}></div> }

            <div className={classes.chipPlayerField}>
                <button className={classes.chipPlayer} onClick={handleBetPlayer} disabled={betPlayer === 3 || chipPlayer <= 0 || buttonDisabled === true} title="Монеты игрока"></button>
                <h1>Монеты игрока: {chipPlayer}</h1>
            </div>
            
            <button className={classes.diceButton} onClick={handleDice} disabled={betPlayer === 0 || betOpponent === 0 || buttonDisabled === true}>Бросить кубики</button>

            <div className={classes.chipOpponentField}>
                <button className={classes.chipOpponent} disabled={betOpponent === 3 || chipOpponent <= 0 || buttonDisabled === true} title="Монеты оппонента"></button>
                <h1>Монеты оппонента: {chipOpponent}</h1>
            </div>
            

            {showBet && <div className={classes.betOpponent} key={`bet-opponent-${animationKey}`}></div>}

            {showBet1 && <div className={classes.betOpponent1}></div> }
            {showBet2 && <div className={classes.betOpponent2}></div> }
            {showBet3 && <div className={classes.betOpponent3}></div> }

            <div className={classes.pointDiceOpponentField}><h1>Очки оппонента: {pointChipOpponent}</h1></div>

            {showChip && (
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
            )}
        </div>
    )
}