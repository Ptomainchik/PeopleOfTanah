import { useState } from "react";
import classes from "../../../../Styles/StylesConfederationOfTribes/QuestLevel.module.css";
import Tradesman from "../../../../Images/TradesmanRegistan.webp"

export const Level1 = () => {
    const [showMessageQuest, setShowMessageQuest] = useState(true);
    const [showOpeningScene, setShowOpeningScene] = useState(true);

    function handleModalOpening() {
        setShowOpeningScene(false);
    }

    return (
        <div className={classes.questPage}>
            {showOpeningScene && <div className={classes.openingScene}>
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
            <div className={classes.playingFieldLevel1}>
                <img src={Tradesman} alt="Tradesman"  className={classes.characterImg1}/>
            </div>
            {showMessageQuest && <div className={classes.blockMessage}>
                <p className={classes.question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis ipsam tempore, sed inventore incidunt quia iure, natus obcaecati numquam, 
                ex libero deserunt soluta aperiam iusto aut laborum aliquam fugiat mollitia.</p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1}>Yes</p>
                    <p id={"2"} className={classes.answer2}>No</p>
                    <p id={"3"} className={classes.answer3}>Nothing</p>
                </div>
         
            </div> }
        </div>
    )
}