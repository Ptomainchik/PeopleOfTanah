import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import StoneTexture from "../../../../Images/Stone.jpg";
import Casemates from "../../../../Images/Casemates.jpg";

export const Level6 = (props:any) => {
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
        message12: false,
        message13: false,
        message14: false,
        message15: false,
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
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
                    message9: false, 
                    message10: false,
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
                })
            }
            else if(showMessageQuest.message10 === true) {
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
                message10: false,
                message11: true,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
            else if(showMessageQuest.message11 === true) {
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
                message10: false,
                message11: false,
                message12: true,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message12 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: true,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message13 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: true,
                message15: false,
            })
        }
        else if(showMessageQuest.message14 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: true,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message10 === true) {
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
                message10: false,
                message11: true,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message11 === true) {
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
                message10: false,
                message11: false,
                message12: true,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message12 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: true,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message13 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: true,
                message15: false,
            })
        }
        else if(showMessageQuest.message14 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: true,
            })
        }
            else if(showMessageQuest.message15 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${Casemates})`, border: "solid 0.3vw goldenrod"}}>
                
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                   
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message12 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message13 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                  
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message14 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>+</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>-</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>/</p>
                </div>
            </div> }
            {showMessageQuest.message15 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                  
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> 
                        -----Продолжить----- 
                    </h3>
                </div>
            </div> }
        </div>
    )
}