import classes from "../../../Styles/OverallButtons.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonStructureKingdomInmar() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/strinmar")
    }
    return (
    <button className={classes.buttonStructure} type="button" title="Structure Kingdom Inmar" onClick={handleClick}></button>
    )
}