import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import Tradesman from "../../../../Images/TradesmanRegistan.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";

export const Level1 = (props:any) => {
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
        if(showMessageQuest.message2 === true) {
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
                <p>
                    Лучи солнца озарили небольшой, но довольно благоустроенный дом. По меркам простых жителей пустыни жилище Немана - молодого торговца из караванщиков - считалось зажиточным.
                    Всё своё детство он провёл в этих стенах, иногда сопровождая отца в торговых странствиях. На местном рынке у них была своя лавка, где мать и сёстры продавали товары, добытые главой семьи. 
                    Для маленького Немана рынок стал и детской площадкой, и первой школой торгового дела. Теперь всё семейное дело принадлежало ему одному, и его процветание зависело лишь от его усилий. 
                    Прибыль, конечно, позволяла жить безбедно, но молодого караванщика манило нечто большее. Редкие поездки в города Конфедерации для закупки товаров обеспечивали стабильность, но мысль о расширении дела не давала покоя.
                    Просчитав все риски, Неман решился на отчаянный шаг - снарядить караван в само королевство Инмар. Это путешествие было опасным, но сулило неслыханную прибыль. Пока между государствами сохранялся хрупкий мир, такой шанс нельзя было упускать.
                    В день отъезда Неман в последний раз окинул взглядом родной дом и направился на рынок, где его уже ждал Меруд - торговец и старый друг, работавший на него.    
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelConfederation1} style={{border: "solid 0.3vw goldenrod"}}>
                <img src={Tradesman} alt="Tradesman"  className={classes.characterConfederationImg1}/>
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Наконец-то ты явился! Похоже, твоя ночь была полна раздумий и страха перед неизвестностью. Я бы на твоем месте не отважился на подобное.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Сколько я тебя знаю, никогда не думал, что ты на такое отважишься. Скажи честно, между нами, что тебя на это подтолкнуло?
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Хочу посмотреть мир</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Огромная прибыль</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Жажда приключений</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Я так и думал. Не переживай, я присмотрю за лавкой. Когда вернёшься, всё будет в полном порядке. Отец гордился бы тобой.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Не хочу тебя пугать, но ты отправляешься в королевство Инмар. Некоторые караваны оттуда не возвращаются. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Всё будет хорошо</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Страх порождает интерес</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Не попробуешь - не узнаешь</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Это точно. Местные торговцы, узнав о твоём отъезде, организовали ставки на твоё возвращение. Пока лидирует вариант с твоей гибелью.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Будет смешно, когда я вернусь</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Не удивительно</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ха-ха, я так и думал</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Не обращай внимания, половина из них — трусливые хорьки, боящиеся отойти от прилавка. Им до тебя далеко.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Мы закупили самые лучшие товары, которые только смогли найти в округе. Надеюсь, они быстро окупятся на рынках Инмара. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Так и будет</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Скорее да, чем нет</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Они жадные, им точно понравится</p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Если у тебя всё получится, постарайся не растратить всё в их тавернах. Лучше вообще обходи их стороной, иначе останешься с пустыми карманами.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Меня они не интересуют</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>В случае крайней жажды</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Может всего одну кружечку пенного</p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
                <p className={classes.question}>
                    Не будь глупцом, помни: Инмар ненавидит нас, хотя и торгует. Они делают это сквозь зубы.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Буду на чеку</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Постараюсь не вляпаться</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Они до сих пор верят в Быка</p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Меруд:</h1>
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