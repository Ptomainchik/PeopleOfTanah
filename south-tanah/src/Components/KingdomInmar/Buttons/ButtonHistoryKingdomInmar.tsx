import classes from "../../../Styles/OverallButtons.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonHistoryKingdomInmar() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/hisinmar")
    }
    return (
    <button className={classes.buttonHistory} type="button" title="History Kingdom Inmar" onClick={handleClick}></button>
    )
}