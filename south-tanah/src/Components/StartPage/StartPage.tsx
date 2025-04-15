import classes from "../../Styles/StartPage.module.css"
import { ButtonChoiceConfederation } from "./Buttons/ChoicesButtons/ButtonChoiceConfederation"
import { ButtonChoiceKingdomInmar } from "./Buttons/ChoicesButtons/ButtonChoiceKingdomInmar"

export const StartPage = () => {
    return (
        <div className={classes.startPage}>
            <ButtonChoiceKingdomInmar/>
            <div className={classes.infoBlockStartPage}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti autem repellendus neque veniam, sed beatae rem numquam, rerum voluptatem adipisci, provident consequatur iste? 
                Facilis beatae dolor ea? Cumque, sint quia.</p>
            </div>
            <ButtonChoiceConfederation/>
        </div>
    )
}