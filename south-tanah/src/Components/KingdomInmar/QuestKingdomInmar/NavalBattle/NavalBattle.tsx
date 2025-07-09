import { useEffect, useState } from "react";
import classes from "../../../../Styles/StylesKingdomInmar/NavalBattle.module.css";
import { RulesNavalBattle } from "./RulesNavalBattle";

interface DevelopmentsProps {
    setCountLoyal: (value: any) => void;
    setCountContra: (value: any) => void;
    setCountNeutral: (value: any) => void;
    handleNextMessage: () => void;
}

export const NavalBattle = ({setCountLoyal,
    setCountContra,
    setCountNeutral,
    handleNextMessage}: DevelopmentsProps) => {
    const [healthShip, setHealthShip] = useState(1000);
    const [healthTentacle, setHealthTentacle] = useState(500);
    const [healthHeadMonster, setHealthHeadMonser] = useState(500);
    const [showTentacle, setShowTentacle] = useState(true);
    const [showHeadMonster, setShowHeadMonster] = useState(true);
    const [attackQueue, setAttackQueue] = useState(5);
    const [showRepair, setShowRepair] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [showFinalModal, setShowFinalModal] = useState({win: false, lose: false, badWin: false,});

    const classTentacle1 = attackQueue === 1 ? classes.leftTentacle1Up : classes.leftTentacle1Down;
    const classTentacle2 = attackQueue === 2 ? classes.leftTentacle2Up : classes.leftTentacle2Down;
    const classTentacle3 = attackQueue === 3 ? classes.rightTentacle1Up : classes.rightTentacle1Down;
    const classTentacle4 = attackQueue === 4 ? classes.rightTentacle2Up : classes.rightTentacle2Down;
    const classHeadMonster = attackQueue === 5 ? classes.headMonsterUp : classes.headMonsterDown;
    
    useEffect(() => {
        if (healthTentacle <= 0) {
            setTimeout(() => {
                setShowTentacle(false);
            }, 1000)
            setAttackQueue(5); 
        }
    }, [healthTentacle]);


    const currentHealthHeadMonster = healthHeadMonster;
    const currentHealthTentacle = healthTentacle;
    const currentHealthShip = healthShip;
    
    function accuraty(){
        
    if(currentHealthTentacle <= 0 && currentHealthHeadMonster <= 0 && currentHealthShip >= 176){
        setCountLoyal((prev:any) => prev + 1);
        setShowFinalModal({win: true, lose: false, badWin: false});
    }
    else if(currentHealthTentacle <= 0 && currentHealthHeadMonster <= 1 && currentHealthShip <= 175 && currentHealthShip >= 10){
        setCountNeutral((prev:any) => prev + 1);
        setShowFinalModal({win: false, lose: false, badWin: true});
    }
    else if(currentHealthShip < 10){
        setCountContra((prev:any) => prev + 1);
        setShowFinalModal({win: false, lose: true, badWin: false});
    }
    }

    function handleAttackHeadMonster(){
        accuraty()
        if(healthHeadMonster <= 0) {
            setShowHeadMonster(false);
            return;
        }

        if(healthTentacle <= 10) {
            setHealthHeadMonser(prev => prev - 20);
            setHealthShip(prev => prev - 25);
        }
        
        if(healthTentacle >= 10){
            setHealthHeadMonser(prev => prev - 20);
            setHealthShip(prev => prev - 25);
            const randomTentacle = Math.floor(Math.random() * 4) + 1;
            setAttackQueue(randomTentacle);
        }
    }

    function handleAttackTentacle(){
        setHealthTentacle(prev => prev - 20);
        setHealthShip(prev => prev - 20);
        const nextTarget = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 5;
        setAttackQueue(nextTarget);
    }

    function handleRepair(){
        if(currentHealthTentacle <= 80 && currentHealthTentacle >= 10){
            setHealthShip(prev => prev + 400);
            setShowRepair(false);
        }
        else if(currentHealthTentacle < 10){
            setHealthShip(prev => prev + 300);
            setShowRepair(false);
        }
    }

    return (
        <div className={classes.navalBattlePage}>
            <RulesNavalBattle setButtonDisabled={setButtonDisabled}/>
            <div className={classes.blockShip}>
                <p>Корабль <p>Head: {healthHeadMonster} Ten: {healthTentacle} Ship: {healthShip}</p></p>
                <progress className={classes.healthShip} max="1000" value={healthShip}></progress>
            </div>
            
            <div className={classes.monsterField}>
                {showTentacle && <button className={classTentacle1} onClick={handleAttackTentacle} disabled={attackQueue !== 1 || buttonDisabled === true}></button>}
                {showTentacle && <button className={classTentacle2} onClick={handleAttackTentacle} disabled={attackQueue !== 2 || buttonDisabled === true}></button>}
                {showHeadMonster && <button className={classHeadMonster} onClick={handleAttackHeadMonster} disabled={attackQueue !== 5 || buttonDisabled === true}></button>}
                {showTentacle && <button className={classTentacle3} onClick={handleAttackTentacle} disabled={attackQueue !== 3 || buttonDisabled === true}></button>}
                {showTentacle && <button className={classTentacle4} onClick={handleAttackTentacle} disabled={attackQueue !== 4 || buttonDisabled === true}></button>}
            </div>

            <div className={classes.blockMonster}>
                <p>Монстр</p>
                <progress className={classes.healthMonster} max="500" value={healthHeadMonster}></progress>
                <p>Щупальца</p>
                <progress className={classes.healthMonster} max="500" value={healthTentacle}></progress>
            </div>

            <div className={classes.sideOfTheShip}>
                {showRepair && <div className={classes.blockRepair}>
                    <p>Ремонт</p>
                    <button className={classes.buttonRepair} style={healthTentacle >= 60 ? {opacity: "0.5"} : {}} title="Ремонт" onClick={handleRepair} disabled={buttonDisabled === true || healthTentacle > 60}></button> 
                </div>}
            </div>

            {showFinalModal.win && <div className={classes.finalModal}>
                <h3>
                    Пора готовить суши.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {showFinalModal.lose && <div className={classes.finalModal}>
                <h3>
                    Шлюпки на воду!
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {showFinalModal.badWin && <div className={classes.finalModal}>
                <h3>
                    Едва не потонули.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

        </div>
    )
}