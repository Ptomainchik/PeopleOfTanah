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
    
    }, [buttonFinal, props.countLoyal, props.countContra, props.countNeutral])

    function handleFinalLoyal(){
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: true,
        buttonContra: false,
        buttonNeutral: false,
    });
    }

    function handleFinalContra(){
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: true,
        buttonNeutral: false,
    });
    }

    function handleFinalNeutral(){
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: false,
        buttonNeutral: true,
    });
    }

    //может происходить ошибка если каунты финала будут равны

    
    function loyalPlus(){
        props.setCountLoyal((prev:number) => prev + 5)
    }

    function contraPlus(){
        props.setCountContra((prev:number) => prev + 5)
    }

    function neutralPlus(){
        props.setCountNeutral((prev:number) => prev + 5)
    }



    return (
        <div className={classes.questPage}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <p>
                   Написать: Здесь Неман раскрывает торговую деклорацию и удивляется тому что попало ему в руки.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div>{props.countLoyal}{props.countContra}{props.countNeutral}</div>
            {showMessageQuest && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p className={classes.question}>
                    Написать: Здесь Немана терзают муки совести и он не может решиться какой выбор ему сделать.
                </p>
                    <button onClick={loyalPlus}>loyal++++</button>
                    <button onClick={contraPlus}>contra+++++</button>
                    <button onClick={neutralPlus}>neutral+++++</button>
                <div className={classes.finalBlockAnswer} style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <h3  className={classes.answer1} onClick={handleFinalLoyal}>Оставить деклорации</h3>
                    <h3  className={classes.answer2} onClick={handleFinalContra}>Забрать деклорации</h3>
                    <h3 className={classes.answer3} onClick={handleFinalNeutral}>Затупить</h3>
                </div>
            </div> }

            {showFinalScene.loyalL && <div className={classes.openingScene}>
                <h3>
                    Проигрыш loyalL.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.loyalC && <div className={classes.openingScene}>
                <h3>
                    Проигрыш loyalC.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.loyalN && <div className={classes.openingScene}>
                <h3>
                    Проигрыш loyalN.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.contraL && <div className={classes.openingScene}>
                <h3>
                    Победа contraL.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.contraC && <div className={classes.openingScene}>
                <h3>
                    Победа contraC.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.contraN && <div className={classes.openingScene}>
                <h3>
                    Победа contraN.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.neutralL && <div className={classes.openingScene}>
                <h3>
                    Нейтрал neutralL.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.neutralC && <div className={classes.openingScene}>
                <h3>
                    Нейтрал neutralС.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

            {showFinalScene.neutralN && <div className={classes.openingScene}>
                <h3>
                    Нейтрал neutralТ.
                </h3>
                <p onClick={handleClickHome}>---На главную---</p>
            </div>}

           
    
        </div>
    )
}