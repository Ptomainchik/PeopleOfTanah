import classes from "../../../../Styles/StartPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonChoiceConfederation() {
    let navigate = useNavigate();
        function handleClick() {
            navigate("confederation");
        }
        return (
            <button className={classes.choiceConfederationOfTribes} type="button" title="Конфедерация племён" onClick={handleClick}></button>
        )
}