import classes from "../../Styles/StartPage.module.css"
import { ButtonChoiceConfederation } from "./Buttons/ChoicesButtons/ButtonChoiceConfederation "
import { ButtonChoiceKingdomInmar } from "./Buttons/ChoicesButtons/ButtonChoiceKingdomInmar"


export const StartPage = () => {
    return (
        <div className={classes.startPage}>
            <div className={classes.backgroundChoiceInmar}>
                <ButtonChoiceKingdomInmar/>
            </div>
            <div className={classes.overlayInfoBlockStartPage}>
                <div className={classes.infoBlockStartPage}>
                    <h1>Люди Танаха</h1>
                    <p>
                        На юго-востоке континента ведут постоянные междоусобные войны две, казалось бы, внешне похожие расы, но такие разные по образу жизни фракции.
                        В этой главе идёт повествование о двух непримиримых соперниках - Королевстве Инмар и Конфедерации племён.
                    </p>
                </div>
            </div>
            
            <div className={classes.backgroundChoiceConfederation}>
                <ButtonChoiceConfederation/>
            </div>
        </div>
    )
}