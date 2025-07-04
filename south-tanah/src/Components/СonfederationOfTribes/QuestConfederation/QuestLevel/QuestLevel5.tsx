import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import Bandit from "../../../../Images/Bandit.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import ForestInmar from "../../../../Images/ForestInmar.jpg";
import { BattleInTheForest } from "./BattleInTheForest/BattleInTheForest";

export const Level5 = (props:any) => {
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
                    Спустя неделю плодотворной торговли в Лутуте, Неман всё же решил отправиться в Киллат.
                    Но чтобы не тягаться с караваном по лесам Инмара, он взял в аренду обоз и загрузил в него нераспроданный товар, привезённый из Конфедерации, с намерением продать его уже в Киллате.
                    Дорога предстояла нелёгкая, и тянуть с собой всех членов каравана было бы, по крайней мере, глупо, а то и небезопасно.
                    Взяв с собой лишь часть торговцев, они отправились в долгий путь к центру королевства. Оставшаяся группа будет ждать их возвращения здесь.
                    Перед путниками открылась новая, не изведанная природа, которой они за свою жизнь ещё никогда не лицезрели.
                    Густые раскидистые леса и узкая дорога, ведущие их на север, удивляли каждого из них своей красотой и непривычностью.
                    Солнце проскальзывало лучами сквозь кроны деревьев, а птичьи трели завораживали слух торговцев.
                    Казалось, будто весь лес живой и даже камни шепчут. Такая идилия умиротворяла и настраивала на позитив. Что могло пойти не так?
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div>{props.countLoyal}{props.countContra}{props.countNeutral}</div>
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${ForestInmar})`, border: "solid 0.3vw goldenrod"}}>
                {!showMessageQuest.message7 && !showMessageQuest.message8 && !showMessageQuest.message9 && <img src={Bandit} alt="GuardInmar"  className={classes.characterConfederationImg5}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Вдруг навстречу обозу, как из ниоткуда, выскочила свора мужчин, явно похожих на грабителей.
                    Лошади встрепенулись и тут же встали на дыбы перед агрессивной толпой.
                    Один из них вышел прямо перед Неманом и с злостным оскалом посмотрел за его спину, на гружённый обоз.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Разбойник:</h1>
                <p className={classes.question}>
                    Ого! Торговцы из Конфедерации, а это, видимо, ваши товары. Какая удача, что мы вас встретили - такое у нас впервые 
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Что вам нужно от нас?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Уйдите с дороги</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Кто мы вас не касается</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Разбойник:</h1>
                <p className={classes.question}>
                    Я и мои друзья контролируем эту дорогу, и каждый, кто проезжает по ней, должен оплатить проезд
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Это грабёж?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>И не надейся</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Удобно устроились</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Разбойник:</h1>
                <p className={classes.question}>
                    Хватит трындеть! Отдавайте барахло - и катитесь куда угодно.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Пошёл прочь!</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Оставьте хотя бы половину</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>А ты попробуй отними</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                    В это время толпа медленно начала окружать обоз. Похоже, без драки не обойтись.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <BattleInTheForest setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    После нападения Неман не стал искушать судьбу и погнал лошадей дальше, озираясь по сторонам в ожидании ещё каких-нибудь сюрпризов из чащи.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    Оставшаяся дорога к Киллату прошла незаметно - то ли оттого, что торговцы сильно нервничали, то ли оттого, что Неман не давал лошадям отдохнуть, постоянно подгоняя их.
                    Но тот прекрасный вид, которым они любовались в начале поездки на север, уже не казался им таким идеальным. Из-за каждого куста или дерева то и дело чудились лица и силуэты каких-то людей.
                    Не всё оказалось так чудесно, как показалось торговцу в Инмаре, когда он заворожённо гулял по улицам Лутута. Напротив, под красивой внешней стороной этого края скрывалась тёмная личина беззакония, где любой мог оказаться грабителем, воришкой или, куда хуже, убийцей.
                    Что ждёт их дальше - Неман боялся подумать. Будет ли Киллат таким же приветливым, как Лутут, или их ожидает мрачная сторона Инмара? Но возвращаться было уже слишком поздно.
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneConfederation} onClick={handleNextMessage}> 
                        ---Продолжить--- 
                    </h3>
                </div>
            </div> }
        </div>
    )
}