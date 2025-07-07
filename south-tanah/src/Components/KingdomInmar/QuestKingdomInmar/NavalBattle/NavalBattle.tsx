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

    const classTentacle1 = attackQueue === 1 ? classes.leftTentacle1Up : classes.leftTentacle1Down;
    const classTentacle2 = attackQueue === 2 ? classes.leftTentacle2Up : classes.leftTentacle2Down;
    const classTentacle3 = attackQueue === 3 ? classes.rightTentacle1Up : classes.rightTentacle1Down;
    const classTentacle4 = attackQueue === 4 ? classes.rightTentacle2Up : classes.rightTentacle2Down;
    const classHeadMonster = attackQueue === 5 ? classes.headMonsterUp : classes.headMonsterDown;
    
    useEffect(() => {
        if (healthTentacle <= 0) {
            setShowTentacle(false);
            setAttackQueue(5); 
        }
    }, [healthTentacle]);

    function handleAttackHeadMonster(){
        if(healthHeadMonster <= 0) {
            setShowHeadMonster(false);
            return;
        }

        if(healthTentacle <= 10) {
            setHealthHeadMonser(prev => prev - 20);
            setHealthShip(prev => prev - 50);
        }
        
        if(healthTentacle >= 10){
            setHealthHeadMonser(prev => prev - 20);
            setHealthShip(prev => prev - 40);
            const randomTentacle = Math.floor(Math.random() * 4) + 1;
            setAttackQueue(randomTentacle);
        }
    }

    function handleAttackTentacle(){
        setHealthTentacle(prev => prev - 20);
        setHealthShip(prev => prev - 30);
        const nextTarget = Math.random() > 0.5 ? Math.floor(Math.random() * 4) + 1 : 5;
        setAttackQueue(nextTarget);
    }

    function handleRepair(){
        setHealthShip(prev => prev + 1000);
        setShowRepair(false);
    }

    return (
        <div className={classes.navalBattlePage}>
            <RulesNavalBattle setButtonDisabled={setButtonDisabled}/>
            <div className={classes.blockShip}>
                <p>Корабль</p>
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
                <p>Щупальца</p>
                <progress className={classes.healthMonster} max="500" value={healthTentacle}></progress>
                <p>Монстр</p>
                <progress className={classes.healthMonster} max="500" value={healthHeadMonster}></progress>
            </div>

            <div className={classes.sideOfTheShip}>
                {showRepair && <div className={classes.blockRepair}>
                    <p>Ремонт</p>
                    <button className={classes.buttonRepair} style={healthShip > 300 ? {opacity: "0.5"} : {}} title="Ремонт" onClick={handleRepair} disabled={buttonDisabled === true || healthShip > 300}></button> 
                </div>}

            </div>
        </div>
    )
}