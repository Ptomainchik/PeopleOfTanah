import { useState } from "react";
import classes from "../../../Styles/History.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { Cards } from "./Cards";
import { Level2 } from "./Questlevel/QuestLevel2";

export const QuestKingdomInmar = () => {
    const [showCards, setShowCards] = useState(false);

    function handleOpenCards() {
        setShowCards(true);
    }

    function handleCloseCards() {
        setShowCards(false);
    }

    return (
        <div>
             <div className={classes.topbar} style={{background: "darkred"}}><HomeButton/>Квест Королевства Инмар<BackButton/></div>
             <Level2/>
             <button onClick={handleOpenCards}>Open Cards</button>
             {showCards && <Cards/>}
        </div>
        
    )
}