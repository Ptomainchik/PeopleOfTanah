import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { Level3 } from "./QuestLevel/QuestLevel3";



export const QuestConfederation = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Квест Конфедирации племён<BackButton/></div>
           <Level3/>
        </div>
        
    )
}