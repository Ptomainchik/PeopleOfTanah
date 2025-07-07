import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import MorningSquire from "../../../../Images/MorningSquire.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import RoomCastle from "../../../../Images/RoomCastle.jpg";

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
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <p>
                    Наконец-то эта ночь закончилась. Перевернувшись на спину в постели, подумал про себя Корос.
                    Солнце уже взошло и освещало его небольшую комнату, но свечи в лампах и просто расставленные по ней продолжали гореть ещё с вечера.
                    Вчерашний недолгий разговор с сержантом, который сообщил ему, чтобы тот готовился к встрече с самим Сикильским магистром ордена, не давал покоя всю ночь.
                    Мысли о предстоящей встрече с одним из глав ордена Ключей то и дело прерывали сон, превращая его в подобие пытки.
                    "Что нужно магистру от меня? Где я оступился? В чём моя ошибка?" - эти вопросы не давали заснуть и терзали голову уже немолодого рыцаря Короса.
                    В своей жизни он видел магистра лишь однажды - тогда, когда вступал в орден, и тот проводил инициацию, принимая клятву верности у двадцатидвухлетнего юноши.
                    С тех пор прошло долгих двадцать лет, за которые он так ничего и не добился на поприще служения ордену, лишь изредка получая задания по доставке королевских депеш.
                    "Посыльный - вот чего я добился за всю жизнь", - с горечью подумал Корос.
                    В коридоре замка раздались громкие шаги, будто его штурмуют. А через секунду в дверь ввалился тучный сквайр.
                    "Такой, кажется, мог бы и свинью целиком сожрать - и не подавиться", - едва сдержав смех, подумал Корос.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${RoomCastle})`, border: "solid 0.3vw darkred"}}>
                {!showMessageQuest.message10 && <img src={MorningSquire} alt="MorningSquire"  className={classes.characterInmarImg1}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    С широкой улыбкой сквайр подошёл к кровати, где лежал Корос, и произнёс: - Я по поручению магистра Пармера. Он желает вас видеть у себя.
                    На что рыцарь холодно ответил: - Вас не учили, как следует обращаться к старшему по званию?
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Сквайр покраснел и заёрзал на месте: - Ой, простите! Я только недавно вступил в орден и ещё мало что знаю... Всё здесь так сложно устроено...
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Ничего, я сам был таким</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Это заметно</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Больше так не делай</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    В моё время за такую наглость уже выпороли бы плетьми, - проворчал Корос, а затем подумал: "Странно… Новобранец, а уже выполняет поручения самого главы ордена. Не иначе, сынок какого-нибудь вельможи". 
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Позвольте спросить, - со страхом в голосе спросил сквайр. 
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Спрашивай</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Чего тебе?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ну ты и наглец, ладно, спрашивай</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Часто ли вы бываете за границей? - сквайр нервно переступил с ноги на ногу. - А вы... вы когда-нибудь видели солдат Конфедерации?
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Нет... и да</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Что за вопросы?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Ха-ха, не терпится в бой?</p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Сквайр смутился, и его щёки покраснели. По нему было видно, что перед Коросом стоял зелёный юнец, наслушавшийся баек от трактирщиков.
                    "Если бы ты увидел песчанника в бою, это стало бы последним, что увидел в жизни", - хотел сказать Корос, но сдержался. Зачем пугать мальчишку?
                    Он лишь сухо бросил: Ты их ещё увидишь.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Говорят, они живут под землёй, - сквайр понизил голос до шёпота, - а потом... выползают и утаскивают целые армии в пески. Будто сами дюны их поглощают.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Не совсем так</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Полная чушь</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>А потом обгладывают их кости </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Наставники говорят, опасаться их изогнутых мечей, будто они могут отрубить тебе голову за доли секунды.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>А вот это правда</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Не забивай себе голову</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>И не только голову</p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Ладно, я пойду тогда? Скоро будут раздавать завтрак в трапезной.
                </p>
                <div style={{display: "flex", justifyContent: "space-between", textAlign: "center"}}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Ступай</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ты не похож на голодного</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Иди, только не объедайся</p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>Сквайр:</h1>
                <p className={classes.question}>
                    Нелепо засуетившись, пухлый юноша развернулся и бросился бежать, будто за ним гнались, стремительно покинув комнату. 
                    То ли от смущения, то ли действительно был голоден - кто знает.
                    "Пора наконец узнать, что за дело у магистра ко мне", - с этой мыслью Корос встал и направился к двери.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
        </div>
    )
}