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
                    Сломав печать, Неман дрожащими руками медленно развернул свиток. Он ожидал увидеть что угодно - тайную переписку, документы о наследстве или даже королевскую депешу. 
                    Но то, что он обнаружил, одновременно напугало и ошарашило его неожиданной удачей.
                    На пергаменте были грамотно выведены расчёты и цены на все товары Инмара, с чётко описанными артелями и рынками на годы вперёд. 
                    Официальные печати и символы на документе не оставляли сомнений - перед ним были торговые декларации королевства Инмар.
                    Это было лучшее, о чём мог мечтать торговец, тем более караванщик. Золотая жила оказалась прямо в его руках, суля безбедную жизнь и процветание. От таких мыслей сердце Немана затрепетало, как заведённое, а голова шла кругом. 
                    В страхе он стал озираться по сторонам, пока его взгляд вновь не упал на нависающую над ним голову Белого Быка.
                </p>
                <h3 className={classes.buttonNextSceneConfederation} onClick={handleModalOpening}> 
                    -----Продолжить-----
                </h3>
            </div> }
            
            {showMessageQuest && <div className={classes.openingScene}>
                <p>
                    Рокот сердца постепенно стихал, но грозный вид статуи, смотревшей сверху на караванщика, ввёл его в ступор. 
                    Немана словно пронзила молния - он не мог пошевелиться, ощущая лишь полную тишину и холодные капли пота, стекающие по вискам.
                    "Неужели само божество смотрит мне в душу?" - мелькнуло в голове торговца.
                    Резко отшатнувшись назад, Неман к собственному удивлению почувствовал внутренние противоречия, разрывающие его надвое. 
                    Внутри будто сражались два голоса: первый кричал - "Хватай и беги отсюда!", а второй обрушивал на него терзания совести.
                    Что делать теперь, когда он увидел новый Инмар - не тот, о котором твердили с детства, а мир, полный сострадания и любви к ближнему? 
                    Совесть предательски грызла, алчность сводила с ума, но времени на раздумья не оставалось, так как из соседнего зала послышались шаги. Нужно было решать всё здесь и сейчас.
                </p>
                <div className={classes.finalBlockAnswer}>
                    <h3 className={classes.answer1} onClick={handleFinalLoyal}>Оставить деклорации</h3>
                    <h3 className={classes.answer2} onClick={handleFinalContra}>Забрать деклорации</h3>
                    <h3 className={classes.answer3} onClick={handleFinalNeutral}>Сомневаться</h3>
                </div>
            </div> }

            {showFinalScene.loyalL && <div className={classes.openingScene}>
                <p>
                    Так и не сумев побороть в себе совесть, Неман вернул декларации в выемку и прикрыл их кирпичом. Когда спустя мгновение в зал вошёл праведник, караванщик почувствовал, будто камень свалился с его плеч. 
                    Увидев служителя церкви, он искренне улыбнулся, с нетерпением ожидая продолжения рассказа о великом Белом Быке.
                    Деньги, золото, товары - все эти блага отошли на второй план, а пустоту в душе заполнило тёплое чувство, от которого внутри всё расцветало. 
                    Если бы кто-то в начале его пути сказал, что он добровольно откажется от такой прибыли, Неман счёл бы того сумасшедшим. 
                    Но теперь... изменился ли он сам, или Инмар изменил его - всё обрело другой смысл.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalC && <div className={classes.openingScene}>
                <p>
                    Долго обдумывая, что делать с декларацией, Неман не заметил, как к нему подошёл вернувшийся праведник. 
                    Увидев торговца со свитком в руках и открытым потайным отверстием в подножии статуи его божества - о котором служитель даже не подозревал - мужчина мгновенно всё понял.
                    Не мешкая, праведник выбежал на улицу, зовя на помощь. На его крики сбежалась толпа, а вскоре появился и отряд патрульных, уже направлявшийся к храму узнать причину шума.
                    Страх сковал торговца. В панике он попытался сбежать через боковой вход, но там его уже ждали солдаты, подоспевшие на крики. 
                    Схватив караванщика и вывернув ему руки, стражи потащили его через весь город к сторожевой башне, где в подвале находились тюремные камеры.
                    Когда решётка захлопнулась перед Неманом, а ключ со скрипом повернулся в замке, торговец осознал - это конец его пути. В прямом и переносном смысле.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.loyalN && <div className={classes.openingScene}>
                <p>
                    Не решившись пойти на подлость, Неман вернул декларации на место. Как вдруг услышал за спиной лёгкое покашливание.
                    Встав и обернувшись, торговец увидел улыбающегося праведника, бесшумно вернувшегося с книгами в руках.
                    Я рад, что ты так поступил, - произнёс служитель. Затем, положив руку на плечо караванщика, добавил: - Белый Бык восхищён твоим поступком. Это первый шаг на пути исцеления души.
                    Оставшийся день, вплоть до поздней ночи, Неман провёл вместе с праведником, изучая писания о великом божестве. Он искренне удивлялся тому, как кардинально изменился за это путешествие, отбросив былые стереотипы о королевстве Инмар и его жителях.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraL && <div className={classes.openingScene}>
                <p>
                    Не долго думая, торговец схватил декларацию и сунул её во внутренний карман джеллабы. Не мешкая, он направился к выходу. Только он захлопнул дверь храма, как обернулся и увидел двух солдат, пристально смотрящих на него.
                    Пытаясь скрыть тревогу, Неман произнёс: Добрый день. Те кивнули в ответ, и, казалось, уже должны были разминуться с ним. Но неожиданно один из стражников остановил караванщика: Где ваш торговый жетон? Почему он не на виду?
                    Неман ощупал себя и понял - жетон заскочил под джеллабу, когда он прятал декларацию. Нервно запустив руку под одежду, он хотел было вытянуть его наружу, но, по случайности, тот зацепил свиток декларации, и та упал на землю.
                    Увидев королевскую символику на пергаменте, солдаты мгновенно среагировали: Стоять! Не двигаться!
                    Пока один стражник поднимал бумагу, другой со всего размаха ударил Немана в живот. Когда сознание прояснилось, торговец уже находился в местных казематах. Глядя на узоры каменной кладки, он осознал: эта роковая ошибка стоит ему жизни. 
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraC && <div className={classes.openingScene}>
                <p>
                    Заглушив совесть вескими доводами о том, что люди Инмара - глупцы, поклоняющиеся несуществующему богу, а прибыль от этой находки обеспечит ему безбедное существование на всю оставшуюся жизнь, Неман схватил свиток и тут же направился прочь из храма. 
                    Поправляя жетон торговца на груди, он шел и думал, что наконец ухватил судьбу за глотку. 
                    Сейчас главное - не растерять пыл и не привлекать излишнее внимание. А на обратном пути постараться не попасть в засаду разбойников. 
                    Так он и не заметил, как пришёл к рынку, где его уже ждали торговцы. 
                    С выражением лица, будто он только что выиграл в карты целое состояние, он сказал им готовиться к скорейшему возвращению в Конфедерацию. 
                    Ведь только там, в полной безопасности, можно будет обдумать дальнейшие действия, чтобы воспользоваться подвернувшейся удачей.
                    
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.contraN && <div className={classes.openingScene}>
                <p>
                    Решение пришло внезапно. "Какой там Белый Бык... - подумал он. - Просто сказки невежественных людей, возомнивших себя хранителями истины. Они исказили реальность и сами поверили в свою ложь". Пусть верят во что хотят - он же здесь ради прибыли, которая сама плывёт в руки.
                    Аккуратно спрятав свиток под одеждой, Неман вернул кирпич на место, будто ничего не произошло. Когда вернулся праведник, торговец лишь думал, как бы поскорее от него избавиться, не вызвав подозрений.
                    Выслушав короткую проповедь о мнимом боге-Быке, Неман заявил, что ему нужно завершить дела, и обещал вернуться сразу после. Попрощавшись, он вышел из храма.
                    Солнце клонилось к закату, улицы пустели. От этого нервы караванщика сдавали - каждый редкий прохожий казался подозрительным. Чувство слежки не покидало его вплоть до рынка.
                    Но и там он не находил себе покоя, постоянно проверяя карман с драгоценным свитком.
                    Что с тобой? Ты весь на нервах, - заметил один из его людей.
                    Всё в порядке! - моментально отрезал Неман. Оглядевшись, тихо добавил: - Готовь обоз. Возвращаемся в Лутут, а затем домой.
                    Разве мы не утром выступаем? - удивился торговец.
                    Нет. Выезжаем ночью, - твёрдо ответил Неман. - Так безопаснее.
                    Страх не оставлял его на протяжении всего пути в Конфедерацию племён. Но игра стоила свеч.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralL && <div className={classes.openingScene}>
                <p>
                    "Пусть будет так", - прошептал Неман, пряча свиток в набедренную сумку. Закрыв потайное отверстие в основании статуи, он окинул взглядом храм - уйти сразу было нельзя, это вызвало бы подозрения.
                    Не успел он осмотреть внутреннее убранство, как из соседнего зала вернулся праведник с книгами. Подойдя вплотную, служитель прищурился:
                    - Не лги в стенах этого священного места. Его взгляд, полный укора, словно проникал в самую душу. - Я не понимаю, о чём вы... - пожал плечами торговец. 
                    Выражение лица служителя наполнилось грустью: - Мне придётся сообщить о том, что здесь произошло. Не отнекивайся - я всё видел. Эти стены скрывают много тайн, и ты даже не представляешь, где находишься. 
                    - Он поднял руку, указывая на маленькое окошко в стене, которое с первого взгляда сложно было заметить.
                    Понимая, где он находится, и зная, как здесь относятся к выходцам из Конфедерации, Неман достал свиток и протянул праведнику. Тот взял его, даже не взглянув, всем видом показывая, что содержимое его не интересует.
                    - Я не сообщу властям о твоём проступке, но расскажи, как ты об этом узнал. Даже для меня это стало открытием, - спокойно промолвил праведник.
                    И Неман поведал ему историю: о решении отправиться в эту поездку, о странной девушке и её ещё более странном муже, о таверне, где он узнал местонахождение торговых деклараций.
                    Выслушав караванщика, служитель Белого Быка улыбнулся: - Владыка испытывал тебя, а ты не справился. Но не отчаивайся - не всё потеряно. Главное, что ты сознался. Можешь идти к своему каравану, я тебя не выдам. 
                    Если решишь снова посетить Киллат, я всегда буду рад тебя принять. Ступай. И пусть хранит тебя Белый Бык.
                    Молча развернувшись, Неман направился к выходу, ощущая, как внутри него возник необъяснимый покой.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralC && <div className={classes.openingScene}>
                <p>
                    Отмахнувшись от двойственных чувств, Неман сжал свиток и сунул его во внутренний карман. Чтобы успокоить совесть, он решил, что направит часть прибыли на нужды церкви - ведь теперь он знал все торговые тайны Инмара.
                    Замаскировав следы проникновения, он дождался праведника. "Мне срочно нужно уйти, - с наигранной грустью сказал караванщик, - но я обязательно вернусь за новыми знаниями о Белом Быке". Служитель понимающе кивнул и проводил его до выхода.
                    Вернувшись к каравану, Неман сразу же скрылся в укромном уголке, жадно изучая украденные декларации. Его переполняло предвкушение головокружительных сделок, которые теперь станут возможны. 
                    Он планировал вернуться в Конфедерацию, продать весь товар, а на вырученные деньги снарядить ещё больший караван для новых, ещё более выгодных сделок в Инмаре.
                    Но спустя месяц, уже во время новой торговой экспедиции, Неман с ужасом обнаружил, что данные в свитке не соответствуют действительности. Проще говоря, тщательно скрываемые "торговые декларации" оказались всего лишь искусной подделкой.
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

            {showFinalScene.neutralN && <div className={classes.openingScene}>
                <p>
                    Обуреваемый внутренними противоречиями, Неман всё же забрал свиток, пообещав себе часть прибыли пожертвовать церкви Белого Быка. 
                    Вдруг раздался скрип двери - в проёме стоял праведник, сгибавшийся под тяжестью книг.
                    "Ну что, готов? Тебе обязательно понравится", - промолвил служитель.
                    "Поймите правильно, мне чрезвычайно интересно, но торговые дела требуют безотлагательных решений, - с деланной печалью ответил торговец. - Обещаю вернуться, чтобы услышать всё о всемилостивом Быке".
                    "Погоди, - перебил праведник, - возьми эти книги. Надеюсь, в следующий раз ты будешь не просто слушателем, а понимающим собеседником".
                    Приняв фолианты, Неман почтительно поклонился и направился к выходу. Охваченный странным воодушевлением, он шел по улицам, кланяясь каждому встречному облачёному в рясу праведника. 
                    Гул труб из церквей не стихал практически на протяжении всего пути, а шумные толпы паломников иногда не давали пройти, то и дело цепляя его локтями.
                    На рынке, бережно уложив книги в повозку, он вдруг обнаружил пропажу - свитка не было ни в одном кармане. 
                    С яростью он громко выругался, и окружающие торговцы удивлённо обернулись. - Кошель потерял, - буркнул Неман, отмахиваясь.
                    "Как так? - билось в висках. - Удача была в руках!" И вдруг неожиданная мысль: "А что если Бык действительно наблюдает за нами?"
                </p>
                <h3  className={classes.buttonNextSceneConfederation} onClick={handleClickHome}>---На главную---</h3>
            </div>}

           
    
        </div>
    )
}