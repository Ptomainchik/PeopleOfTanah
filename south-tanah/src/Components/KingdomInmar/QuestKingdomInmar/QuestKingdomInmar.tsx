import classes from "../../../Styles/History.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { NavalBattle } from "./NavalBattle/NavalBattle";

export const QuestKingdomInmar = () => {

    return (
        <div>
             <div className={classes.topbar} style={{background: "darkred"}}><HomeButton/>Квест Королевства Инмар<BackButton/></div>
             <NavalBattle/>
        </div>
        
    )
}