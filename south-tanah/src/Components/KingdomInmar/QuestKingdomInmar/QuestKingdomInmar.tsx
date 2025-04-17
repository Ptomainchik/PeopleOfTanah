import classes from "../../../Styles/StylesKingdomInmar/HistoryKingdomInmar.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const QuestKingdomInmar = () => {
    return (
        <div>
             <div className={classes.topbar}><HomeButton/>Kingdom Inmar<BackButton/></div>
             <div>Quest Kingdom Inmar</div>
        </div>
        
    )
}