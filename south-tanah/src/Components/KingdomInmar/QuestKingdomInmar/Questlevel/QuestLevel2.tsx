import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import Master from "../../../../Images/Master.webp";
import Scroll from "../../../../Images/Scroll.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import CabinetCastle from "../../../../Images/CabinetCastle.jpg";

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
        message9: false, 
        message10: false, 
        message11: false, 
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
                    message11: false, 
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
                })
            }
             else if(showMessageQuest.message11 === true) {
                props.setShowLevel((prev: number) => prev + 1);
            }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                    Выйдя из своей комнаты, Корос проследовал по длинному коридору до высокой каменной винтовой лестницы, ведущей в покои магистра. 
                    Поднявшись на последний этаж центральной башни орденского замка, он оказался в небольшом помещении с тремя дверями вдоль стены.
                    Две из них вели в кабинет сержанта, отвечающего за военное обучение ордена в Сикиле, и в комнату главного казначея ордена в этом городе. 
                    Центральная же дверь принадлежала кабинету магистра Пармера, также курирующего дела ордена в Сикиле. Несмотря на должность, сам магистр появлялся здесь редко, предпочитая свою региональную резиденцию. 
                    Поэтому Корос видел его всего несколько раз за годы службы, да и сам постоянно был в разъездах по незначительным поручениям.
                    Глубоко вдохнув и медленно выдохнув - будто готовясь к тяжёлому разговору - Корос твёрдо постучал. Затем, потянув за ручку, тихо спросил: К вам можно?
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${CabinetCastle})`, border: "solid 0.3vw darkred"}}>
                <img src={Master} alt="Master"  className={classes.characterInmarImg2}/>
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Да-да, войди. Я давно тебя жду, - услышал в ответ Корос.
                    Войдя в кабинет, он увидел магистра, стоящего посреди комнаты. 
                    Тот имел явно болезненный вид, но при этом, что было странно, облачился в полное боевое обмундирование.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Магистр:</h1>
                <p className={classes.question}>
                    Доброе утро, - магистр протянул руку, сложив пальцы в символическом жесте - будто держал невидимый ключ.
                    Корос, не колеблясь, обхватил его кисть особым образом - так, как учили при посвящении.
                    - Как твои дела, Корос? - голос Пармера прозвучал хрипло, но в уголках его губ дрогнула тёплая улыбка.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Не жалуюсь</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Бывало и лучше</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Вам ли не знать</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Магистр:</h1>
                <p className={classes.question}>
                    Вот и хорошо. Не буду ходить вокруг да около, а перейду сразу к делу. Ты уже полжизни служишь ордену, и твоя верность не раз была доказана поступками.
                    Настал час серьёзного дела, связанного с огромными рисками. Как для ордена, так и для тебя. Если ты готов, пути назад уже не будет, - твёрдо проговорил магистр.
                    - Я готов, - с уверенностью в голосе ответил Корос.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Магистр:</h1>
                <p className={classes.question}>
                    Я и не сомневался. Как ты знаешь, у нас сейчас мир с Конфедерацией племён, но то, что он сохранится ненадолго, кажется, понимают все.
                    Как ты относишься к поездке на юг?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Готов</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Разве у меня есть выбор</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Звучит интригующе</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Магистр:</h1>
                <p className={classes.question}>
                    В порту нашего города тебя будет ждать зафрахтованный корабль "Алиета", выполняющий торговые перевозки между Инмаром и Конфедерацией.
                    Его хозяин, и по совместительству капитан, - наш человек, но даже он не знает подробностей.
                    Для него ты просто представитель ордена, отправляющийся закупать товар для нужд нашей организации.  
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Что дальше?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Понятно</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Хм... Интересно</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Магистр:</h1>
                <p className={classes.question}>
                    По прибытии в Конфедерацию тебя будет ждать местный караванщик.
                    Он сам подойдёт к тебе, покажет свой товар, а затем предложит сыграть в кости.
                    Ты должен согласиться. Затем ты предложишь ему сделку о закупке большого количества тканей.
                    На что он скажет, что должен проверить склады, так как такое количество материала необходимо подготовить.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    После чего он предложит посетить их с ним вместе. Уже на складе ты отдашь ему вот этот свиток, который лежит на столе.
                    Содержимое тебя не должно интересовать - твоё дело лишь доставить его незаметно.
                    Насчёт денег за товар можешь не беспокоиться - всё уже оплачено.
                    После погрузки товара ты отправишься обратно в Инмар.
                    О том, что происходило, не должна знать ни одна живая душа.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Если ты потерпишь провал или тебя раскроют, незамедлительно уничтожь свиток. А далее просто действуй по ситуации.
                    Но помни: никто не должен видеть то, что находится внутри. Эти бумаги превыше всего. И если потребуется принести в жертву твою жизнь...
                    То ты должен будешь готов пойти на это.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Теперь ты понимаешь, почему подходишь для этого дела как никто другой?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Да</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Кажеться да</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Похоже, я идеальный кандидат</p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Тогда отправляйся немедленно. Орден рассчитывает на тебя, - сказал магистр, положив руку на плечо Короса.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Взять свиток--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                    Положив свиток в потайной карман на броне (который предусмотрительно имелся у него, учитывая поручения по доставке документов и депеш за долгие годы службы), Корос молча вышел из кабинета и направился во двор замка.
                    По пути к докам он раздумывал над заданием, вспоминая молодость в северных землях Конфедерации, когда-то принадлежавших Инмару. 
                    О том ужасе, что довелось пережить, когда неблагодарные жители подняли бунт, жгли дома и убивали всех, кто представлял власть Инмара.
                    Тогда пострадала и его семья - в пылу восстания, из-за неразберихи, повстанцы сожгли их дом, где погибла ни в чём не повинная мать. 
                    Отца закололи на улицах полыхающего города, приняв за солдата. Десятилетний Корос бежал с тёткой, как и многие охваченные паникой люди.
                    Эта боль засела глубоко в сердце, и он искал способ отомстить Конфедерации. Не найдя иного выхода, подросший Корос вступил в орден Ключей, надеясь когда-нибудь припомнить южным соседям всё. 
                    И вот возможность представилась - пусть не огнём и мечом, но он наконец отомстит за гибель родных.
                    Когда послышался шум волн, разбивающихся о скалы и пристани, Корос очнулся от мыслей и направился искать корабль под названием "Алиета".
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> 
                    -----Продолжить-----
                </h3>
            </div> }
        </div>
    )
}