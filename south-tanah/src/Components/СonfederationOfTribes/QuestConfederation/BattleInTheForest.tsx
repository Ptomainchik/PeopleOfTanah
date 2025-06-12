import { useEffect, useState } from "react";
import classes from "../../../Styles/StylesConfederationOfTribes/BattleInTheForest.module.css";

export const BattleInTheForest = () => {
    const [healthBandit, setHealthBandit] = useState(500);
    const [healthHeadBandit, setHealthHeadBandit] = useState(500);
    const [healthBaggage, setHealthBaggage] = useState(1000);
    const [showBandit, setShowBandit] = useState(true);
    const [showHeadMonster, setShowHeadMonster] = useState(true);
    const [attackQueue, setAttackQueue] = useState(5);
    const [showRepair, setShowRepair] = useState(true);

    const classBandit1 = attackQueue === 1 ? classes.leftBandit1Up : classes.leftBandit1Down;
    const classBandit2 = attackQueue === 2 ? classes.leftBandit2Up : classes.leftBandit2Down;
    const classBandit3 = attackQueue === 3 ? classes.rightBandit1Up : classes.rightBandit1Down;
    const classBandit4 = attackQueue === 4 ? classes.rightBandit2Up : classes.rightBandit2Down;
    const classHeadBandit = attackQueue === 5 ? classes.headBanditUp : classes.headBanditDown;
    
    
    useEffect(() => {
        if (healthBandit <= 0) {
            setShowBandit(false);
            setAttackQueue(5); 
        }
    }, [healthBandit]);

    function handleStart(){
        setAttackQueue(5);
    }

    function handleAttackHeadBandit(){
        if(healthHeadBandit <= 0) {
            setShowHeadMonster(false);
            return;
        }

        if(healthBandit <= 10) {
            setHealthHeadBandit(prev => prev - 20);
            setHealthBaggage(prev => prev - 50);
        }
        
        if(healthBandit >= 10){
            setHealthHeadBandit(prev => prev - 20);
            setHealthBaggage(prev => prev - 40);
            const randomBandit = Math.floor(Math.random() * 4) + 1;
            setAttackQueue(randomBandit);
        }
    }

    function handleAttackBandit(){
        setHealthBandit(prev => prev - 20);
        setHealthBaggage(prev => prev - 30);
        const nextTarget = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 5;
        setAttackQueue(nextTarget);
    }

    function handleRepair(){
        setHealthBaggage(prev => prev + 1000);
        setShowRepair(false);
    }

    return (
        <div className={classes.battleInTheForestPage}>
            <div className={classes.blockBaggage}>
                <p>Обоз</p>
                <progress className={classes.healthBaggage} max="1000" value={healthBaggage}></progress>
            </div>

            <div className={classes.banditField}>
                {showBandit && <button className={classBandit1} onClick={handleAttackBandit} disabled={attackQueue !== 1}></button>}
                {showBandit && <button className={classBandit2} onClick={handleAttackBandit} disabled={attackQueue !== 2}></button>}
                {showHeadMonster && <button className={classHeadBandit} onClick={handleAttackHeadBandit} disabled={attackQueue !== 5}></button>}
                {showBandit && <button className={classBandit3} onClick={handleAttackBandit} disabled={attackQueue !== 3}></button>}
                {showBandit && <button className={classBandit4} onClick={handleAttackBandit} disabled={attackQueue !== 4}></button>}
            </div>

            <div className={classes.blockBandit}>
                <p>Разбойники</p>
                <progress className={classes.healthBandits} max="500" value={healthBandit}></progress>
                <p>Глава Разбойников</p>
                <progress className={classes.healthBandits} max="500" value={healthHeadBandit}></progress>
            </div>

            <div className={classes.baggage}>
                {/* <button onClick={handleStart}>Start</button> */}
                {showRepair && <div className={classes.repair}>
                    <button className={classes.repair} title="Ремонт" onClick={handleRepair}></button> 
                    <p>Ремонт</p>
                </div>}

            </div>
        </div>
    )
}