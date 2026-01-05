import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import Governor from "../../../../Images/Governor.webp";
import StoneTexture from "../../../../Images/Stone.jpg";

export const Level7 = (props:any) => {
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
        message16: false,
        message17: false,
        message18: false,
        message19: false,
        message20: false,
        message21: false,
        message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
                    
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
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
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message15 === true) {
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
                    message15: false,
                    message16: true,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message16 === true) {
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
                    message15: false,
                    message16: false,
                    message17: true,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message17 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: true,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message18 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: true,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message19 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: true,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message20 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: true,
                    message22: false,
            })
        }
        else if(showMessageQuest.message21 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: true,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
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
                message16: false,
                message17: false,
                message18: false,
                message19: false,
                message20: false,
                message21: false,
                message22: false,
            })
        }
        else if(showMessageQuest.message15 === true) {
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
                    message15: false,
                    message16: true,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message16 === true) {
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
                    message15: false,
                    message16: false,
                    message17: true,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message17 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: true,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message18 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: true,
                    message20: false,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message19 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: true,
                    message21: false,
                    message22: false,
            })
        }
        else if(showMessageQuest.message20 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: true,
                    message22: false,
            })
        }
        else if(showMessageQuest.message21 === true) {
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
                    message15: false,
                    message16: false,
                    message17: false,
                    message18: false,
                    message19: false,
                    message20: false,
                    message21: false,
                    message22: true,
            })
        }
            else if(showMessageQuest.message22 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <p>
                    Несмотря на кошмары, Корос хорошо выспался и чувствовал себя довольно-таки хорошо.
                    Вторую булку, которую кто-то из стражников оставил, пока он спал, рыцарь есть не стал, а бережно положил её в свою сумку, которую носил на поясе.
                    Глотнув воды, он немного освежился, умывшись ею из бурдюка. В казематах было всё так же тихо - ни шороха.
                    "Неужели я здесь совсем один, и других заключённых нет?" - подумал он, вслушиваясь в тишину.
                    Как вдруг издалека послышался скрежет открывающегося замка и скрип железной двери, а затем - приближающиеся шаги.
                    Встрепенувшись, Корос приготовился достать меч, намереваясь пробиваться с боем.
                    Подошедший стражник окинул его взглядом через стальные прутья двери и спокойным тоном произнёс:
                    - Успокойтесь, вам здесь ничто не угрожает. Я должен сопроводить вас в кабинет, где вас ожидает губернатор.
                    Немного смутившись, рыцарь убрал руку от рукояти меча и застегнул застёжку ножен.
                    Открыв замок, стражник вновь посмотрел на рыцаря и добавил:
                    - Ваше нахождение здесь - это всего лишь формальность. Пройдёмте со мной.
                    Идя по длинному коридору, Корос всё время разглядывал древние стены, украшенные лепниной, и удивлялся - зачем в обычной тюрьме такая роскошь?
                    Поднявшись по каменной лестнице, они подошли к двери, которую стражник учтиво открыл перед ним и произнёс:
                    - Прошу вас.
                    Кабинет был пуст, но, преодолев свои подозрения, Корос вошёл и услышал, как за спиной закрылась дверь.

                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelInmar7} style={{border: "solid 0.3vw darkred"}}>
                {!showMessageQuest.message1 && <img src={Governor} alt="Governor"  className={classes.characterInmarImg7}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Осматривая изысканное убранство кабинета, он вдруг услышал голос мужчины, спускающегося с лестницы, ведущей куда-то вправо.
                    "Вы уже здесь? Я спускаюсь к вам", - донеслось оттуда.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    "Доброе утро, Корос", - спокойно произнёс высокий темнокожий мужчина в тёмно-жёлтой джеллабе.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Не очень то оно доброе</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Здраствуйте</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>И вам того же</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Извините за этот инцидент, связанный с вашим задержанием. Но так уж у нас заведено.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Вы издеваетесь?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ничего страшного, я всё понимаю</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Закон есть закон</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    "Откуда вы знаете, как меня зовут?" - удивлённо и настороженно спросил рыцарь.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    "О... Я знаю всё о вас и вашем прошлом, и о том, зачем вы здесь. Не стоит так удивляться", - ответил губернатор, увидев ошарашенный взгляд Короса.
                    "Позвольте, я расскажу вам одну историю - она происходила на самом деле, но дошла до вас в искажённом виде."
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Ну давай, рассказывай</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Я послушаю</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Вы мне?.. Хорошо.</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    "То, что вам всю жизнь вдалбливали в Ордене, не имеет ничего общего с действительностью.
                    Но мы их не виним - такой уж у них взгляд на вещи.
                    Вы, сами того не подозревая, не знаете о себе ничего из того, что с вами происходило, начиная с тех трагических событий, случившихся во время восстания." 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Что вы несёте?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>(молча смотреть в глаза)</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Как такое возможно?</p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Понимаете, когда началась война за свободу - да-да, именно за свободу - власти Инмара никогда не хотели слышать простых людей. 
                    Они ущемляли права всех, кто хоть чуточку не походил на их верного пса. 
                    А если кто-то осмеливался иметь своё мнение... такие люди либо бесследно исчезали, либо оказывались в застенках, где над ними издевались до самой смерти.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Не мне рассказывать вам о законах и нравах королевского общества. 
                    Вы и сами прекрасно знаете, как там относятся к попыткам донести правду, когда она противоречит мнению Высшего Совета. 
                    Пятьсот лет мы пытались вымолить у них хоть крупицу милосердия - но все наши попытки солдаты Инмара пресекали с беспощадной жестокостью.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Это был лишь вопрос времени - когда вспыхнет пламя.
                    В ответ на попытки диалога мы получали лишь упрёки и презрение. Если говорить прямо - нам плевали в лица, называя рабами.
                    И когда чаша терпения переполнилась - вспыхнуло восстание. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Так говорит каждый конфедерат</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Допустим</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Что-то в этом есть</p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                   Когда народ поднял бунт, он выступил против власти Инмара - но не против своих же земляков. 
                   Повстанцы захватывали и сжигали казармы с арсеналами, а местных управителей, служивших короне, просто брали в плен. 
                   Все могло бы так и закончиться... если бы Высший Совет не решил скрыть правду.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Боясь потерять территории, король послал ваших братьев по ордену - чтобы те тайно поджигали дома и убивали всех на своём пути, своих и чужих. 
                    Так он пытался посеять панику, планируя потом обвинить во всём нас и ввести войска для окончательного подавления восстания. 
                    Но он не учёл одного: жестокость лишь сплотила повстанцев. Остальное вы знаете - Инмар бежал.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message12 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    А теперь перейдём к главному - вашей истории.
                    Приготовьтесь услышать горькую правду - она обожжёт, но ведь правда, даже самая жестокая, лучше сладкого обмана.
                    Ваших родителей убили не повстанцы. Их кровь на руках людей ордена Ключей.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Как вы смеете их обвинять?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Что?!</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Не верю не единому слову</p>
                </div>
            </div> }
            {showMessageQuest.message13 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    "Я вас прекрасно понимаю, то, что вы жили всё это время во лжи и с жаждой мщения, не позволяет вам поверить в это. 
                    Я хочу вам кое-что показать: этот документ является доказательством моих слов", - боясь напугать рыцаря, тихо произнёс губернатор, доставая из джеллабы бумагу с жёлтым теснением.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message14 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    "Это откроет вам глаза, и вы наконец поймёте, кому служите на самом деле", - сказал губернатор, медленно протягивая руку со свёрнутой, потрескавшейся от старости бумагой.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Вырвать свиток из рук</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Взять свиток</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>(аккуратно взять свиток)</p>
                </div>
            </div> }
            {showMessageQuest.message15 && <div className={classes.openingScene}>
                <div className={classes.oldScroll}></div>
                <h3 className={classes.inscription}>
                    Караванщик: "Френ Садро"
                    <hr/>
                    Артель: "Другая монета"
                    <hr/>
                    Город: "Кархин"
                    <hr/>
                </h3>
                <p>
                    Развернув его, Корос побледнел. В первой строке было выведено имя его отца и их фамилия, которую не знал никто, кроме тётки, с которой он бежал.
                    Далее шло название артели и город, в котором они проживали вместе с семьёй. 
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> 
                        -----Продолжить----- 
                    </h3>
                </div>
            </div> }
            {showMessageQuest.message16 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Ошарашенный увиденным, Корос бросил губернатору: Откуда вы знаете моего отца? Что это?
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message17 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Ах да, вы и не знали, что ваш отец был караванщиком. Да-да, а ваша мать была родом из южных племён Великой Пустыни.
                    Заметьте - бумаги подлинные, на них печать Лиги караванщиков, ставшей впоследствии слегка изменённым гербом Конфедерации.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Это враньё!</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Я ничего не понимаю</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Но тогда...</p>
                </div>
            </div> }
            {showMessageQuest.message18 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Ваши родители и их предки жили в пустыне ещё до всех этих событий.
                    То, что вы оказались в рядах Ордена - нелепая случайность и незнание правды, что привело вас туда под напором чувств.
                    Вы не виноваты в этом.  
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Скажи, что меня ещё зовут по другому</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Как вы узнали моё имя?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ну я надеюсь, зовут меня также</p>
                </div>
            </div> }
            {showMessageQuest.message19 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Вот в чём кроется то, о чём вы не догадывались.
                    Каждый караванщик, вступающий в Лигу, записывает в Книгу Памяти всех своих родных и близких - и вы в ней есть. 
                    Ваше имя подслушал в разговоре между вами и капитаном ваш противник по игре в кости, когда вы только прибыли.
                    Мы поймали его сразу после вашего задержания, и он выложил всё, что знал. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>От торгаша только этого и жди</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Жалкий трус</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Немудрено, он скользкий тип</p>
                </div>
            </div> }
            {showMessageQuest.message20 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Так как я занимаюсь архивами, ваше имя сразу показалось мне знакомым.
                    Проверив всё ещё раз и все бумаги, связанные с вашей семьёй, я пришёл к выводу, что вы даже не знаете, кто вы на самом деле, с тех пор как вступили в орден.
                    И да - то, что вы Ключник, видно невооружённым взглядом. К тому же у нас тоже есть свои люди в нужных кругах.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message21 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Губернатор:</h1>
                <p className={classes.question}>
                    Теперь, думаю, вам всё понятно. Дальше ваша судьба зависит только от вас.
                    Независимо от того, что вы решите, мои люди не станут вас задерживать - вы сможете покинуть крепость в любой момент.
                    А сейчас я вас покидаю. Мы больше не встретимся. Прощайте, Корос.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message22 && <div className={classes.openingScene}>
                <p>
                    После этих слов губернатор молча вышел из кабинета, оставив рыцаря один на один со своими мыслями.
                    Трепет, бушевавший у него в груди, закладывал уши от стука сердца.
                    Казалось, весь мир рухнул - всё, во что он верил и кому служил, обратилось в прах за эти мгновения.
                    Правда, что ему открылась спустя долгие годы, сводила с ума, от чего ему хотелось громко закричать.
                    "Мой отец - караванщик. Мать и её забота. Предки родом с юга пустыни..."
                    Как это всё отличалось от того, во что он привык верить, ни на секунду даже не задумываясь о том, что это может быть иллюзией, созданной его же собственным мозгом.
                    Сдерживая эмоции, он с дрожащими руками достал свиток, который должен был отдать тому торговцу на складе, и медленно развернул его.
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> -----Продолжить----- </h3>
                </div>
            </div> }
        </div>
    )
}