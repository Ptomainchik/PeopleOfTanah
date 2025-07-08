import classes from "../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"
import { ButtonHistoryConfederation } from "./Buttons/ButtonHistoryConfederation"
import { ButtonQuestConfederation } from "./Buttons/ButtonQuestConfederation"
import { ButtonStructureConfederation } from "./Buttons/ButtonStructureConfediration"
import Registan from "../../Images/RegistanImg.jpg"


export const ConfederationPage = () => {
    return (
        <div className={classes.confederationPage}>
            <div className={classes.topbar}><HomeButton/>Конфедерация племён<BackButton/></div>
            <div className={classes.overflowInfoConfederation}>
                <div className={classes.infoConfederation}>
                    <p>
                        В Конфедерации племён нет предрассудков по отношению к другим народам, и они рады приветствовать на своей земле представителей любых рас. 
                        Их мировоззрение пронизано духом созидания и творчества, где нет места разделению по происхождению.
                        Основу населения составляют переселившиеся из Инмара люди, коренные обитатели пустыни - регистаны, а также их общие потомки, именуемые пустынными людьми. 
                    </p>
                </div>
            </div>

                <img className={classes.imageConfederationPage} src={Registan} alt="Registan" draggable={"false"}/>
            
            <div className={classes.buttonConfederation}>
                
                <div className={classes.blockButtonHistory}>
                    <p>История</p>
                    <ButtonHistoryConfederation/>
                </div>
                
                <div className={classes.blockButtonStructure}>
                    <p>Структура</p>
                    <ButtonStructureConfederation/>
                </div>
                
                <div className={classes.blockButtonQuest}>
                    <p>Квест</p>
                    <ButtonQuestConfederation/>
                </div>
                
            </div>
        </div>
        
        
    )
}