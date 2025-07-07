import { useEffect, useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import { useNavigate } from "react-router-dom";

export const Level8 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest] = useState(false);
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    const [showFinalScene, setShowFinalScene] = useState({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    const [buttonFinal, setButtonFinal] = useState({
        buttonLoyal: false,
        buttonContra: false,
        buttonNeutral: false,
    });
    
    function handleModalOpening() {
        setShowOpeningScene(false);
        setShowMessageQuest(true);
    }

    let navigate = useNavigate();
    function handleClickHome() {
    navigate('/');
    }

    useEffect(() => {
    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: true, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: true, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: true, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countLoyal === props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countLoyal === props.countNeutral && props.countLoyal > props.countContra && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    



    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: true, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: true, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: true, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra === props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra === props.countNeutral && props.countContra > props.countLoyal && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }

    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: true, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    else if(props.countNeutral === props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral === props.countContra && props.countNeutral > props.countLoyal && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    
    }, [buttonFinal, props.countLoyal, props.countContra, props.countNeutral])

    function handleFinalLoyal(){
        props.setCountLoyal((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: true,
        buttonContra: false,
        buttonNeutral: false,
    });
    }

    function handleFinalContra(){
        props.setCountContra((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: true,
        buttonNeutral: false,
    });
    }

    function handleFinalNeutral(){
        props.setCountNeutral((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: false,
        buttonNeutral: true,
    });
    }

    return (
        <div className={classes.questPage}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            
            {showMessageQuest && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <div className={classes.finalBlockAnswer} style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <h3 className={classes.answer1} onClick={handleFinalLoyal}>+</h3>
                    <h3 className={classes.answer2} onClick={handleFinalContra}>-</h3>
                    <h3 className={classes.answer3} onClick={handleFinalNeutral}>/</h3>
                </div>
            </div> }

            {showFinalScene.loyalL && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalC && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalN && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraL && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraC && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraN && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                   
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralL && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralC && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralN && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

           
    
        </div>
    )
}