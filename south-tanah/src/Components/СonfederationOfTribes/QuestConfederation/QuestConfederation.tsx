import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";

export const QuestConfederation = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Confederation of tribes<BackButton/></div>
            <div>Quest Confederation</div>
        </div>
        
    )
}