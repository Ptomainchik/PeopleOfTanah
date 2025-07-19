import { useEffect, useState } from "react";
import classes from "../../../../Styles/QuestLevel.module.css";
import { useNavigate } from "react-router-dom";

export const Level8 = (props:any) => {
    const [showMessageQuest, setShowMessageQuest] = useState(false);
    const [showOpeningScene, setShowOpeningScene] = useState(true);
    const [showFinalScene, setShowFinalScene] = useState({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    const [buttonFinal, setButtonFinal] = useState({
        buttonLoyal: false,
        buttonContra: false,
        buttonNeutral: false,
    });
    
    function handleModalOpening() {
        setShowOpeningScene(false);
        setShowMessageQuest(true);
    }

    let navigate = useNavigate();
    function handleClickHome() {
    navigate('/');
    }

useEffect(() => {
    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: true, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: true, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: true, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countLoyal === props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countLoyal === props.countNeutral && props.countLoyal > props.countContra && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    else if(props.countContra === props.countNeutral && props.countLoyal < props.countContra && buttonFinal.buttonLoyal === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }

    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: true, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: true, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: true, 
        neutralL: false, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra === props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra === props.countNeutral && props.countContra > props.countLoyal && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    else if(props.countLoyal === props.countNeutral && props.countLoyal > props.countContra && buttonFinal.buttonContra === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }

    if(props.countLoyal > props.countContra && props.countLoyal > props.countNeutral && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countContra > props.countLoyal && props.countContra > props.countNeutral && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: true, 
        neutralN: false,
    });
    }
    else if(props.countNeutral > props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    else if(props.countNeutral === props.countLoyal && props.countNeutral > props.countContra && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: true, 
        neutralC: false, 
        neutralN: false,
    });
    }
    else if(props.countNeutral === props.countContra && props.countNeutral > props.countLoyal && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    else if(props.countContra === props.countLoyal && props.countLoyal > props.countNeutral && buttonFinal.buttonNeutral === true){
        setShowFinalScene({
        loyalL: false, 
        loyalC: false, 
        loyalN: false, 
        contraL: false, 
        contraC: false, 
        contraN: false, 
        neutralL: false, 
        neutralC: false, 
        neutralN: true,
    });
    }
    
    }, [buttonFinal, props.countLoyal, props.countContra, props.countNeutral]);

    function handleFinalLoyal(){
        props.setCountLoyal((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: true,
        buttonContra: false,
        buttonNeutral: false,
    });
    }

    function handleFinalContra(){
        props.setCountContra((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: true,
        buttonNeutral: false,
    });
    }

    function handleFinalNeutral(){
        props.setCountNeutral((prev: number) => prev + 1);
        setShowMessageQuest(false);
        setButtonFinal({
        buttonLoyal: false,
        buttonContra: false,
        buttonNeutral: true,
    });
    }

    return (
        <div className={classes.questPage}>
            {showOpeningScene && <div className={classes.openingScene}>
                <p>
                    Содержимое было зашифровано стандартным шифром, используемым определёнными структурами ордена Ключей.
                    Бегло пробежав глазами по тексту, Корос осознал - перед ним список людей.
                    Хотя сам он не состоял в тайных организациях ордена, особенности его работы часто заставляли сталкиваться с подобными шифровками в доставляемых депешах.
                    Когда задания отменялись, письма полагалось уничтожать. Но он хранил их, пытаясь разгадать значение этих странных символов.
                    Если бы там узнали о его занятиях - головы бы не сносить. Однако опасность лишь подстёгивала интерес.
                    Тайно ото всех он скрупулёзно изучал эту непонятную систему письма. Долгие сравнения разных документов помогли выявить закономерность, ставшую ключом к расшифровке.
                    К своему удивлению, Корос обнаружил, что чаще всего доставлял обыденную переписку вельмож и высших чинов ордена.
                    Именно поэтому он и чувствовал себя угнетённым, поскольку являлся фактически простым посыльным, пусть и тайным.
                    Первые строки свитка гласили: "Отдать долг" - далее следовал список имен, с которыми следовало рассчитаться.
                    Корос прекрасно знал: на внутреннем жаргоне ордена это означало убийство, оформленное под естественную смерть.
                </p>
                <h3 className={classes.buttonNextSceneInmar} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            
            {showMessageQuest && <div className={classes.openingScene}>
                <p>
                    Однако теперь, когда ему стала известна горькая правда, перед ним встала дилемма: что делать дальше. 
                    Двадцать лет службы не проходят бесследно, и часть его души пыталась всё оправдать, ведь он прекрасно понимал, как работает орден. 
                    "Не ты первый, не ты последний. Всё во благо ордена", - вспомнил он поговорку, которую ему постоянно твердил наставник. 
                    Но вернуться назад сейчас он не мог, ведь задание провалено. 
                    За это полагалась только одна награда - смерть. Конечно, Корос мог выполнить секретное поручение из этого свитка, тем самым заслужив искупление. 
                    Но где искать всех этих людей? 
                    Задача непростая. Другая его часть души кричала от чувства несправедливости и напоминала о страшной трагедии, которую он пережил в детстве. 
                    Жажда возмездия, горевшая в его сердце к Конфедерации, теперь переключилась на сам орден. 
                    А в голове билась, словно птица в клетке, одна единственная мысль: отомстить за всё. 
                    От всего этого безумия его сводило с ума, но решение нужно было принять сейчас, пока ещё не поздно. 
                    Он сжал в руках бумагу и подошёл к окну кабинета, из которого открывался чудесный вид на пустыню.
                </p>
                <div className={classes.finalBlockAnswer}>
                    <h3 className={classes.answer1} onClick={handleFinalLoyal}>Выполнить задание из свитка</h3>
                    <h3 className={classes.answer2} onClick={handleFinalContra}>Оставить свиток на окне</h3>
                    <h3 className={classes.answer3} onClick={handleFinalNeutral}>Разорвать свиток и выбростить в окно</h3>
                </div>
            </div> }

            {showFinalScene.loyalL && <div className={classes.openingScene}>
                <p>
                    Не в силах нарушить клятву, данную им ордену, Корос решается на невероятное. 
                    Он намерен искупить свой провал, выполнив задание вернуть долг каждому из зашифрованного списка. 
                    Зная, что, вероятно, все эти люди связаны с высокими постами в Конфедерации, он решает начать поиски среди караванщиков. 
                    Демонстрируя искреннюю заинтересованность в торговле, Корос втирается в доверие к местным торговцам. 
                    Спустя несколько лет работы в одном из караванов, он узнает обо всех причастных к списку и начинает разрабатывать план по выполнению задания, которое вернет ему имя в ордене.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalC && <div className={classes.openingScene}>
                <p>
                    Верность ордену перевесила чашу весов в свою пользу. 
                    Воодушевленный намерением вернуться обратно в строй ключников, он начинает пытаться выяснить, кому принадлежат имена из списка. 
                    Стараясь втереться в доверие, он прислуживает местным караванщикам, но спустя долгое время осознает, что не сможет самостоятельно справиться с заданием. 
                    Все, кто с ним сталкивается, относятся к нему с подозрением. 
                    Так как он не может обратиться за помощью к своим бывшим братьям, все его усилия становятся тщетными в этом жарком краю, несмотря на то, что, как выяснилось позже, он сам отсюда родом. 
                    Отчаявшись, он оставляет любые попытки искупить свой провал и ждет расправы от ордена Ключей.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalN && <div className={classes.openingScene}>
                <p>
                    В попытке восстановить своё имя Корос внедряется в круг караванщиков и спустя некоторое время выясняет нескольких человек, чьи имена значатся в списке. 
                    С трудом проникнув в покои одного из них, он намеревался подстроить его смерть под укус ядовитой змеи.
                    Но в последний момент, глядя на спящего человека, к нему возвращаются воспоминания об отце, который тоже был обычным торговцем, хоть и не обладал статусом, подобным жертве. 
                    Эти нахлынувшие чувства заставляют Короса осознать, что он неспособен совершить преступление, а его собственные принципы оказались важнее долга перед орденом.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraL && <div className={classes.openingScene}>
                <p>
                    Так и не определившись, Корос оставляет свиток на окне и уходит, не зная, что его ждёт дальше.
                    В попытках просто начать жизнь заново он находит своё место в торговом деле.
                    Путешествуя вместе с караванами по Конфедерации племён, бывший рыцарь уже было начал обретать новую жизнь.
                    Но однажды, когда они прибыли в один из городов пустыни, на него напали люди из ордена, и он получил почти смертельные раны.
                    После долгого восстановления Корос начинает опасаться за свою жизнь, от чего становится очень подозрительным, что мешает его работе в торговле.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraC && <div className={classes.openingScene}>
                <p>
                    Оставив свиток на окне в кабинете тюрьмы, он, обуреваемый жаждой мщения, ищет способ применить свои знания против ордена.
                    И однажды находит его: знакомясь с одним песчанником, он рассказывает о своей ненависти к ключникам и о том, что те убили его семью и лишили дома.
                    Тот, в свою очередь, догадываясь, кто перед ним, втирается к нему в доверие. После долгих проверок и слежек за Коросом,
                    удостоверившись в его нежелании навредить Конфедерации, песчанник предлагает ему послужить в рядах армии - ведь он знает их врага изнутри.
                    На что Корос даёт своё согласие. И спустя время становится тем, кто раскрывает множество тайн о ключниках и их внутреннем устройстве,
                    тем самым доказывая преданность своей давно потерянной, но вновь обретённой родине.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraN && <div className={classes.openingScene}>
                <p>
                    Сжигаемый внутренней ненавистью к бывшим собратьям, Корос оставляет свиток на окне кабинета.
                    Не долго думая о способах мести ордену за погибших родных, он оказывается в ситуации, где рыцари ордена под прикрытием пытаются его убить. 
                    По случайному стечению обстоятельств, покушение терпит неудачу.
                    Осознав, что за ним по пятам следуют ключники, Корос начинает путать следы, перемещаясь между городами Конфедерации племён.
                    В каждом поселении он задерживается не более чем на неделю - ровно столько, сколько занимает путь между городами.
                    Но однажды в дороге он сталкивается с караваном, где его узнаёт тот самый губернатор "Хордиша", открывший ему правду о прошлом.
                    Выслушав рассказ Короса об охоте на него, губернатор предлагает покровительство и убежище на юге пустыни - там, где его вряд ли будут искать, ведь только коренные жители и сами регистаны способны вынести местный климат и палящее солнце.
                    Понимая, что в одиночку от убийц ордена не скрыться, Корос принимает предложение.    
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralL && <div className={classes.openingScene}>
                <p>
                    Разорвав свиток и выбросив его обрывки в окно тюремного кабинета, Корос решает: будь что будет. 
                    Он отказывается от мести обеим сторонам, выбирая простую жизнь - забыть прошлое и жить сегодняшним днем, не заглядывая в завтра.
                    Подрабатывая в местной торговой артели обычным лавочником, он больше не заботится ни о делах ордена, ни о прежних убеждениях.
                    Но однажды в его хижину приходит старый знакомый - тот самый капитан "Алиеты", с которым они пережили шторм и встречу с морским чудовищем, едва не стоившую им жизни.
                    Взглянув в глаза капитану, Корос всё понял: того прислал орден убить бывшего рыцаря, ведь провал миссии ставил под сомнение и преданность ключникам самого капитана.
                    Однако вместо удара клинком капитан крепко обнял его. Всю ночь напролёт они вспоминали былое. 
                    Под утро капитан предложил план: он возьмёт меч Короса как доказательство его смерти магистру, а сам бывший рыцарь навсегда покинет прибрежные земли Конфедерации.
                    На следующую ночь Корос покинул город, так и не дав ордену осуществить задуманное.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralC && <div className={classes.openingScene}>
                <p>
                    Измученный метаниями и муками выбора, Корос в гневе разорвал свиток и швырнул клочья в окно тюремного кабинета.
                    Не зная, что делать дальше - ведь теперь орден будет его искать - он решил отправиться на юг Великой Пустыни, чтобы хоть там затеряться от всевидящего ока ключников.
                    Да и к тому же, узнав, что его предки родом из тех мест, он надеялся разузнать о своей настоящей родине - той, что орден вырвал из его памяти, - и о своём роде больше, чем ему рассказывали на службе.
                    Продав всё снаряжение, он пустился в путь по песчаным барханам этого загадочного края, который теперь открывался перед ним с новой, неизведанной стороны.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralN && <div className={classes.openingScene}>
                <p>
                    Мучительной болью проносились мысли о лживом прошлом и об открывшейся правде в голове Короса.
                    В ярости он порвал свиток на мелкие кусочки и выбросил их в окно кабинета, где их подхватило потоком ветра и унесло в обжигаемую жарким солнцем пустыню.
                    Вернувшись на берег, где его ожидал молодой капитан "Алиеты", Корос в последний раз взглянул в глаза паренька и с ненавистью в голосе произнёс:
                    Передай магистру, что я знаю всё!
                    А после этих слов он вытащил из своей сумки флакон с ядом, который был у каждого ключника на случай провала или раскрытия.
                    Затем, держа его в правой руке, он резко отщёлкнул пробку и жадно выпил содержимое.
                    Действие яда не заставило себя ждать: через мгновение Корос покраснел и, упав на песок, стал корчиться от боли, которая затем перешла в конвульсии.
                    Ошарашенный парень стал тормошить его, но было уже поздно.
                    Услышав крики и панику на берегу, к этому месту тут же подбежали стражники, которые стали отталкивать толпу от уже побледневшего тела Короса.
                    Завидев стражу, капитан тут же скрылся, дабы его не задержали.
                    Затем из толпы вышел высокий темнокожий человек и, подойдя к телу, начал что-то говорить стражникам.
                    После чего те быстро схватили обмякшего рыцаря и унесли его, быстро скрывшись в неизвестном направлении.
                    Спустя месяц Корос очнулся в огромном храме, искусно украшенном вырезанными барельефами на стенах из песчаника, а рядом с ним в этой же зале сидели на коленях темнокожие мужчины и женщины.
                    Когда он пришёл в себя, к нему подошёл один из них. Лишь когда тот наклонился над ним, Корос узнал его - это был тот самый губернатор.
                    Для ордена ты мёртв, обратной дороги у тебя нет. Теперь здесь твоя истинная, но давно украденная родина, - произнёс он.
                </p>
                <h3  className={classes.buttonNextSceneInmar} onClick={handleClickHome}>---На главную---</h3>
            </div>}
        </div>
    )
}