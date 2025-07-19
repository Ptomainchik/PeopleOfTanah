import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import Acolyte from "../../../../Images/Acolyte.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import TempleOfKillat from "../../../../Images/TempleOfKillat.jpg";

export const Level7 = (props:any) => {
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
        message12: false,
        message13: false,
        message14: false,
        message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
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
                    message11: false,
                    message12: false,
                    message13: false,
                    message14: false,
                    message15: false,
                })
            }
            else if(showMessageQuest.message10 === true) {
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
                message10: false,
                message11: true,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
            else if(showMessageQuest.message11 === true) {
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
                message10: false,
                message11: false,
                message12: true,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message12 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: true,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message13 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: true,
                message15: false,
            })
        }
        else if(showMessageQuest.message14 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: true,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
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
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message10 === true) {
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
                message10: false,
                message11: true,
                message12: false,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message11 === true) {
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
                message10: false,
                message11: false,
                message12: true,
                message13: false,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message12 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: true,
                message14: false,
                message15: false,
            })
        }
        else if(showMessageQuest.message13 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: true,
                message15: false,
            })
        }
        else if(showMessageQuest.message14 === true) {
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
                message10: false,
                message11: false,
                message12: false,
                message13: false,
                message14: false,
                message15: true,
            })
        }
            else if(showMessageQuest.message15 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${DesertTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <img src={TempleOfKillat} alt="TempleOfKillat" style={{borderBottom: "solid 0.3vw goldenrod"}}/>
                <p>
                    Наконец они вышли на огромную площадь, где посредине стоял белоснежный храм.
                    "Дальше пойдёшь сам. Тут ты уже должен находиться один на один с богом", - сказала старушка и тут же быстро пошла обратно.
                    "Спасибо вам, бабушка!" - прокричал ей вслед Неман.
                    "Вот это место, о котором говорил хозяин таверны в Лутуте", - подумал он.
                    Уверенным шагом торговец направился к дверям храма. Но что-то внутри него вопило: "Не нужно этого делать!"
                    Отмахнувшись от странных мыслей, Неман потянул за ручку двери. 

                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelConfederation7} style={{border: "solid 0.3vw goldenrod"}}>
                {!showMessageQuest.message1 && <img src={Acolyte} alt="Acolyte"  className={classes.characterConfederationImg7}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Войдя внутрь, молодой торговец тут же ощутил на себе тяжёлый взгляд статуи Белого Быка, озаряемой лучами света и возвышающейся в центре храма. 
                    Этот взгляд пронизывал до костей, словно безмолвно вопрошая: "Зачем ты здесь?"
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Из соседнего зала вышел лысый мужчина, облачённый в белую рясу, с умиротворённым выражением лица.
                    Добрый день. Да благословит вас Белый Бык, - произнёс он. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>(Поклониться)</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ну привет</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Благословление мне не помешает</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Мы рады видеть любого человека в этих стенах. Уже сам факт вашего присутствия здесь - есть воля бога, приведшего вас к нам.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Возможно и так</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Меня никто не направляет</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Я сам сюда пришёл</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Вы - чужеземец. Я понимаю ваши сомнения: старые стереотипы не отпускают вас. Но оглянитесь! Если бы не бог, вы вряд ли оказались бы в этом месте.
                    Ну что же, что вас сюда привело?
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Я уже и сам незнаю</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Просто прогуливался</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Интерес</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Причины не важны. Главное - ваше присутствие здесь. Позвольте мне просветить вас и поведать о Белом Быке? 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>С радость послушаю</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Как хотите</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Было бы, не плохо</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    В начале времён, когда ещё ничего не существовало, явился Бык. 
                    Первым ударом копыта он создал время, вторым - моря и океаны, равнины и горы, леса и поля.
                    Когда мир обрёл свои очертания, бог ударил копытом в третий раз - и сотворил мужчину и женщину.
                    Четвёртым ударом он призвал своих детей, и те породили всю фауну по образу и подобию своему.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Первые люди жили бок о бок с Белым Быком и его детьми. Он направлял и оберегал их, а они возводили грандиозные храмы и скульптуры в Его честь.
                    Спустя четыре тысячи лет, когда Владыка осознал, что учить людей больше нечему, Он покинул их вместе со своими детьми, наказав: "Живите в гармонии с миром и друг другом"
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Шли века, и люди стали забывать о своём создателе, живя как им вздумается. Стерелись заветы и учения, дарованные им Владыкой.
                    Храмы опустели, молитвы больше не возносились, а в сердцах людей поселились злоба и зависть.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Наблюдая за тем, что происходит с людьми из запретного мира, Белый Бык разгневался и обрушил на них всемирный катаклизм, который ныне зовётся "Эпохой Зимы".
                    Хлад поглотил всё и вся - практически весь Танах превратился в ледяную пустыню.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Когда холода отступили, большинство людей погибло, замёрзнув насмерть.
                    Те, кто пережил катаклизм, осознали свои ошибки и вспомнили о своём Создателе.
                    Возобновив молитвы и вновь отстраивая храмы, они вернулись на истинный путь. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Но были и те, кто возненавидел Белого Быка, проклиная Его за гибель родных в ледяном плену.
                    Не ведая, что творят, эти люди стали осквернять святыни и убивать верующих, тем самым предав Создателя и пробудив Его гнев вновь.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message12 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    На этот раз Владыка заглянул в сердца всех людей, и тех, в ком узрел тьму, превратил в изуродованных существ, лишь отдалённо напоминающих людей.
                    Так в мире появились прочие расы. Лишь вера в Белого Быка сможет вернуть им истинный облик - но уже по ту сторону жизни, в обители запретного мира Создателя.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message13 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    В нынешние времена мы продолжаем восхвалять Бога, дабы не повторился ужас, пережитый нашими предками.
                    Храним Его заветы: чтим всех людей в этом мире, а наше королевство стало оплотом Его веры и её колыбелью на континенте.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message14 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Праведник:</h1>
                <p className={classes.question}>
                    Тебе понравилось? Погоди, я принесу ещё книг - и ты узнаешь гораздо больше о Белом Быке. А пока можешь осмотреться в храме.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>С нетерпением буду ждать вас</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Да, да, идите</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Я пока что поразглядываю статую</p>
                </div>
            </div> }
            {showMessageQuest.message15 && <div className={classes.openingScene}>
                <p>
                    Улыбнувшись, праведник направился в соседний зал, закрыв за собой деревянную дверь, изысканно украшенную резьбой.
                    Неман поднял взгляд на статую Белого Быка и замер, всматриваясь в глаза божества. Долгие годы ему, как и всем, рассказывали о глупости инмарской религии - о том, как их вера была всего лишь произведением искусства прошлых гениев, волей судьбы попавших в эти земли.
                    Теперь он думал иначе, и все былые догмы потеряли значение. Какая разница, кто и когда существовал? Был ли Бык в этом мире на самом деле или же это плод воображения людей, перенёсших жуткий катаклизм? 
                    Ведь если это приносит пользу всем, заставляет задуматься о хрупкости жизни и помогает справляться с тяготами, тогда и бог становится истиной, ведущей к гармонии и благополучию.
                    Переварив нахлынувшие мысли, торговец опустил взгляд к подножию статуи, где увидел тот самый кирпич с вырезанным треугольником. Такой долгий путь пришлось пройти до этого момента, но интерес, прежде так сильно обуревавший его, превратился в простое любопытство.
                    Он подошёл к монументу и, наклонившись, вытащил злополучный кирпич. За ним в небольшой нише лежал красный свиток с печатью Высшего совета королевства Инмар. 
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> 
                        -----Продолжить----- 
                    </h3>
                </div>
            </div> }
        </div>
    )
}