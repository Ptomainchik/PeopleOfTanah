import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import Sailor from "../../../../Images/Sailor.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import ShipInmar from "../../../../Images/ShipInmar.jpg";

export const Level3 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false, 
        message5: false,
        message6: false, 
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
    }

    function checkingMessageAccuracy() {
        if(showMessageQuest.message2 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: true, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                })
            } 
            else if(showMessageQuest.message3 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: true, 
                    message5: false,
                    message6: false, 
                })
            }
            else if(showMessageQuest.message4 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: true,
                    message6: false, 
                })
            }
            else if(showMessageQuest.message5 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: true, 
                })
            }
    }

    function handleStateEnding(event: React.MouseEvent<HTMLParagraphElement>) {
        const id = event.currentTarget.id;
        if (id === "1") {
            props.setCountLoyal((prev: number) => prev + 1);
            checkingMessageAccuracy()
        } else if (id === "2") {
            props.setCountContra((prev: number) => prev + 1);
            checkingMessageAccuracy()
        } else if (id === "3") {
            props.setCountNeutral((prev: number) => prev + 1);
            checkingMessageAccuracy()
        }
    }

    function handleNextMessage() {
        if(showMessageQuest.message1 === true){
            setShowMessageQuest({
                message1: false, 
                message2: true, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
            })
        }
        else if(showMessageQuest.message2 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: true, 
                message4: false, 
                message5: false,
                message6: false, 
            })
        } 
        else if(showMessageQuest.message3 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: true, 
                message5: false,
                message6: false, 
            })
        }
        else if(showMessageQuest.message4 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: true,
                message6: false, 
            })
        }
        else if(showMessageQuest.message5 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: true, 
            })
        }
        else if(showMessageQuest.message6 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                    Среди огромного множества пришвартованных судов Корос наконец разглядел тот самый барк "Алиета".
                    На пристани среди бочек сидел парень, явно не выглядевший на капитана, но других людей рядом не было.
                    "Как такой молодой юноша может быть капитаном, да ещё владельцем такого судна?" - подумал Корос.
                    Но в глазах парня читалась уверенность и знание дела. Корос подошёл к нему и спросил невзначай: Странное название для такого корабля - "Алиета"?
                    На что тот ответил: Кажется, вы Корос. Именно таким вас и описывали. Каким таким? - спросил рыцарь. Осторожным, - ответил корабельщик.
                    Судно готово, команда прибудет с минуты на минуту. Можем отправляться хоть сейчас. Тогда чего нам ждать? В путь! - воодушевлённо сказал Корос.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${ShipInmar})`, border: "solid 0.3vw darkred"}}>
                    <img src={Sailor} alt="Sailor"  className={classes.characterInmarImg3}/>
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Корабельшик:</h1>
                <p className={classes.question}>
                    Парень было хотел встать, но тут же осёкся и пристально впился глазами в Короса.
                    От чего тот инстинктивно бросил: - Чего ещё?
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Корабельшик:</h1>
                <p className={classes.question}>
                    Нет, ничего. Просто вы мало похожи на человека, связанного с торговлей. Вы хоть знаете, зачем мы отправляемся в Конфедерацию? 
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Парча</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>За материалом</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ткани и прочее сукно</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Корабельшик:</h1>
                <p className={classes.question}>
                    Нашим друзьям понадобились новые платья, - пошутил корабельщик и тут же смутился, увидев серьёзное выражение лица Короса. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Корабельшик:</h1>
                <p className={classes.question}>
                    Прошу прощения, это была глупая шутка. Ох и влетит мне за это... - насупился паренёк.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Успокойся, не влетит</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ещё как влетит</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Хорошая шутка(рассмеяться)</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Корабельшик:</h1>
                <p className={classes.question}>
                    Пойду-ка я команду соберу. Они ждут в местной таверне, - проговорил корабельщик, поднимаясь с бочки.
                    Но вдруг остановился и протянул руку для орденского рукопожатия. Корос ответил взаимностью, слегка улыбнувшись.
                    Паренёк тут же зашагал к портовым кабакам, быстро скрывшись в толпе.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.openingScene} style={{border: "solid 0.3vw darkred"}}>
                <p>
                    Корос окинул взглядом судно и ощутил, как ветер завывает среди мачт. И тут на него неожиданно накатил давно забытый страх утонуть.
                    Ведь он до сих пор не умел плавать - и только сейчас вспомнил об этом, нервно напевая детскую песенку про моряка и постукивая пальцами по эфесу своего меча.
                    Через полчаса ожидания вся команда была на борту и готовила корабль к отплытию.
                    Как ни странно, молодой корабельщик оказался на совесть умелым капитаном, несмотря на свой возраст. 
                    Он стоял у штурвала и чётко командовал действиями матросов, сновавших по палубе, натягивавших паруса и ловко завязывавших канаты. Иногда он и сам подбегал помочь. 
                    Ощущалось, что он знает свой барк вдоль и поперёк, будто сам его строил.
                    Так, спустя час, "Алиета" уже покидала порт Сикила, разгоняемая северным ветром. Дальше их ждали воды Живого моря, способные как прокормить, так и погубить.
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> 
                        -----Продолжить----- 
                    </h3>
                </div>
            </div> }
        </div>
    )
}