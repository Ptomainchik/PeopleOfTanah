import classes from "../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"
import { ButtonHistoryKingdomInmar } from "./Buttons/ButtonHistoryKingdomInmar"
import { ButtonStructureKingdomInmar } from "./Buttons/ButtonStructureKingdomInmar"

export const KingdomInmarPage = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Kingdom Inmar<BackButton/></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis saepe reiciendis dicta placeat, repudiandae labore? 
                Laudantium, recusandae? Quisquam magni quae quia cupiditate dolores! Accusamus sit non qui consequuntur.</div>
            <ButtonHistoryKingdomInmar/>
            <ButtonStructureKingdomInmar/>
            <button>Quest</button>
        </div>
        
    )
}