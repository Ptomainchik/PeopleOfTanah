import { useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import OldWoman from "../../../../Images/OldWoman.webp";
import DesertTexture from "../../../../Images/DesertTexture.jpg";
import StreetsOfKillat from "../../../../Images/StreetsOfKillat.jpg";

export const Level6 = (props:any) => {
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
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw goldenrod"}}>
                <p>
                    Наконец, добравшись до Киллата, перед караванщиками предстал город, утопавший в зелени. Будто среди лесов и скал из-под земли вдруг вырос град со шпилями церквей и храмов.
                    А среди построек, куда ни посмотри, возвышались монументы Белого Быка. На этот раз их даже никто не проверял на въезде, а вместо толп стражников и солдат по улицам ходили мужчины и женщины, облачённые в белые рясы.
                    Простых людей здесь также было очень много, но все они передвигались большими группами, изредка спрашивая дорогу у праведников. Видимо, это и есть паломники, посещающие центр Инмара для поклонения своему богу - Быку.
                    От гула, доносившегося из церквей, закладывало уши - так громко звучали трубы, восхваляющие божество. А от запаха благовоний, исходившего ото всюду, порой мутило в голове. Весь город жил одной целью: как можно больше воздать почестей великому Белому Быку.
                    Остановив повозку посреди небольшой площади, Неман спустился на землю, но его место тут же занял другой караванщик из их группы, лишь вскользь бросив: Мы поедем дальше искать рынок. Развлекайся. 
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div>{props.countLoyal}{props.countContra}{props.countNeutral}</div>
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${StreetsOfKillat})`, border: "solid 0.3vw goldenrod"}}>
                {!showMessageQuest.message1 && <img src={OldWoman} alt="OldWoman"  className={classes.characterConfederationImg6}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Как только обоз скрылся за углом, Неман обвёл взглядом площадь и не знал, куда ему направиться дальше.
                    Как неожиданно из-за спины вышла пожилая женщина в старых обносках и хриплым голосом обратилась к нему.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Молодой человек, вы откуда?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Из Конфедерации</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ну из пустыни, а что?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Из далёкого юга</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    По вам сразу видно, что вы не инмарец.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Что меня выдаёт?</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Чего это?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Видимо, из-за одежды</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Вы ни разу не поклонились перед обликом Быка. Да и ваш взгляд выглядит потерянным, словно вы здесь впервые. Что привело вас сюда?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Я торговец</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Торговые дела</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Я хозяин каравана</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    О… В этом городе, кроме сувениров и церковной утвари, вы ничего не найдете. Но можете посетить храмы и местные церкви, если вам это интересно. 
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Это было бы здорово</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Разве что из интереса</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Возможно это стоит того</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Это хорошие мысли. Откуда ты родом - не имеет значения: Белый Бык принимает всех людей в свои объятия.
                    Тебе обязательно понравится, главное - быть открытым к богу. А наши праведники помогут и направят тебя в верном направлении.
                    Главное - не бойся.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Когда-то церковь меня спасла и продолжает помогать и впредь. Когда я была ещё молода и здорова… Извини, тебе интересно?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Да бабуля</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Не очень, но я послушаю</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Продолжайте, продолжайте</p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Так вот о чём это я. А ну да. В моей молодости произошла страшная трагедия в семье. 
                    Отец поступил на службу и пропал без вести, мать не выдержала этого и повесилась, оставив меня одну с маленькими братьями. 
                    Мне приходилось трудиться день и ночь, чтобы их прокормить, но тех денег, что я зарабатывала, совсем не хватало. 
                    Тогда, скрипя сердцем, мне пришлось отдать самого младшего брата в монастырь.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Как же я тогда была не права, думая, что больше никогда его не увижу. 
                    Теперь он служит в местной церкви Сикила и иногда навещает меня. 
                    Пристроив младшего, я думала, что с остальными двумя мне будет легче. Но то, что случилось дальше, разорвало мне душу. 
                    Ночью, когда я была на работе, Кесил, мой средний брат, играя, случайно опрокинул лампу на старшего брата, тот загорелся и, пытаясь сбить пламя, поджёг дом.  
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Наблюдая, как его брат горит заживо, Кесил в ужасе убежал из дома в лес. 
                    Когда я вернулась, то обнаружила пепелище, а посреди улицы лежало обгоревшее тело брата. 
                    Соседи вытащили его тогда из огня, но из-за тяжёлых ожогов он скончался спустя некоторое время, успев только рассказать, что произошло. 
                    Люди, конечно, помогали мне искать Кесила. Но то, что мы тогда нашли в лесу, свело меня с ума окончательно.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Посередине лесной чащи, в траве лежало изувеченное тельце моего братишки. У него не было лица и рук, он был весь изодран клыками животных. 
                    Когда я это увидела, то упала в обморок, а очнувшись, уже ничего не помнила и не понимала, что происходит. 
                    Тогда я была как тряпичная кукла, и меня отвели на местное подворье. Там за мной стали ухаживать настоятельница со своими сестрами.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message12 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Лишь через три года жизни в монастыре ко мне постепенно начал возвращаться разум. И вот тогда я вспомнила всё, что произошло с моей семьей. 
                    Весь ужас, что мне довелось пережить. Идти мне уже было некуда, а по возрасту я не подходила в послушницы. 
                    Но настоятельница не выгнала меня из монастыря, а забрала к себе в келью. Там я и начала проникаться религией. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message13 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Так год за годом, обретя покой, я и сама стала помогать обиженным судьбой людям. 
                    Сначала это была простая помощь с раздачей еды нищим, а затем и уход за тяжело больными и раненными солдатами. 
                    Мне нравилось приносить пользу и помогать обречённым, давая им надежду на завтрашний день. 
                    Я была не одна такая: всё моё тогдашнее окружение стремилось помочь несчастным.
                </p>
                <div>
                    <p className={classes.buttonNextMessageConfederation} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message14 && <div className={classes.blockMessage} style={{border: "solid 0.3vw goldenrod"}}>
                <h1>Бабушка:</h1>
                <p className={classes.question}>
                    Сейчас я также стараюсь не отставать от молодых праведников, но уже не так, как когда-то: старость неумолимо сказывается на самочувствии. 
                    Я бы посоветовала тебе для начала посетить наш главный храм в Киллате. Если хочешь, я проведу тебя туда?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>С удовольствием</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ну показывайте его</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Веди, бабушка </p>
                </div>
            </div> }
            {showMessageQuest.message15 && <div className={classes.openingScene} style={{border: "solid 0.3vw goldenrod"}}>
                <p>
                    - Тут недалеко, иди за мной, - промолвила бабушка и тут же так быстро засеменила ногами в сторону, где над крышами возвышался шпиль белого цвета, что торговец едва успевал за ней. 
                    В пути старушка то и дело рассказывала разные истории о добродетелях церкви и её последователях, о том, что всё в мире создал Белый Бык, и его благосклонность обнимает каждого, кто нуждается в его помощи. 
                    Пока они шли, Неману казалось, будто его проводницу знает весь город. 
                    Все, кто встречался им в дороге, уважительно кланялись старой доброй женщине. 
                    Она излучала такую тёплую и светлую энергию, что казалось, именно в этом и заключается истинное счастье - помогать другим, к чему стремятся многие, но ломаются под жерновами жизни, превращаясь в подобие бесчувственных кукол, как эта старушка, когда на её голову обрушилось столько испытаний. 
                    "Возможно, нет ничего плохого в том, что люди Инмара исповедуют религию Белого Быка", - прозвучало где-то в глубине души молодого торговца.
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