import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import CaravanerMerchant from "../../../../Images/CaravanerMerchant.webp";
import RegistanGuard from "../../../../Images/RegistanGuard.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import StreetsRegistan from "../../../../Images/StreetsRegistan.jpg";
import RegistanСoast from "../../../../Images/RegistanСoast.jpg";
import { Dice } from "../Dice/Dice";

export const Level5 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false, 
        message5: false,
        message6: false, 
        message7: false, 
        message8: false, 
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
        if(showMessageQuest.message2 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: true, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                })
            } 
            else if(showMessageQuest.message3 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: true, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                })
            }
            else if(showMessageQuest.message4 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: true,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                })
            }
            else if(showMessageQuest.message5 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: true, 
                    message7: false, 
                    message8: false, 
                })
            }
            else if(showMessageQuest.message6 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: true, 
                    message8: false, 
                })
            }
            else if(showMessageQuest.message7 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: true, 
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
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
            })
        }
        else if(showMessageQuest.message2 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: true, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
            })
        } 
        else if(showMessageQuest.message3 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: true, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
            })
        }
        else if(showMessageQuest.message4 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: true,
                message6: false, 
                message7: false, 
                message8: false, 
            })
        }
        else if(showMessageQuest.message5 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: true, 
                message7: false, 
                message8: false, 
            })
        }
        else if(showMessageQuest.message6 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: true, 
                message8: false, 
            })
        }
        else if(showMessageQuest.message7 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: true, 
            })
        }
        else if(showMessageQuest.message8 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <img src={RegistanСoast} alt="RegistanСoast" style={{borderRight: "solid 0.3vw darkred", borderLeft: "solid 0.3vw darkred", borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showOpeningScene2 && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening2}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${StreetsRegistan})`, border: "solid 0.3vw darkred"}}>
                {!showMessageQuest.message1 && !showMessageQuest.message8 && <img src={CaravanerMerchant} alt="CaravanerMerchant"  className={classes.characterInmarImg5}/>}
                {!showMessageQuest.message1 && !showMessageQuest.message2 && !showMessageQuest.message3 && !showMessageQuest.message4 && !showMessageQuest.message5 && <img src={RegistanGuard} alt="CaravanerMerchant"  className={classes.characterInmarImg51}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                  
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                  
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                   
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <Dice setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/>}
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.openingScene} style={{border: "solid 0.3vw darkred"}}>
                <p>
                  
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> 
                        -----Продолжить-----
                    </h3>
                </div>
            </div> }
        </div>
    )
}