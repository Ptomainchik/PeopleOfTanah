import { useState } from "react";
import classes from "../../../Styles/StylesConfederationOfTribes/Quest.module.css";

export const Dice = () => {
    const [showChip, setShowChip] = useState(false);
    const [chipPlayer, setChipPlayer] = useState(20);
    const [chipOpponent, setChipOpponent] = useState(20);
    const [betPlayer, setBetPlayer] = useState(0);
    const [betOpponent, setBetOpponent] = useState(0);
    const [pointChipPlayer, setPointChipPlayer] = useState(0);
    const [pointChipOpponent, setPointChipOpponent] = useState(0);
    const [randomDice, setRandomDice] = useState([0, 0, 0, 0, 0]);
    const [randomDiceOpponent, setRandomDiceOpponent] = useState([0, 0, 0, 0, 0]);

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    function handleBetPlayer() {
        if (betPlayer >= 3 || chipPlayer <= 0) return;
        setChipPlayer(chipPlayer - 1);
        setBetPlayer(betPlayer + 1);
        handleBetOpponent()
    };

    function handleBetOpponent() {
        if (betOpponent >= 3 || chipOpponent <= 0) return;
        setChipOpponent(chipOpponent - 1);
        setBetOpponent(betOpponent + 1);
    };

    async function handleDice() {
        if (betPlayer === 0 && betOpponent === 0) return;

        const playerDice = Array.from({length: 5}, () => rollDice());
        setRandomDice(playerDice);
        const playerPoints = playerDice.reduce((sum, num) => sum + num, 0);
        setPointChipPlayer(playerPoints);

        const opponentDice = Array.from({length: 5}, () => rollDice());
        setRandomDiceOpponent(opponentDice);
        const opponentPoints = opponentDice.reduce((sum, num) => sum + num, 0);
        setPointChipOpponent(opponentPoints);

        setShowChip(true);
      
        if (playerPoints > opponentPoints){
            setChipPlayer(chipPlayer + betPlayer + betOpponent);
        } 
        else if (playerPoints < opponentPoints){
            setChipOpponent(chipOpponent + betPlayer + betOpponent);
        } 
        else if (playerPoints === opponentPoints){
            setChipPlayer(chipPlayer + betPlayer);
            setChipOpponent(chipOpponent + betOpponent);
        }

        setBetPlayer(0);
        setBetOpponent(0);
    }

    return (
        <div className={classes.miniGamePage}>
            {showChip && (
                <div>
                    {randomDice.map((dice, index) => (
                        <div key={`player-${index}`} className={classes.dice} 
                             style={{position: "absolute", top: "5%", left: `${20 + 15 * index}%`}}>
                            <h1>{dice}</h1>
                        </div>
                    ))}
                </div>
            )}

            <div className={classes.pointChipPlayer}><h1>{pointChipPlayer}</h1></div>

            <div className={classes.betPlayer}><h1>{betPlayer}</h1></div>

            <button className={classes.chipPlayer} onClick={handleBetPlayer} disabled={betPlayer === 3 || chipPlayer <= 0}><h1>{chipPlayer}</h1></button>

            <button className={classes.dicePlaying} onClick={handleDice} disabled={betPlayer === 0 && betOpponent === 0}></button>

            <button className={classes.chipOpponent} onClick={handleBetOpponent} disabled={betOpponent === 3 || chipOpponent <= 0}><h1>{chipOpponent}</h1></button>

            <div className={classes.betOpponent}><h1>{betOpponent}</h1></div>

            <div className={classes.pointChipOpponent}><h1>{pointChipOpponent}</h1></div>

            {showChip && (
                <div>
                    {randomDiceOpponent.map((dice, index) => (
                        <div key={`opponent-${index}`} className={classes.dice} 
                             style={{position: "absolute", bottom: "5%", left: `${20 + 15 * index}%`}}>
                            <h1>{dice}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}