import classes from "../../../Styles/StylesConfederationOfTribes/HistoryConfederation.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const HistoryConfederation = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>History Confederation of tribes<BackButton/></div>
            <p>History Confederation of tribes</p>
        </div>
    )
}