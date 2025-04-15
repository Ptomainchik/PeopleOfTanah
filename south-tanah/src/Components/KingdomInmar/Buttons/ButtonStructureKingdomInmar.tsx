import classes from "../../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonStructureKingdomInmar() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/strinmar")
    }
    return (
    <button className={classes.buttonKingdomInmar} type="button" title="Structure Kingdom Inmar" onClick={handleClick}>Structure Kingdom Inmar</button>
    )
}