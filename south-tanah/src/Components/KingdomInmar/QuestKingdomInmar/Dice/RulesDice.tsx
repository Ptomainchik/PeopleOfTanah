import { useState } from "react";
import classes from "../../../../Styles/StylesKingdomInmar/Dice.module.css";

export const RulesDice = ({ 
    setButtonDisabled
}: RulesDiceProps) => {
    const [showMessageRules, setShowMessageRules] = useState({
        Message1: true, 
        Message2: false, 
        Message3: false, 
        Message4: false,
        Message5: false,});

    function handleMessage() {
        if(showMessageRules.Message1 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: true, 
                Message3: false, 
                Message4: false,
                Message5: false,
            });
    }
        else if(showMessageRules.Message2 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: true, 
                Message4: false,
                Message5: false,
            }); 
    }
        else if(showMessageRules.Message3 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: true,
                Message5: false,
            }); 
    }
        else if(showMessageRules.Message4 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
                Message5: true,
            });
    }
        else if(showMessageRules.Message5 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
                Message5: false,
            });
            setButtonDisabled(false);
    }
    }
    
    return (
        <div className={classes.rulesPage}>
            {showMessageRules.Message1 && <div className={classes.message}> 
                <p>
                    В начале раунда игрок делает ставку, максимальная сумма которой составляет три монеты. Противник в ответ делает аналогичную ставку. 
                    Затем игроки бросают кубики, и выигрывает тот, чья сумма выпадет больше, чем у соперника.
                    У игрока также есть две уникальные возможности ("Шулерство" и "Хитрость"), каждая из которых доступна только один раз за игру. 
                    В игре проигрывает тот, у кого не осталось монет.
                </p> 
                <p className={classes.buttonRule} onClick={handleMessage}>-----Продолжить-----</p></div>}
            {showMessageRules.Message2 && <div> <div className={classes.message}> 
                <p>
                    Здесь отображаются суммы выпавших кубиков.
                </p> 
                <p className={classes.buttonRule} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow1}></div> <div className={classes.arrow2}></div> </div> }
            {showMessageRules.Message3 && <div> <div className={classes.message}> 
                <p>
                    Это монеты и их количество у каждого игрока. Нажимая на свою монету, вы делаете ставку.
                </p> 
                <p className={classes.buttonRule} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow3}></div> <div className={classes.arrow4}></div> </div>}
            {showMessageRules.Message4 && <div> <div className={classes.message}> 
                <p>
                    Шулерство - Нажав эту кнопку во время ставки, вам гарантирована победа в данном розыгрыше независимо от результата выпавших сумм кубиков.
                    Хитрость - Позволяет аккуратно украсть у соперника три монеты, но только если у него их больше трех в момент использования кнопки.
                </p> 
                <p className={classes.buttonRule} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow5}></div> <div className={classes.arrow6}></div>  </div>}
            {showMessageRules.Message5 && <div> <div className={classes.message}> 
                <p>
                    Это кнопки броска кубиков, распределения выигрыша и отображение выпавших сумм кубиков игрока и оппонента.
                </p> 
                <p className={classes.buttonRule} onClick={handleMessage}>-----Начать-----</p></div> <div className={classes.arrow7}></div> <div className={classes.arrow8}></div> <div className={classes.arrow9}></div></div>}
        </div>
    )
}

interface RulesDiceProps {
    setButtonDisabled: (value: boolean) => void;
}