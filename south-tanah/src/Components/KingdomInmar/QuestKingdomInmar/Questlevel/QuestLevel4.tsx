import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import StoneTexture from "../../../../Images/Stone.jpg";
import Storm from "../../../../Images/Storm.jpg";
import SeaHorizon from "../../../../Images/SeaHorizon.jpg";
import { NavalBattle } from "../NavalBattle/NavalBattle";

export const Level4 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    const [showOpeningScene2, setShowOpeningScene2] = useState(false);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
        setShowOpeningScene2(true);
    }

    function handleModalOpening2() {
        setShowOpeningScene2(false);
    }

    function checkingMessageAccuracy() {
            if(showMessageQuest.message1 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: true, 
                    message3: false, 
                })
            } 
            else if(showMessageQuest.message2 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: true, 
                })
            } 
    }

    function handleStateEnding(event: React.MouseEvent<HTMLParagraphElement>) {
        const id = event.currentTarget.id;
        if (id === "1") {
            props.setCountLoyal((prev: number) => prev + 1);
            checkingMessageAccuracy()
        } else if (id === "2") {
            props.setCountContra((prev: number) => prev + 1);
            checkingMessageAccuracy()
        } else if (id === "3") {
            props.setCountNeutral((prev: number) => prev + 1);
            checkingMessageAccuracy()
        }
    }

    function handleNextMessage() {
        if(showMessageQuest.message1 === true){
            setShowMessageQuest({
                message1: false, 
                message2: true, 
                message3: false, 
            })
        }
        else if(showMessageQuest.message2 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: true, 
            })
        }
        else if(showMessageQuest.message3 === true) {
        props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <img src={SeaHorizon} alt="SeaHorizon" style={{borderRight: "solid 0.3vw darkred", borderLeft: "solid 0.3vw darkred", borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                   
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${Storm})`, border: "solid 0.3vw darkred"}}>
                <div className={classes.bortOfShip}></div>
            </div>
            {showOpeningScene2 && <div className={classes.openingScene} style={{border: "solid 0.3vw darkred"}}>
                
                <p>
                    
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening2}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <NavalBattle setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/> }
            {showMessageQuest.message3 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                   
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> -----Продолжить----- </h3>
                </div>
            </div> }
        </div>
    )
}