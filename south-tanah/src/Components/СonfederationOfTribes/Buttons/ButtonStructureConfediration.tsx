import classes from "../../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonStructureConfederation() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/strconfederation");
    };
    return (
    <button className={classes.buttonConfederation} type="button" title="Structure Confederation" onClick={handleClick}>Structure Confederation</button>
    )
}