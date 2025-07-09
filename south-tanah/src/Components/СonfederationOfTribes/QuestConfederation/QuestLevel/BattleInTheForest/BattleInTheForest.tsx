import { useEffect, useState } from "react";
import classes from "../../../../../Styles/StylesConfederationOfTribes/BattleInTheForest.module.css";
import { RulesBattleInTheForest } from "./RulesBattleInTheForest";

interface DevelopmentsProps {
    setCountLoyal: (value: any) => void;
    setCountContra: (value: any) => void;
    setCountNeutral: (value: any) => void;
    handleNextMessage: () => void;
}

export const BattleInTheForest = ({setCountLoyal,
        setCountContra ,
        setCountNeutral,
        handleNextMessage,
    }:DevelopmentsProps) => {
    const [healthBandit, setHealthBandit] = useState(500);
    const [healthHeadBandit, setHealthHeadBandit] = useState(500);
    const [healthBaggage, setHealthBaggage] = useState(1000);
    const [showBandit, setShowBandit] = useState(true);
    const [showHeadBandit, setShowHeadBandit] = useState(true);
    const [attackQueue, setAttackQueue] = useState(5);
    const [countAttack, setCountAttack] = useState(0);
    const [countAttackBandit, setCountAttackBandit] = useState(5);
    const [theftPrevention, setTheftPrevention] = useState(false);
    const [theftPreventionIndicator, setTheftPreventionIndicator] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [countButtonActions, setCountButtonActions] = useState(5);
    const [showButtonActions, setShowButtonActions] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState({win: false, lose: false, badWin: false});
 
    const classBandit1 = attackQueue === 1 ? classes.leftBandit1Up : classes.leftBandit1Down;
    const classBandit2 = attackQueue === 2 ? classes.leftBandit2Up : classes.leftBandit2Down;
    const classBandit3 = attackQueue === 3 ? classes.rightBandit1Up : classes.rightBandit1Down;
    const classBandit4 = attackQueue === 4 ? classes.rightBandit2Up : classes.rightBandit2Down;
    const classHeadBandit = attackQueue === 5 ? classes.headBanditUp : classes.headBanditDown;
    
    useEffect(() => {
        if (healthBandit <= 0) {
            setTimeout(() => {
                setShowBandit(false);
            }, 1000)
            setAttackQueue(5); 
        }
    }, [healthBandit]);

    function accuraty(){
        const currentHealthBandit = healthBandit;
        const currentHealthHeadBandit = healthHeadBandit;
        const currentHealthBaggage = healthBaggage;

    if(currentHealthBandit <= 0 && currentHealthHeadBandit <= 0 && currentHealthBaggage >= 251){
        setCountLoyal((prev:any) => prev + 1);
        setShowFinalModal({win: true, lose: false, badWin: false});
    }
    else if(currentHealthBandit <= 0 && currentHealthHeadBandit <= 0 && currentHealthBaggage <= 250 && currentHealthBaggage >= 10){
        setCountNeutral((prev:any) => prev + 1);
        setShowFinalModal({win: false, lose: false, badWin: true});
    }
    else if(currentHealthBaggage < 10){
        setCountContra((prev:any) => prev + 1);
        setShowFinalModal({win: false, lose: true, badWin: false});
    }
    }

    function handleAttackHeadBandit(){
        accuraty()
        if(showButtonActions === true){
            setCountButtonActions(prev => prev - 1);
        }

        if(countButtonActions === 1){
            setShowButtonActions(false);
            setCountButtonActions(5);
        }

        if(theftPreventionIndicator === true){
            setCountAttack(prev => prev + 1);
        }

        if(countAttack >= 4){
            setTheftPrevention(prev => prev = false);
        }

        if(countAttack >= 5){
            setCountAttackBandit(prev => prev + 1);
        }

        if(countAttack >= 9){
            setCountAttack(0);
            setCountAttackBandit(5);
            setTheftPreventionIndicator(false);
        }

        if (healthHeadBandit <= 0) {
            setShowHeadBandit(false);
            return
        }

        if(healthBandit <= 10 && theftPrevention === false) {
            setHealthHeadBandit(prev => prev - 20);
            setHealthBaggage(prev => prev - 25);
        }
        else if(healthBandit <= 10 && theftPrevention === true) {
            setHealthHeadBandit(prev => prev - 20);
        }
        
        if(healthBandit >= 10 && theftPrevention === false){
            setHealthHeadBandit(prev => prev - 20);
            setHealthBaggage(prev => prev - 25);
            const randomBandit = Math.floor(Math.random() * 4) + 1;
            setAttackQueue(randomBandit);
        }
        else if(healthBandit >= 10 && theftPrevention === true) {
            setHealthHeadBandit(prev => prev - 20);
            const randomBandit = Math.floor(Math.random() * 4) + 1;
            setAttackQueue(randomBandit);
        }
    }

    function handleAttackBandit(){
        if(showButtonActions === true){
            setCountButtonActions(prev => prev - 1);
        }

        if(countButtonActions === 1){
            setShowButtonActions(false);
            setCountButtonActions(5);
        }

        if(theftPreventionIndicator === true){
            setCountAttack(prev => prev + 1);
        }
      
        if(countAttack >= 4){
            setTheftPrevention(prev => prev = false);
        }

        if(countAttack >= 5){
            setCountAttackBandit(prev => prev + 1);
        }

        if(countAttack >= 9){
            setCountAttack(0);
            setCountAttackBandit(5);
            setTheftPreventionIndicator(false);
        }

        if(healthBandit <= 10 || theftPrevention === false){
        setHealthBandit(prev => prev - 20);
        setHealthBaggage(prev => prev - 20);
        const nextTarget = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 5;
        setAttackQueue(nextTarget);
        }
        else if(healthBandit <= 10 || theftPrevention === true){
        setHealthBandit(prev => prev - 20);
        const nextTarget = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 5;
        setAttackQueue(nextTarget);
        }
    }

    function handleTheftPrevention(){
        setTheftPrevention(true);
        setTheftPreventionIndicator(true);
        setCountAttackBandit(0);
        setShowButtonActions(true);
    }

    return (
        <div className={classes.battleInTheForestPage}>
            <RulesBattleInTheForest setButtonDisabled={setButtonDisabled}/>
            <div className={classes.blockBaggage}>
                <p>Обоз</p>
                <progress className={classes.healthBaggage} max="1000" value={healthBaggage}></progress>
            </div>

            <div className={classes.banditField}>
                {showBandit && <button className={classBandit1} onClick={handleAttackBandit} disabled={attackQueue !== 1 || buttonDisabled === true}></button>}
                {showBandit && <button className={classBandit2} onClick={handleAttackBandit} disabled={attackQueue !== 2 || buttonDisabled === true}></button>}
                {showHeadBandit && <button className={classHeadBandit} onClick={handleAttackHeadBandit} disabled={attackQueue !== 5 || buttonDisabled === true}></button>}
                {showBandit && <button className={classBandit3} onClick={handleAttackBandit} disabled={attackQueue !== 3 || buttonDisabled === true}></button>}
                {showBandit && <button className={classBandit4} onClick={handleAttackBandit} disabled={attackQueue !== 4 || buttonDisabled === true}></button>}
            </div>

            <div className={classes.blockBandit}>
                <p>Атаман</p>
                <progress className={classes.healthBandits} max="500" value={healthHeadBandit}></progress>
                <p>Разбойники</p>
                <progress className={classes.healthBandits} max="500" value={healthBandit}></progress>
            </div>

            <div className={classes.baggage}>
                <div className={classes.blockTheftPrevention}>
                    <p>Пресечение</p>  
                    <progress className={classes.healthBaggage} max="5" value={countAttackBandit}></progress>
                    <button className={classes.buttonTheftPrevention} title="Пресечение" onClick={handleTheftPrevention} disabled={theftPrevention === true || countAttack >= 4 || buttonDisabled === true}></button> 
                    {showButtonActions && <span>{countButtonActions}</span>}
                </div>
            </div>

            {showFinalModal.win && <div className={classes.finalModal}>
                <h3>
                    Разбойники в страхе разбегаются, а большинство товаров сохранилось в обозе.
                    Поднявшись в полный рост, Неман крикнул им вслед:
                    - Бегите, грязные твари!
                    Затем, обернувшись к членам группы, тихо произнёс:
                    - Не зря я в детстве подглядывал за тренировками пёсчанников.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {showFinalModal.lose && <div className={classes.finalModal}>
                <h3>
                    Это нападение станет горьким событием в жизни Немана.
                    Разбойники так же неожиданно исчезли, как и появились, но, опустошив весь обоз, оставив после себя лишь жизни караванщикам.
                    "Нам повезло, что мы хотя бы целы", — произнёс кто-то из торговцев.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {showFinalModal.badWin && <div className={classes.finalModal}>
                <h3>
                    Убегающие разбойники прихватили большую часть товаров из обоза.
                    То, что осталось, конечно, не даст караванщикам умереть голодной смертью,
                    но и прибыли в Киллате они с этого не получат.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

        </div>
    )
}