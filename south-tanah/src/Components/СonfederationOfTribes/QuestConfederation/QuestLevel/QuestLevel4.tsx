import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import Innkeeper from "../../../../Images/Innkeeper.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import StreetsOfLutut from "../../../../Images/StreetsOfLutut.jpg";
import { Cards } from "../Cards/Cards";

export const Level4 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false, 
        message5: false,
        message6: false, 
        message7: false, 
        message8: false, 
        message9: false, 
        message10: false,
        message11: false,
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    const [showOpeningScene2, setShowOpeningScene2] = useState(false);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
        setShowOpeningScene2(true);
    }

    function handleModalOpening2() {
        setShowOpeningScene2(false);
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
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
                    message9: false, 
                    message10: false,
                })
            }
            else if(showMessageQuest.message8 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                    message9: true, 
                    message10: false,
                })
            }
            else if(showMessageQuest.message9 === true) {
                setShowMessageQuest({
                    message1: false, 
                    message2: false, 
                    message3: false, 
                    message4: false, 
                    message5: false,
                    message6: false, 
                    message7: false, 
                    message8: false, 
                    message9: false, 
                    message10: true,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
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
                message9: false, 
                message10: false,
            })
        }
        else if(showMessageQuest.message8 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
                message9: true, 
                message10: false,
            })
        }
        else if(showMessageQuest.message9 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false, 
                message5: false,
                message6: false, 
                message7: false, 
                message8: false, 
                message9: false, 
                message10: true,
            })
        }
        else if(showMessageQuest.message10 === true) {
        props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${DesertTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <img src={StreetsOfLutut} alt="StreetsOfLutut" style={{borderBottom: "solid 0.3vw goldenrod"}}/>
                <p>
                    Неман, словно ребёнок, удивлялся всему, куда ни падал его взор. В этом огромном городе всё было так незнакомо и завораживающе.
                    Каменные строения переплетались с деревянными постройками так гармонично, будто составляли единое целое. Черепица на крышах будто скатывала солнечные лучи вниз.
                    Местные жители оказались удивительно приветливыми - каждый встречный отвечал улыбкой. Высокие городские стены, казалось, оберегали эту идиллическую атмосферу, не позволяя проникнуть внутрь ничему дурному.
                    Двойственное ощущение от расхождения между прежними представлениями об Инмаре и реальной картиной вводило Немана в замешательство.
                    "Свидетельство!" - эта мысль резко прервала его размышления, и торговец тут же потянулся к внутреннему карману своего джеллабы.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelConfederation4} style={{border: "solid 0.3vw goldenrod"}}>
                <img src={Innkeeper} alt="Innkeeper"  className={classes.characterConfederationImg4}/>
            </div>
            {showOpeningScene2 && <div className={classes.openingScene}>
                <div className={classes.scroll} ></div>
                <h3 className={classes.inscription}>
                    Лутут
                    <hr/>
                    Таверна: "Хромой песчанник"
                    <hr/>
                    Поднялся южный ветер
                    <hr/>
                </h3>
                <p>
                    Развернув торговое свидетельство того бедолаги, Неман опешил.
                    Вот оно. Но что это? Где же имя и название торгового артели?
                    Здесь не было ничего этого. Первые две строки походили на адрес.
                    А третья... третья вовсе не имела смысла.
                    Первое, что можно было попытаться сделать, чтобы распутать этот клубок - найти упомянутую таверну.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening2}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Недолго плутая по закоулкам города, Неман вскоре нашёл таверну "Хромой пёсчанник".
                    Войдя внутрь, на пороге его встретил хозяин таверны, пристально вглядывающийся в глаза торговца.
                    Первое, что пришло ему на ум, - сказать фразу из свидетельства: "Дует южный ветер".
                    Трактирщик тут же встрепенулся, а его взгляд изменился, будто он его уже ждал.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                    Хозяин таверны произнёс: "Хороший день для игры в 'Глухого короля'.
                    И тут же вынул из кармана колоду инмарских игральных карт.
                    Откуда молодому торговцу знать игры Инмара, но отказываться уже было поздно, да и интерес к тому, что будет происходить дальше, не оставлял в покое.
                    Неман молчаливым кивком головы согласился. Присев за ближайший стол, трактирщик стал раскладывать карты.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            
            {showMessageQuest.message3 && <Cards setCountLoyal={props.setCountLoyal}
        setCountContra={props.setCountContra} 
        setCountNeutral={props.setCountNeutral}
        handleNextMessage={handleNextMessage}/>}
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Я вижу, у тебя жетон торговца. Стало быть, предыдущий план изменился?
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Я же торговец</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>По другому в Инмар не попасть</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Это всего лишь необходимось</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                   В молодости я тоже ходил с караванами, и мне нравилась та романтика пустыни. Много мне довелось повидать за время торговых странствий. 
                   Но раскалённый воздух, обжигавший лёгкие, и бескрайние барханы Конфедерации до сих пор вспоминаются с ностальгией, - тихо произнёс трактирщик, от чего на его щеках проступил лёгкий румянец.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    А как сейчас обстоят дела с прибылью у наших братьев? Прибыль, небось, рекой течёт после того, как открылись границы? 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Всё стало лучше</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Не жалуются</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Надеюсь так и останется</p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Ладно, хватит воспоминаний. Ты же сюда не поболтать пришел. Не отвечай, сам всё вижу. 
                    Вырядился как заправский торгаш, ещё и товаров с собой приволок наверняка. 
                    Долго испытывать твоё терпение не буду, так как и сам рискую получить за это по полной.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    То, что ты ищешь, находится к северу отсюда, в городе Киллат. Там, на местной площади, стоит храм Белого Быка. Внутри храма, посередине, есть алтарь самого божества в виде статуи. 
                    У его подножия имеется выемка, заложенная кирпичом, на котором вырезан треугольник. Под ним и хранится твоя заветная цель.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    А теперь проваливай отсюда и забудь меня навсегда. Недостаёт мне только того, чтобы меня обвинили в содействии Конфедерации.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.openingScene}>
                <p>
                    Не заставляя ждать гнева трактирщика, Неман вышел из таверны на улицу. 
                    И побрел на рынок, где его ждали караванщики, попутно обдумывая то, что ему сейчас довелось увидеть и услышать. 
                    Ощущение, что он вляпался в какие-то неприятности или оказался не в том месте не в то время, сдавливало горло и не давало нормально дышать. 
                    Инмарец, который с теплотой вспоминает о своих торговых странствиях по землям Конфедерации да ещё и знающий тонкости устройства караванного дела, - это уже аномалия, судорожно подумал Неман. 
                    И что за странная заветная цель, о которой говорил хозяин таверны? 
                    Кажется, тот бедолага не был простым торговцем. Страх и изнуряющий интерес заставляли Немана задуматься о поездке в Киллат. 
                    К тому же, там явно можно будет набрать первоклассного товара для продажи на родине. Решено, направляемся в центр королевства Инмар, - чуть было не воскликнул он вслух.
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> -----Продолжить----- </h3>
                </div>
            </div> }
        </div>
    )
}