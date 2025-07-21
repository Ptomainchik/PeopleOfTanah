import classes from "../../../Styles/OverallButtons.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonHistoryConfederation() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/hisconfederation");
    };
    return (
    <button className={classes.buttonHistory} type="button" title="История Конфедерации племён" onClick={handleClick}></button>
    )
}