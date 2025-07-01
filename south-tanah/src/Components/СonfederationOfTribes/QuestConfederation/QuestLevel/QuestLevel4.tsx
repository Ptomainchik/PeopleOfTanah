import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import Innkeeper from "../../../../Images/Innkeeper.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import Tavern from "../../../../Images/Tavern.jpg";
import StreetsOfLutut from "../../../../Images/StreetsOfLutut.jpg";
import Certificate from "../../../../Images/Certificate.webp";
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
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <img src={StreetsOfLutut} alt="StreetsOfLutut" style={{borderRight: "solid 0.3vw goldenrod", borderLeft: "solid 0.3vw goldenrod", borderBottom: "solid 0.3vw goldenrod"}}/>
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
            <div>{props.countLoyal}{props.countContra}{props.countNeutral}</div>
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${Tavern})`, border: "solid 0.3vw goldenrod"}}>
                <img src={Innkeeper} alt="Innkeeper"  className={classes.characterConfederationImg4}/>
            </div>
            {showMessageQuest.message1 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <img src={Certificate} alt="Certificate"/>
                <h3 className={classes.inscription}>
                    Лутут
                    <hr/>
                    Таверна: "Храмой песчанник"
                    <hr color="black"/>
                    Поднялся южный ветер
                    <hr/>
                </h3>
                <p>
                    Развернув торговое свидетельство того бедолаги, Неман опешил.
                    Вот оно. Но что это? Где же имя и название торгового артели?
                    Здесь не было ничего полезного. Первые две строки походили на адрес.
                    А третья... третья вовсе не имела смысла.
                    Первое, что можно было попытаться сделать, чтобы распутать этот клубок - найти упомянутую таверну.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
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
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                    Хозяин таверны произнёс: "Хороший день для игры в 'Глухого короля'".
                    И тут же вынул из кармана колоду инмарских игральных карт.
                    Откуда молодому торговцу знать игры Инмара, но отказываться уже было поздно, да и интерес к тому, что будет происходить дальше, не оставлял в покое.
                    Неман молчаливым кивком головы согласился. Присев за ближайший стол, трактирщик стал раскладывать карты.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            
            {showMessageQuest.message4 && <Cards setCountLoyal={props.setCountLoyal}
        setCountContra={props.setCountContra} 
        setCountNeutral={props.setCountNeutral}
        handleNextMessage={handleNextMessage}/>}
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Это точно. Местные торговцы, узнав о твоём отъезде, организовали ставки на твоё возвращение. Пока лидирует вариант с твоей гибелью.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Будет смешно, когда я вернусь</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Не удивительно</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ха-ха, я так и думал</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Не обращай внимания, половина из них — трусливые хорьки, боящиеся отойти от прилавка. Им до тебя далеко.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Мы закупили самые лучшие товары, которые только смогли найти в округе. Надеюсь, они быстро окупятся на рынках Инмара. 
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Так и будет</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Скорее да, чем нет</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Они жадные, им точно понравится</p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Если у тебя всё получится, постарайся не растратить всё в их тавернах. Лучше вообще обходи их стороной, иначе останешься с пустыми карманами.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Меня они не интересуют</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>В случае крайней жажды</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Может всего одну кружечку пенного</p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Не будь глупцом, помни: Инмар ненавидит нас, хотя и торгует. Они делают это сквозь зубы.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Буду на чеку</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Постараюсь не вляпаться</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Они до сих пор верят в Быка</p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Хозяин таверны:</h1>
                <p className={classes.question}>
                    Ну что ж. Караван готов и ждет только тебя. Я буду ждать твоего возвращения живым и здоровым, с полными тюками, набитыми инмарскими товарами.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
        </div>
    )
}