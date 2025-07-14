import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import StoneTexture from "../../../../Images/Stone.jpg";
import Casemates from "../../../../Images/Casemates.jpg";
import Prison from "../../../../Images/Prison.jpg";

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
    });
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
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
            })
        }
            else if(showMessageQuest.message12 === true) {
            props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene} style={{ border:"solid 0.3vw darkred"}}>
                <img src={Prison} alt="Prison" style={{borderRight: "solid 0.3vw darkred", borderLeft: "solid 0.3vw darkred", borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                    Дорога к казематам заняла не более получаса. На окраине города, посреди пустыни, возвышалась небольшая крепость.
                    "Видимо, здесь и окончится мой путь", - подумал Корос, всматриваясь в башни тюрьмы. "Как же так получилось? Двадцать лет службы - и вот такой конец. 
                    Попался как кролик в лапы лисы", - накатило на него. У врат их встретил ещё один стражник и, молча не сказав ни слова, стал открывать тугой замок.
                    Далее рыцаря повели по узкому коридору. Стены казались настолько древними, что он невольно задумался: "Сколько же этой крепости лет?"
                    На удивление, у него не забрали ни оружие, ни личные вещи - вообще ничего. Его просто завели в камеру и закрыли тяжёлую дверь на замок.
                    Уходя, один из стражников, глядя в глаза Коросу, произнёс: - Завтра с вами будет разговаривать сам губернатор. А пока... лучше поспите.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>   
            </div> }
            <div className={classes.playingFieldLevel} style={{backgroundImage: `url(${Casemates})`, border: "solid 0.3vw darkred"}}>
                
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Оглядевшись в камере - кроме стен и деревянного настила с разбросанной соломой, в углу стоял маленький столик. 
                    На нём лежали бурдюк с водой и завёрнутая в чистую ткань та самая сладкая булочка, которую продавали дети на побережье.
                    В другом углу стояло ведро - видимо, для нужд.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Присев на соломенную подстилку, Корос потянулся за свитком, но тут же вновь бросил взгляд на столик с булкой и бурдюком.
                    "Зачем... Зачем так заботятся о заключённом? А оружие - почему они не забрали оружие?" - пронеслось у него в голове.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Произойди это в Инмаре - его уже бы избили и бросили в грязную камеру без воды, еды и абсолютно голым.
                    Но вместо этого его, пусть жёстко, но просто доставили в камеру, и при этом были учтивы.
                    Никаких избиений и унижений - это всё очень странно, - подумал Корос.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    А то, что его так ловко скрутили, не дав даже опомниться, - почему-то показалось рыцарю смешно.
                    Ведь он был опытным солдатом и не раз проходил подготовку у лучших мастеров ордена.
                    А тут, казалось бы, простой стражник вывернул его, как молодого юнца, только начавшего постигать боевые премудрости. 
                </p>
                 <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Увидел бы это его наставник - не поверил бы своим глазам. Армия ордена считалась универсальной, готовой к любым ситуациям.
                    И те, кто осмеливался бросить им вызов в настоящем бою, были обречены на поражение.
                    Но это там, на севере, в землях королевства.
                    Здесь же всё было совсем иначе, - внезапно осознал Корос.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    "Может, ещё рано паниковать, и всё обойдётся - скорее всего, это просто нелепая случайность.
                    Ведь один из стражников упомянул о недавних беспорядках, связанных с азартными играми.
                    И, видимо, об указе, запрещающем их, ещё не всем известно", - подумал он.
                    Да и к тому же, завтра меня ждёт разговор с губернатором этого города, что также не укладывалось в голове рыцаря.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    "Повременим", – тихо сказал он сам себе вслух и убрал руку от кармана, где лежал свиток.
                    Корос хотел было завалиться всем телом на настил, но тут желудок напомнил о своём существовании и громко заурчал, нарушая абсолютную тишину в казематах.
                    Он опять посмотрел на бережно завёрнутую в белую ткань сдобу и, встав, подошёл к столику.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Развернув полотенце, он увидел румяную корочку, которая так манила его на берегу.
                    Запах был непередаваемый - она пахла мёдом и цветами, вперемешку с пряностями.
                    Как будто что-то из далёкого прошлого. И тут он вспомнил: такие сладкие булочки пекла его мама, когда он был ещё совсем сорванцом.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message9 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Откусив первый кусок и прожевав его, Корос почувствовал, как по его щеке прокатилась слеза.
                    Накатившие воспоминания ударили ему в голову, словно молот бьёт по наковальне.
                    Он стал вспоминать то, о чём, как ему казалось, позабыл навсегда:
                    то мирное и беззаботное детство и тот ужас, что ему и его семье пришлось пережить во время восстания.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message10 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Злоба и жажда мести, что всё время сжигали его изнутри, то и дело напоминали о себе.
                    Но им в ответ приходили сомнения, которые немного пугали рыцаря.
                    Он в камере, в самой Конфедерации племён - какие могут быть сомнения? Но что-то сводило злость на нет,
                    как будто подсознание пыталось сказать то, чего он сам не понимал.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message11 && <div className={classes.blockMessage} style={{border: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Доев булку и запив её холодной водой из бурдюка, Корос потянулся и почувствовал, как его тянет в сон.
                    Со времени битвы с морской тварью он был настолько измождён, что хотел покончить со своей миссией как можно скорее.
                    Завалившись в сено и подложив под голову бурдюк, он закрыл глаза, предварительно отстегнув лямку ножен, удерживающую меч.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message12 && <div className={classes.openingScene} style={{border: "solid 0.3vw darkred"}}>
                <p>
                    Всё время, пока он спал, ему снилось его детство. Его мать, отец, дом и даже друзья, с которыми он бегал по улицам, будучи совсем ребёнком.
                    Цветущие сады городка, в котором они жили тогда, и огромный постамент в центре площади, по которому вечно лазила ребятня.
                    Мало-помалу он растворялся в счастливых моментах своей жизни, вновь переживая их.
                    Но под конец идиллия снова была разрушена, как и в реальности. Огонь, огонь всюду: дома, деревья, люди - всё горит.
                    А самое страшное - он сидит на земле, обнимая окровавленное безжизненное тело своего отца, и наблюдает, как напротив горит его дом, в котором осталась мать.
                    От ужаса Корос открыл глаза и резко приподнялся. Оглядевшись по сторонам, он увидел, что на столике в углу лежала ещё одна булочка, завёрнутая в полотенце. 
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> 
                        -----Продолжить----- 
                    </h3>
                </div>
            </div> }
        </div>
    )
}