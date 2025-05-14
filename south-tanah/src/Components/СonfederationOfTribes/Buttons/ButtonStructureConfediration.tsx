import classes from "../../../Styles/OverallButtons.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonStructureConfederation() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/strconfederation");
    };
    return (
    <button className={classes.buttonStructure} type="button" title="Структура Конфедерации племён" onClick={handleClick}></button>
    )
}