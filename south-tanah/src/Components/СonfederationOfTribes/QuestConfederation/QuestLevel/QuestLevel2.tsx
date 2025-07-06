import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import RegistanWoman from "../../../../Images/RegistanWoman.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import CamelCaravaner from "../../../../Images/CamelCaravaner.jpg";
import LongHaul from "../../../../Images/LongHaul.jpg";

export const Level2 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false, 
        message5: false,
        message6: false, 
        message7: false, 
        message8: false,
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
    }

    function checkingMessageAccuracy() {
        if(showMessageQuest.message1 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: true, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
                })
            }
            else if(showMessageQuest.message6 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: true, 
                    message8: false,
                })
            }
            else if(showMessageQuest.message7 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: true,
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
                message7: false, 
                message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
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
                    message7: false, 
                    message8: false,
                })
            }
            else if(showMessageQuest.message6 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: true, 
                    message8: false,
                })
            }
            else if(showMessageQuest.message7 === true) {
                 setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: true,
                })
            }
             else if(showMessageQuest.message8 === true) {
                props.setShowLevel((prev: number) => prev + 1);
            }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${DesertTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <p>
                    Бредя по улочкам родного города, Неман то и дело обращал внимание на то, что казалось ему обыденным и давно забытым. В его памяти всплывали картины детства: вот он, ещё сорванцом, пытается пробраться в солдатские бараки, чтобы посмотреть на тренировки Пустынников; вот на соседней улице они с ребятами пытаются продать прохожим украденный у отца товар; вот ночные посиделки на площади, где взахлёб рассказывают страшные истории о жутких армиях с севера, только и ждущих момента, чтобы разрушить их край.
                    Раньше он не придавал этому особого значения. Но теперь, осознавая, что покидает родной город и может никогда не вернуться, всё заиграло новыми красками. Будто вся жизнь промелькнула перед глазами за эти мгновения - такая знакомая и понятная.
                    Так, погружённый в воспоминания, он и не заметил, как оказался у снаряжённого каравана, где его уже ждали.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${CamelCaravaner})`, border: "solid 0.3vw goldenrod"}}>
                {!showMessageQuest.message1 && !showMessageQuest.message6 && !showMessageQuest.message7 && <img src={RegistanWoman} alt="RegistanWoman"  className={classes.characterConfederationImg2}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                   Вот и караван. Оказавшись на месте, Неман заметил, как к нему приближалась запыхавшаяся незнакомая девушка. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Незнакомка:</h1>
                <p className={classes.question}>
                    Фух, успела. Здравствуйте. Весь город судачит о вашем рискованном путешествии. Не могли бы вы уделить мне минуту вашего времени, это совсем недолго займет.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>С огромным удовольствием</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ну если это не долго</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Не могу отказать такой даме</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Незнакомка:</h1>
                <p className={classes.question}>
                    Замечательно. Дело в том, что один торговец, по совместительству мой муж, вчера отбыл на север страны по своим делам. Но вот досада: он забыл дома торговое свидетельство.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Незнакомка:</h1>
                <p className={classes.question}>
                    Вы как никто понимаете, насколько важно иметь свидетельство при себе. Ведь без него он не сможет ничего сделать. Вы же следуете на север?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Да</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Скорее всего, так</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Вы и так это знаете</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Незнакомка:</h1>
                <p className={classes.question}>
                    Не могли бы вы передать свидетельство моему мужу? Он будет ждать вас в приграничных землях, прямо на дороге к инмарскому городу Лутут.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Хорошо</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Это странно, но ладно</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Конечно, а как я его узнаю</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Не успев опомниться, Неман обнаружил в руках бумажный свиток с жёлтым теснением - такой же, как и у него самого. Это явно было торговое свидетельство, которое выдают всем караванщикам.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Тем временем, самой девушки и след простыл. Странная, - подумал он. Ну что теперь поделаешь, не возвращаться же. К тому же, уже пообещал.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <img src={LongHaul} alt="LongHaul" style={{borderRight: "solid 0.3vw goldenrod", borderLeft: "solid 0.3vw goldenrod", borderBottom: "solid 0.3vw goldenrod"}}/>
                <p>
                    Раскалённое солнце обжигало кожу, а воздух тяжёлым эхом отдавался в лёгких. Две недели пути к пограничным землям наконец подходили к концу, хотя казались вечностью.
                    Измученные животные и люди скоро смогут передохнуть. Оставалось лишь перейти границу - и вот он, горделивый, но зловещий Инмар.
                    Но где же найти того рассеянного торговца, что забыл дома своё свидетельство?
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> 
                    -----Продолжить-----
                </h3>
            </div> }
        </div>
    )
}