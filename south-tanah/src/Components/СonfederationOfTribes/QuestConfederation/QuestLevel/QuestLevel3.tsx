import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import GuardInmar from "../../../../Images/GuardInmar.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";

export const Level3 = (props:any) => {
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
            })
        }
        else if(showMessageQuest.message9 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${DesertTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <p>
                    Вдали показались сторожевые крепости и пограничные башни Инмара. За ними лежал путь к портовому городу Лутут - тому самому месту, которого опасаются все торговцы. 
                    Здесь уже не действовали законы Конфедерации, а по улицам слонялись пьяные солдаты и моряки, только и ждущие случая пристать к чужеземцу с нагруженными верблюдами.
                    Заметив приближающийся караван, к Неману стал решительно приближаться стражник в стальных доспехах. 
                    "Главное - не дрогнуть", - подумал торговец, стараясь сохранить дружелюбное и уверенное выражение лица.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelConfederation3} style={{border: "solid 0.3vw goldenrod"}}>
                {!showMessageQuest.message7 && !showMessageQuest.message8 && !showMessageQuest.message9 && <img src={GuardInmar} alt="GuardInmar"  className={classes.characterConfederationImg3}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    Спустившись с верблюда, Неман подошёл к приближающемуся стражнику. Перед ним стоял взрослый мужчина крепкого телосложения, облачённый в полные доспехи.
                    Стараясь не выдать нервов, торговец первым делом подумал: как этот человек ещё не сварился заживо в своей металлической броне под палящим солнцем?
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                   Вы находитесь на границе королевства Инмар. Куда вы направляетесь и по какой причине, все торговые караваны должны иметь при себе свидетельство на право торговли. Все противоправные действия будут караться на месте. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Я торговец(показать свидетельство)</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Это мой караван(показать свидетельство)</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Не нервничайте(показать свидетельство)</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    Стражник осмотрел документ, взглянул исподлобья на Немана и, усмехнувшись, сказал: Кажется, всё в порядке. Можете проходить.
                    Но предупредил: Вам нужно отметиться в списках торговцев, чтобы получить временный пропуск для нахождения на землях Инмара. Имейте в виду - не все здесь будут вам рады. За вашу безопасность отвечаете только вы сами.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    Старайтесь не привлекать внимания. В городе и так неспокойно, а вдобавок участились случаи незаконного перехода границы.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Учту ваши предостережения</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Постараюсь</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Мы всего лишь торговцы</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    Вчера поймали одного, бегал тут уже две недели, всё разнюхивал, что да как. Без документов, кричал будто он состоит в лиге караванщиков, а свидетельство просто забыл. 
                    Вроде ждёт какого то человека, который ему его привезёт со дня на день. Придумал же, торгаш, да без товара и золота. Долго его пытали, крепкий оказался, но не выдержал, помер.  
                </p>
                <div className={classes.answerBlock}>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    А вы случаем не тот о ком он говорил? 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Точно нет</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Даже не представляю о ком идёт речь</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Нет, это просто безумец</p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Едва сдерживаясь, чтобы стража не заподозрила, что он понял, о ком идёт речь, Неман махнул рукой каравану - и они двинулись дальше по дороге в Лутут.
                    Ужас и трепет, охватившие торговца, были нестерпимы. Но сейчас любое проявление нервозности могло стоить ему и его людям не только товаров и золота, но, возможно, и жизней.  
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Тревожные мысли не давали покоя. Зачем этот караванщик испытывал судьбу, играя с огнём? Почему так суетился на границе? И как оказался без денег и товара?
                    Всё это было слишком подозрительно, чтобы быть простым совпадением. Единственная ниточка - свидетельство, лежавшее во внутреннем кармане Немана.
                    Но сначала нужно было спокойно попасть в город, не привлекая внимания стражников, излишней нервозностью. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.openingScene}>
                <p>
                    Спустя некоторое время караван вошёл в город. К счастью, искать место для регистрации торговцев долго не пришлось.
                    Прямо на въезде, у ворот Лутута, к ним подошёл человек с серьёзным выражением лица и потребовал показать документы, после чего внимательно осмотрел весь караван и его груз, параллельно записывая что-то в красной толстой книге.
                    Затем он предложил ознакомиться с записью и, если всё описанное было верно, поставить свои инициалы и расписаться под ней всей группе торговцев.   
                    Когда бюрократические формальности были улажены, мужчина достал из сумки связку серебряных жетонов с выгравированной головой быка, подвешенных на простых верёвках.
                    Вручив каждому члену каравана по одному, он строгим тоном потребовал не снимать их нигде, пока они находятся в Инмаре. На обратном же пути эти жетоны необходимо было сдать и оплатить пошлину.
                    Когда они вошли в город, перед ними предстал портовый град во всей красе: брусчатые улицы, множество указателей. На одном из них значилось: "Рынок".
                    Бросив взгляд на своих торговцев, Неман приказал им направляться туда и ожидать его там. Сам же он решил прогуляться по городу и обследовать такой незнакомый и завораживающий мир.   
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