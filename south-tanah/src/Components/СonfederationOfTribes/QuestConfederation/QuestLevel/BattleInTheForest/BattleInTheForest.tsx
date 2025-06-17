import { useEffect, useState } from "react";
import classes from "../../../../../Styles/StylesConfederationOfTribes/BattleInTheForest.module.css";
import { RulesBattleInTheForest } from "./RulesBattleInTheForest";


export const BattleInTheForest = () => {
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

    function handleAttackHeadBandit(){
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
            setHealthBaggage(prev => prev - 50);
        }
        else if(healthBandit <= 10 && theftPrevention === true) {
            setHealthHeadBandit(prev => prev - 20);
        }
        
        if(healthBandit >= 10 && theftPrevention === false){
            setHealthHeadBandit(prev => prev - 20);
            setHealthBaggage(prev => prev - 40);
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
        setHealthBaggage(prev => prev - 30);
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
                <p>Разбойники</p>
                <progress className={classes.healthBandits} max="500" value={healthBandit}></progress>
                <p>Атаман</p>
                <progress className={classes.healthBandits} max="500" value={healthHeadBandit}></progress>
            </div>

            <div className={classes.baggage}>
                <div className={classes.blockTheftPrevention}>
                    <p>Пресечение</p>  
                    <progress className={classes.healthBaggage} max="5" value={countAttackBandit}></progress>
                    <button className={classes.buttonTheftPrevention} title="Пресечение" onClick={handleTheftPrevention} disabled={theftPrevention === true || countAttack >= 4 || buttonDisabled === true}></button> 
                </div>
            </div>
        </div>
    )
}