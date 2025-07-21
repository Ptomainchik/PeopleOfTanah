import { useState } from "react";
import classes from "../../../Styles/Pages.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import { Level1 } from "./QuestLevel/QuestLevel1";
import { Level2 } from "./QuestLevel/QuestLevel2";
import { Level3 } from "./QuestLevel/QuestLevel3";
import { Level4 } from "./QuestLevel/QuestLevel4";
import { Level5 } from "./QuestLevel/QuestLevel5";
import { Level6 } from "./QuestLevel/QuestLevel6";
import { Level7 } from "./QuestLevel/QuestLevel7";
import { Level8 } from "./QuestLevel/QuestLevel8";

export const QuestConfederation = () => {
    const [countLoyal, setCountLoyal] = useState(0);
    const [countContra, setCountContra] = useState(0);
    const [countNeutral, setCountNeutral] = useState(0);
    const [showLevel, setShowLevel] = useState(1);

    return (
        <div>
            <div className={classes.topbar} style={{background: "goldenrod"}}><HomeButton/>Квест<BackButton/></div>
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