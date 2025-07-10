import { useState } from "react";
import classes from "../../../Styles/StylesKingdomInmar/KingdomInmarPage.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { Level1 } from "./Questlevel/QuestLevel1";
import { Level2 } from "./Questlevel/QuestLevel2";
import { Level3 } from "./Questlevel/QuestLevel3";
import { Level4 } from "./Questlevel/QuestLevel4";
import { Level5 } from "./Questlevel/QuestLevel5";
import { Level6 } from "./Questlevel/QuestLevel6";
import { Level7 } from "./Questlevel/QuestLevel7";
import { Level8 } from "./Questlevel/QuestLevel8";

export const QuestKingdomInmar = () => {
    const [countLoyal, setCountLoyal] = useState(0);
    const [countContra, setCountContra] = useState(0);
    const [countNeutral, setCountNeutral] = useState(0);
    const [showLevel, setShowLevel] = useState(5);

    return (
        <div>
            <div className={classes.topbar}><HomeButton/>Квест<BackButton/></div>
            {showLevel === 1 && (
                <Level1 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 2 && (
                <Level2 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 3 && (
                <Level3 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 4 && (
                <Level4 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 5 && (
                <Level5 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 6 && (
                <Level6 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 7 && (
                <Level7 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            {showLevel === 8 && (
                <Level8 
                    countLoyal={countLoyal}
                    countContra={countContra}
                    countNeutral={countNeutral}
                    setCountLoyal={setCountLoyal}
                    setCountContra={setCountContra} 
                    setCountNeutral={setCountNeutral}
                    setShowLevel={setShowLevel}
                />
            )}
            
        </div>
    )
}