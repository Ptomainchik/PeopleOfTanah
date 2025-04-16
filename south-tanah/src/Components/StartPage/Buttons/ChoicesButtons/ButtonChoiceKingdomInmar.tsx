import classes from "../../../../Styles/StartPage.module.css"
import { useNavigate } from "react-router-dom";

export function ButtonChoiceKingdomInmar() {
    let navigate = useNavigate();
        function handleClick() {
            navigate("/inmar");
        }
        return (
            <button className={classes.choiceKingdomInmar} type="button" title="Kingdom Inmar" onClick={handleClick}></button>
        )
}