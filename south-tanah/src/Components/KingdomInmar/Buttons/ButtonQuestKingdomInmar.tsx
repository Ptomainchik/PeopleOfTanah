import classes from "../../../Styles/OverallButtons.module.css";
import { useNavigate } from "react-router-dom";

export function ButtonQuestKingdomInmar() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/queinmar")
    }
    return (
    <button className={classes.buttonQuest} type="button" title="Квест Королевства Инмар" onClick={handleClick}></button>
    )
}