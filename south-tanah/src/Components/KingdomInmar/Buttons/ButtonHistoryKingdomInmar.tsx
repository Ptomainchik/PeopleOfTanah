import classes from "../../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonHistoryKingdomInmar() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/hisinmar")
    }
    return (
    <button className={classes.buttonKingdomInmar} type="button" title="History Kingdom Inmar" onClick={handleClick}>History Kingdom Inmar</button>
    )
}