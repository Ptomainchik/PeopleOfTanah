import { useState } from "react";
import classes from "../../../../Styles/StylesKingdomInmar/NavalBattle.module.css";

export const RulesNavalBattle = ({ 
    setButtonDisabled
}: RulesDiceProps) => {
    const [showMessageRules, setShowMessageRules] = useState({
        Message1: true, 
        Message2: false, 
        Message3: false, 
        Message4: false,});

    function handleMessage() {
        if(showMessageRules.Message1 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: true, 
                Message3: false, 
                Message4: false,
            });
    }
        else if(showMessageRules.Message2 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: true, 
                Message4: false,
            }); 
    }
        else if(showMessageRules.Message3 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: true,
            }); 
    }
        else if(showMessageRules.Message4 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
            });
            setButtonDisabled(false);
    }
    }
    

    return (
        <div className={classes.rulesPage}>
            {showMessageRules.Message1 && <div className={classes.message}> <p>Атакуйте монстра и его щупальца, кликая по ним. В ответ он будет наносить урон кораблю.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div>}
            {showMessageRules.Message2 && <div> <div className={classes.message}> <p>Это шкала состояния коробля.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow1}></div> </div> }
            {showMessageRules.Message3 && <div> <div className={classes.message}> <p>Это шкала здоровья монстра и его щупалец.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow2}></div> </div>}
            {showMessageRules.Message4 && <div> <div className={classes.message}> <p>Это кнопка ремонта корабля. Использовать её можно лишь единожды за всю игру и только в определённые моменты.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Начать-----</p></div> <div className={classes.arrow3}></div> </div>}
        </div>
    )
}

interface RulesDiceProps {
    setButtonDisabled: (value: boolean) => void;
}