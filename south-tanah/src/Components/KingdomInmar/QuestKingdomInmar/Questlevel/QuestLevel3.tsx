import classes from "../../../../Styles/StylesKingdomInmar/QuestLevel.module.css";
import { useState } from "react";
import Sailor from "../../../../Images/Sailor.webp";
import { Cards } from "../../../СonfederationOfTribes/QuestConfederation/Cards/Cards";

export const Level3 = () => {
    const [showMessageQuest, setShowMessageQuest] = useState(true);
    const [showCards, setShowCards] = useState(false);

    function handleOpenCards() {
        setShowCards(true);
    }

    return (
        <div className={classes.questPage}>
            <div className={classes.playingFieldLevel3}>
                <img src={Sailor} alt="Sailor"  className={classes.characterImg3}/>
                <button onClick={handleOpenCards}>Open Cards</button>
            </div>

            {showCards && <Cards/>}

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