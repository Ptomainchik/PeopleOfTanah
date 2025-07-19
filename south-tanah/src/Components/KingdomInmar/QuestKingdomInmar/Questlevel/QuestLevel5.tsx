import classes from "../../../../Styles/QuestLevel.module.css";
import { useState } from "react";
import CaravanerMerchant from "../../../../Images/CaravanerMerchant.webp";
import RegistanGuard from "../../../../Images/RegistanGuard.webp";
import StoneTexture from "../../../../Images/Stone.jpg";
import RegistanСoast from "../../../../Images/RegistanСoast.jpg";
import { Dice } from "../Dice/Dice";

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
    const [showOpeningScene2, setShowOpeningScene2] = useState(false);
    
    function handleModalOpening() {
        setShowOpeningScene(false);
        setShowOpeningScene2(true);
    }

    function handleModalOpening2() {
        setShowOpeningScene2(false);
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
        <div className={classes.questPage} style={{ backgroundImage: `url(${StoneTexture})` }}>
            {showOpeningScene && <div className={classes.openingScene}>
                <img src={RegistanСoast} alt="RegistanСoast" style={{borderBottom: "solid 0.3vw darkred"}}/>
                <p>
                    На подступах в бухту, перед путниками открылся сияющий и утопающий в песках город "Хоршид". 
                    Портовая крепость и главный морской торговый узел Конфедерации племён. 
                    Вход в бухду охраняли две огромные башни из песчаника, а за ними по суше простирались дома и улицы, храмы и велечиственные сооружения, увенчаные огромными золотыми куполами. 
                    Такой торжествующей красоты Корос не видел ещё нигде. От одного вида на всё это, у него перехватывало дыхание, а со стороны берега доносился сладкий запах выпечки.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            {showOpeningScene2 && <div className={classes.openingScene}>
                <p>
                    Сойдя на берег, Корос протянул руку капитану в тайном рукопожатии, а затем положив ему руку на плечо, улыбнулся и тихо сказал: - Всё будет хорошо. 
                    Пожав ему руку, парень понималще кивнул и улыбнулся в ответ, лишь сказав ему: - Я знаю, Корос, я знаю. Затем рыцарь молча развернулся и пошёл в сторону прибрежных улиц.
                    Всюду сновали торговцы, словно здесь проходил съезд всех мало-мальски связанных с этим делом дельцов.На суше было очень жарко, но ветерок с моря обдувал щеки, заросшие недельной щетиной, рыцаря. 
                    В животе урчало так сильно, что хотелось уже купить хотя бы одну булочку, которую продавали бегающие тут и там дети с огромными подносами, подвязанными у них на плечах, на которых лежала румяная с блестящей сахарной корочкой сдоба. 
                    Запах сводил с ума, слюни от голода приходилось то и дело сглатывать. 
                    Корос уже было хотел потянуться к кошелю, но тут его одёрнул высокий и худощавый мужчина, похожий на караванщика.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening2}> 
                    -----Продолжить-----
                </h3>
            </div> }
            <div className={classes.playingFieldLevelInmar5} style={{border: "solid 0.3vw darkred"}}>
                {!showMessageQuest.message8 && !showMessageQuest.message7 && <img src={CaravanerMerchant} alt="CaravanerMerchant"  className={classes.characterInmarImg5}/>}
                {!showMessageQuest.message1 && !showMessageQuest.message2 && !showMessageQuest.message3 && !showMessageQuest.message4 && !showMessageQuest.message5 && <img src={RegistanGuard} alt="CaravanerMerchant"  className={classes.characterInmarImg51}/>}
            </div>
            {showMessageQuest.message1 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                    Такому мужчине, как вы, скорее всего, не помешали бы хорошие сапоги, а может, желаете весь наряд обновить? 
                    В моей лавке вы найдёте всё, что пожелаете, - наводящим тоном произнёс караванщик. 
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message2 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                    Также имеется большой ассортимент украшений из драгоценных камней. 
                    Давайте пройдем ко мне, вам обязательно что-нибудь приглянется.
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Было бы не плохо</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Что не так с моей одеждой?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Эм... не знаю</p>
                </div>
            </div> }
            {showMessageQuest.message3 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                    Возможно, вас еще заинтересуют разного вида развлечения?
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>Я как раз об этом думал</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Так сходу?</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Например что?</p>
                </div>
            </div> }
            {showMessageQuest.message4 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Караванщик:</h1>
                <p className={classes.question}>
                    Для начала могу предложить сыграть в кости. А дальше посмотрим. 
                </p>
                <div className={classes.answerBlock}>
                    <p id={"1"} className={classes.answer1} onClick={handleStateEnding}>С удовольствием</p>
                    <p id={"2"} className={classes.answer2} onClick={handleStateEnding}>Ну давай... игрок</p>
                    <p id={"3"} className={classes.answer3} onClick={handleStateEnding}>Тебе меня не обыграть</p>
                </div>
            </div> }
            {showMessageQuest.message5 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                 <h1>----------</h1>
                <p className={classes.question}>
                    Караванщик отошёл в сторону и присел на пороге небольшого дома. 
                    Затем, призывающе махнув рукой в сторону Короса, вытащил из кармана мешочек, в котором были кости.  
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message6 && <Dice setCountLoyal={props.setCountLoyal}
                setCountContra={props.setCountContra} 
                setCountNeutral={props.setCountNeutral}
                handleNextMessage={handleNextMessage}/>}
            {showMessageQuest.message7 && <div className={classes.blockMessage} style={{borderTop: "solid 0.3vw darkred"}}>
                <h1>Стражник:</h1>
                <p className={classes.question}>
                    После недавних беспорядков губернатор запретил азартные игры на территории Хоршида. 
                    Все, кто нарушают этот указ, будут задержаны и отправлены в местные казематы, - строго отчеканил стражник.
                </p>
                <div>
                    <p className={classes.buttonNextMessageInmar} onClick={handleNextMessage}> ---Продолжить--- </p>
                </div>
            </div> }
            {showMessageQuest.message8 && <div className={classes.openingScene}>
                <p>
                    Корос не успел даже подумать, как его тут же скрутил второй стражник, который всё это время стоял за спиной.
                    Сам караванщик, почувствовав неладное, успел сбежать, когда стража задерживала рыцаря.
                    - Это произвол! Я торговец из Инмара, между нашими государствами мир, - возмутился Корос, продумывая, как теперь уничтожить свиток, лежащий в кармане.
                    - Закон писан для всех. Кто вы и откуда - не имеет значения, - вежливо, но настойчиво ответил один из стражников, ведущий рыцаря под руки.
                    Опустив взгляд, Корос понял: вся его миссия под угрозой. Этот позор не смыть ничем - теперь орден отречётся от него.
                    Не так он себе представлял встретить старость - в грязной камере Конфедерации.
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