import classes from "../../Styles/StylesConfederationOfTribes/ConfederationOfTribesPage.module.css"
import { BackButton } from "../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../StartPage/Buttons/HomeButton/HomeButton"

import { ButtonHistoryConfederation } from "./Buttons/ButtonHistoryConfederation"
import { ButtonStructureConfederation } from "./Buttons/ButtonStructureConfediration"

export const ConfederationPage = () => {
    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Confederation of tribes<BackButton/></div>
            <div className={classes.infoConfederation}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed dicta harum exercitationem perspiciatis necessitatibus, 
                vero aperiam sit natus nemo qui obcaecati repellat maxime quidem dolorum! Debitis sapiente qui obcaecati.</div>
            <ButtonHistoryConfederation/>
            <ButtonStructureConfederation/>
            <button>Quest</button>
        </div>
        
        
    )
}