import classes from "../../../Styles/StylesKingdomInmar/HistoryKingdomInmar.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const HistoryKingdomInmar = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>History Kingdom Inmar<BackButton/></div>
            <p>History Kingdom Inmar</p>
        </div>
    )
}