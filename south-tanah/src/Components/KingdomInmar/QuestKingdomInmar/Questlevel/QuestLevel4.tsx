import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import StoneTexture from "../../../../Images/Stone.jpg";
import Storm from "../../../../Images/Storm.jpg";
import { NavalBattle } from "../NavalBattle/NavalBattle";

export const Level4 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false, 
        message5: false,
        message6: false, 
        message7: false, 
        message8: false, 
        message9: false, 
        message10: false,
        message11: false,
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
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
                })
            }
            else if(showMessageQuest.message8 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                    message9: true, 
                    message10: false,
                })
            }
            else if(showMessageQuest.message9 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                    message9: false, 
                    message10: true,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
            })
        }
        else if(showMessageQuest.message8 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
                message9: true, 
                message10: false,
            })
        }
        else if(showMessageQuest.message9 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
                message9: false, 
                message10: true,
            })
        }
        else if(showMessageQuest.message10 === true) {
        props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <img src={Storm} alt="StreetsOfLutut" style={{borderRight: "solid 0.3vw darkred", borderLeft: "solid 0.3vw darkred", borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                   
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${Storm})`, border: "solid 0.3vw darkred"}}>
                <img  alt="Innkeeper"  className={classes.characterInmarImg4}/>
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
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                  
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                   
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                   
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                  
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                   
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <NavalBattle setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Матрос:</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                   
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> -----Продолжить----- </h3>
                </div>
            </div> }
        </div>
    )
}