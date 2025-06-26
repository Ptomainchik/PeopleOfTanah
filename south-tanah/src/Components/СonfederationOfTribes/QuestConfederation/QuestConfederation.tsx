import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { Level1 } from "./QuestLevel/QuestLevel1";

export const QuestConfederation = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Квест<BackButton/></div>
           <Level1/>
        </div>
    )
}