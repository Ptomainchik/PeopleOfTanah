import classes from "../../../Styles/StylesKingdomInmar/StructureKingdomInmar.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const StructureKingdomInmar = () => {
    return (
        <div className={classes.structureKindomInmarPage}>
            <div className={classes.topbar}><HomeButton/>Structure Kingdom Inmar<BackButton/></div>
            <p>1 Structure</p>
            <p>2 Structure</p>
            <p>3 Structure</p>
            <p>4 Structure</p>
        </div>
    )
}