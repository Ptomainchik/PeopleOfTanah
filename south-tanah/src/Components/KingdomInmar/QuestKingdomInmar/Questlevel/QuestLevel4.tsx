import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import StoneTexture from "../../../../Images/Stone.jpg";
import SeaHorizon from "../../../../Images/SeaHorizon.jpg";
import { NavalBattle } from "../NavalBattle/NavalBattle";

export const Level4 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest]:any = useState({
        message1: true, 
        message2: false, 
        message3: false, 
        message4: false,
        message5: false,
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

    function handleNextMessage() {
        if(showMessageQuest.message1 === true){
            setShowMessageQuest({
                message1: false, 
                message2: true, 
                message3: false, 
                message4: false,
                message5: false,
            })
        }
        else if(showMessageQuest.message2 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: true, 
                message4: false,
                message5: false,
            })
        }
        else if(showMessageQuest.message3 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: true,
                message5: false,
            })
        }
        else if(showMessageQuest.message4 === true) {
            setShowMessageQuest({
                message1: false, 
                message2: false, 
                message3: false, 
                message4: false,
                message5: true,
            })
        }
        else if(showMessageQuest.message5 === true) {
        props.setShowLevel((prev: number) => prev + 1);
        }
    }

    return (
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <img src={SeaHorizon} alt="SeaHorizon" style={{borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                    Море - одна мысль о нём вызывала в Коросе двойственное чувство. 
                    С одной стороны, его синие воды, сверкающие под лучами солнца, и теплый ветер дарили внутреннее умиротворение. 
                    Но с другой стороны, мощь бушующих штормов, поглощающих всё и вся, как дикий зверь жадно поедающий пищу, так и море словно вгрызается в корпуса кораблей, а ураган ломает мачты. 
                    Рождало трепет и ужас в сознании Короса. 
                    Живое… Да-да, именно живое, так издавна называли это море, из-за огромного количества обитающей в нём жизни. 
                    Где у берегов водится рыба, кормившая уже тысячелетиями рыбаков. 
                    А в его глубинах скрывалась поистине ужасающая фауна, легенды о которой передавались из уст в уста от храбрецов, переживших с ней встречу. 
                    Верить или не верить в эти россказни - личное дело каждого, но корабли, пропавшие без вести, и их останки, выброшенные волнами на берега, заставляли задуматься о правдивости этих баек.  
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelInmar4} style={{border: "solid 0.3vw darkred"}}>
                <div className={classes.bortOfShip}></div>
            </div>
            {showOpeningScene2 && <div className={classes.openingScene}>
                <p>
                    На середине пути молодой капитан разбудил Короса, сказав, что погода испортилась и вскоре их ожидает шторм.
                    От этих слов у рыцаря, который и так не мог уснуть из-за морской болезни, по спине пробежали мурашки, и детский страх вновь застучал в висках. А самое страшное - бежать было некуда. Они посреди моря, и единственное, что отделяет его от воды, - это борт корабля.
                    - Вставай, вставай! - повторил корабельщик. - В это время года море непредсказуемое. И что нас ждёт дальше - одному Белому Быку известно, - добавил он.
                    - Не хотел тебе говорить об этом раньше, чтобы ты не сошёл с ума от страха. Думал - обойдётся, - проговорил капитан.
                    - С чего ты взял, что я боюсь? — храбрясь, спросил Корос
                    - От одного твоего вида сквозило ужасом перед морской стихией. Ты целый день пути не выползал из каюты, а когда мы выходили из порта, взгляд у тебя был как у рыбки, попавшей на крючок, - ответил паренёк.
                    - Море не терпит трусов, но и самонадеянным также не благоволит, - договорил он.
                    Барк резко дёрнуло, будто он сел на мель. Зрачки Короса расширились, а глаза раскрылись так широко, насколько это возможно.
                    - Что это? Мы тонем? - взволнованно спросил Корос.
                    - Нет. Но похоже, это вопрос времени. Бегом на палубу! - в приказном тоне, будто командуя матросами, крикнул корабельщик.
                    Сглотнув ком в горле, Корос, борясь со страхом, рванул за капитаном, убегавшим по лестнице, ведущей на палубу.
                    Пока он поднимался, раздался новый удар, и Короса пошатнуло. Чуть не кувыркнувшись вниз, он ухватился за перила.
                    Громко выругавшись, рыцарь тут же продолжил подъем, даже не заметив, как вновь начал тихо напевать себе под нос песенку.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening2}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    На удивление, корабль перестал качаться на волнах, но вместо этого его начало трясти, словно кто-то пытался вскрыть его со дна. 
                    Раздался треск и скрежет досок, а затем в бушующем море раздался оглушительный рев.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    Только не это, - обреченно промолвил капитан "Алиеты". 
                    - Готовьте копья! - громко крикнул он всей команде. А Корос инстинктивно потянулся к рукояти своего меча.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>----------</h1>
                <p className={classes.question}>
                    "Плещется водичка, рыбка на крючке, до чего же радостно с удочкой мне. 
                    Наловлю я рыбки и пойду гулять, не весь день на речке мне же прозябать." 
                    - Уже не сдерживаясь, пел Корос, когда из моря показалась голова морского чудовища.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message4 && <NavalBattle setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/> }
            {showMessageQuest.message5 && <div className={classes.openingScene}>
                <p>
                    Капитан был прав: море - непредсказуемая стихия, и лишь глупцы относятся к нему пренебрежительно, считая его должностью. 
                    Ведь оно действительно живое, и это имя получено не просто так, а заслужено в схватке с храбрецами, бросившими вызов стихии. 
                    Пропустив через себя тысячи судеб, забирая у одних жизнь и даруя её другим, оно всегда будет главенствовать над теми, кто решил связать свою жизнь с ним. 
                    Дальнейший путь прошел без происшествий, а погода, как будто насмотревшись на яростную битву, успокоилась, и шторм затих. 
                    Одно успокаивало Короса после этого жуткого события: он больше не боялся моря, а наоборот стал его уважать.
                </p>
                <div>
                    <h3 className={classes.buttonNextSceneInmar} onClick={handleNextMessage}> -----Продолжить----- </h3>
                </div>
            </div> }
        </div>
    )
}