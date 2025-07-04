import { useState } from "react";
import classes from "../../../../../Styles/StylesConfederationOfTribes/BattleInTheForest.module.css";

export const RulesBattleInTheForest = ({ 
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
            {showMessageRules.Message1 && <div className={classes.message}> 
                <p> 
                    Разбойники атакуют по очереди - каждый их набег наносит урон обозу. Ваша задача - не допустить полного разграбления, атакуя грабителей.
                    Чтобы предотвратить разграбление, используйте кнопку перехвата (пресечения) грабежа.
                </p> 
                <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p>
            </div>}
            {showMessageRules.Message2 && <div> <div className={classes.message}> 
                <p> 
                    Это шкала состояния обоза.
                </p> 
                <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow1}></div> 
            </div>}
            {showMessageRules.Message3 && <div> <div className={classes.message}> 
                <p> 
                    Это шкала здоровья разбойников и их атамана.
                </p> 
                <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow2}></div> 
            </div>}
            {showMessageRules.Message4 && <div> <div className={classes.message}> 
                <p> 
                    Это кнопка пресечения грабежа. Нажав на неё все разбойники не смогут грабить обоз 5 раундов, но для её востановления так же требуется 5 раундов.
                </p> 
                <p className={classes.buttonRules} onClick={handleMessage}>-----Начать-----</p></div> <div className={classes.arrow3}></div> 
            </div>}
        </div>
    )
}

interface RulesDiceProps {
    setButtonDisabled: (value: boolean) => void;
}