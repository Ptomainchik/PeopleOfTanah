import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { BattleInTheForest } from "./QuestLevel/BattleInTheForest/BattleInTheForest";

export const QuestConfederation = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Квест Конфедирации племён<BackButton/></div>
           <BattleInTheForest/>
        </div>
    )
}