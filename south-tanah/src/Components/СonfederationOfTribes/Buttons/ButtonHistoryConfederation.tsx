import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonHistoryConfederation() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/hisconfederation");
    };
    return (
    <button className={classes.buttonConfederation} type="button" title="History Confederation" onClick={handleClick}>History Confederation</button>
    )
}