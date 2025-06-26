import classes from "../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"
import { ButtonHistoryKingdomInmar } from "./Buttons/ButtonHistoryKingdomInmar"
import { ButtonQuestKingdomInmar } from "./Buttons/ButtonQuestKingdomInmar"
import { ButtonStructureKingdomInmar } from "./Buttons/ButtonStructureKingdomInmar"
import Human from "../../Images/HumanImg.jpg"

export const KingdomInmarPage = () => {
    return (
        <div className={classes.kingdomInmarPage}>
            <div className={classes.topbar}><HomeButton/>Королевство Инмар<BackButton/></div>
            <div className={classes.overflowInfoKingdomInmar}>
                <div className={classes.infoKingdomInmar}>
                    <p>
                        Королевство Инмар ведёт обособленный образ жизни, где нет места другим расам. 
                        Их религия проповедует исключительность человеческой расы, и было бы странно обнаружить здесь представителей иных народов, населяющих континент.
                        Те немногочисленные чужеземцы, что оказываются в королевстве, обычно являются либо торговцами, либо послами. 
                        Их численность и передвижение по территории страны строго контролируются властями.
                    </p>
                </div>
            </div>
                
                <img className={classes.imageKingdomInmarPage} src={Human} alt="Human" draggable={"false"}/>

            <div className={classes.buttonKingdomInmar}>

                <div className={classes.blockButtonHistory}>
                    <p>История</p>
                    <ButtonHistoryKingdomInmar/>
                </div>

                <div className={classes.blockButtonStructure}>
                    <p>Структура</p>
                    <ButtonStructureKingdomInmar/>
                </div>

                <div className={classes.blockButtonQuest}>
                    <p>Квест</p>
                    <ButtonQuestKingdomInmar/>
                </div>
            </div>
            
        </div>
        
    )
}