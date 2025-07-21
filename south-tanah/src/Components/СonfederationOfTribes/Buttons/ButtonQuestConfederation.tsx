import classes from "../../../Styles/OverallButtons.module.css";
import { useNavigate } from "react-router-dom";

export function ButtonQuestConfederation() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("queconfederation")
    }
    return (
    <button className={classes.buttonQuest} type="button" title="Квест Конфедерации племён" onClick={handleClick}></button>
    )
}