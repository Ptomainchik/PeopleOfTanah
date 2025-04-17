import classes from "../../Styles/StartPage.module.css"
import { ButtonChoiceConfederation } from "./Buttons/ChoicesButtons/ButtonChoiceConfederation "
import { ButtonChoiceKingdomInmar } from "./Buttons/ChoicesButtons/ButtonChoiceKingdomInmar"


export const StartPage = () => {
    return (
        <div className={classes.startPage}>
            <div className={classes.backgroundChoiceInmar}>
                <ButtonChoiceKingdomInmar/>
            </div>
            <div className={classes.overflowInfoBlockStartPage}>
                <div className={classes.infoBlockStartPage}>
                    <h1>South Tanah</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti autem repellendus neque veniam, sed beatae rem numquam, rerum voluptatem adipisci, provident consequatur iste? 
                    Facilis beatae dolor ea? Cumque, sint quia.</p>
                </div>
            </div>
            
            <div className={classes.backgroundChoiceConfederation}>
                <ButtonChoiceConfederation/>
            </div>
        </div>
    )
}