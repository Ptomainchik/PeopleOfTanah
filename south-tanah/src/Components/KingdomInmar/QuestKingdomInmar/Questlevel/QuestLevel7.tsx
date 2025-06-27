import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import Governor from "../../../../Images/Governor.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import PrisonRoom from "../../../../Images/PrisonRoom.jpg";

export const Level7 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({message1: true, message2: false, message3: false, message4: false, message5: false});
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
                    message5: false
                })
            } 
            else if(showMessageQuest.message3 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: true, 
                    message5: false
                })
            }
            else if(showMessageQuest.message4 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: true
                })
            }
            else if(showMessageQuest.message5 === true) {
                props.setShowLevel((prev: number) => prev + 1);
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
                message5: false}
            )
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure molestiae facere consequuntur laudantium minima quia dicta officia! 
                    Alias voluptates ullam pariatur ea voluptatem cumque? 
                    Optio consequatur ipsa in tempore itaque.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae distinctio aperiam ipsa officia dolor asperiores eius numquam! Praesentium magnam rerum a, quas ab perferendis molestias similique eaque provident asperiores. Laudantium!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quis, assumenda fugit facere rem architecto repellendus quasi illo, id cupiditate libero blanditiis impedit, sint doloremque dolor sapiente deserunt debitis provident.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla sapiente incidunt ipsa expedita ab sunt laborum nostrum ea quibusdam accusamus eum, vitae ducimus ullam nobis. Fugit nam quaerat reiciendis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam delectus dolorem magnam nulla accusamus reprehenderit perspiciatis quam harum alias quasi eveniet nemo praesentium quis, odit veritatis provident dolor libero officiis.
                </p>
                <h3 className={classes.buttonNextScene} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div>{props.countLoyal}{props.countContra}{props.countNeutral}</div>
            <div className={classes.playingFieldLevel7} style={{backgroundImage: `url(${PrisonRoom})`, border: "solid 0.3vw darkred"}}>
                <img src={Governor} alt="Governor"  className={classes.characterInmarImg7}/>
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div>
                    <p className={classes.buttonNextMessage} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Yes</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>No</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Nothing</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Yes</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>No</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Nothing</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Yes</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>No</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Nothing</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Yes</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>No</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Nothing</p>
                </div>
            </div> }
        </div>
    )
}