import classes from "../../../Styles/StylesConfederationOfTribes/StructureConfederation.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const StructureConfederation = () => {
    return (
        <div className={classes.structureConfederationPage}>
            <div className={classes.topbar}><HomeButton/>Structure Confederation of tribes<BackButton/></div>
            <p>1 Structure</p>
            <p>2 Structure</p>
            <p>3 Structure</p>
            <p>4 Structure</p>
        </div>
    )
}