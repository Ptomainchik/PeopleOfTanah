import { useState } from "react";
import classes from "../../../Styles/History.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Background from "../../../Images/InmarForest.jpg";
import KingOfInmar from "../../../Images/KingOfInmar.jpg";
import Ruin from "../../../Images/Ruin.jpg";
import Mesa from "../../../Images/Mesa.jpg";
import SecretOrder from "../../../Images/SecretOrder.jpg";
import SoldierOfInmar from "../../../Images/SoldierOfInmar.jpg";
import CoatOfArmsOfTheKingdomOfInmar from "../../../Images/CoatOfArmsOfTheKingdomOfInmar.webp";

export const HistoryKingdomInmar = () => {
    const [showModalId, setshowModalId] = useState(null);
    const [activeOpenButton, setActiveOpenButton] = useState(false);

    function handleOpenModal(id: any){
        setshowModalId(id);
        setActiveOpenButton(true)
    }

    function handleCloseModal() {
            setshowModalId(null);
            setActiveOpenButton(false)
    }

    let buttonClassLeft
    let buttonClassRight

    if(activeOpenButton === true){
        buttonClassLeft = classes.leftModal
    }
    
    if(activeOpenButton === true){
        buttonClassRight = classes.rightModal
    }

    return (
        <div className={classes.historyPage} style={{ backgroundImage: `url(${Background})` }}>
            <div className={classes.topbar} style={{background: "darkred"}}><HomeButton/>История<BackButton/></div>
            <div className={classes.coatOfArms}>
                <h2 style={{color: "darkred"}}>Королевство Инмар</h2>
                <img src={CoatOfArmsOfTheKingdomOfInmar} alt="CoatOfArmsOfTheKingdomOfInmar" title="Герб Королевства Инмар" draggable={"false"}/>
            </div>
            <button className={classes.buttonOpenModal1} id={"1"} onClick={() => {handleOpenModal("1")}}><p className={classes.titleChapterHistory} style={{color: "darkred", WebkitTextStroke: "1px black"}}>Глава 1</p></button>
            {showModalId === "1" && (<div className={buttonClassLeft} id={"1"} style={{border: "solid 0.3vw darkred"}}>
                <h4 style={{color: "darkred"}}>Глава 1</h4>
                <p style={{color: "darkred"}}>
                    В самом сердце континента раскинулось величественное Королевство Инмар. С трёх сторон - севера, запада и востока - его омывают воды широкой реки Тамиз, тогда как южные земли врезаются в воды Живого моря.
                    Практически всю территорию покрывают густые широколиственные леса, а плодородные заливные поля кормят всё население. Редкие скальные образования служат идеальным фундаментом для неприступных крепостей и величественных замков.
                    Природные особенности ландшафта делают Инмар практически неуязвимым для внешних врагов.
                    Река Тамиз образует естественную защитную линию на пути войскам противника.
                    Единственную реальную угрозу представляют еретики из Великой пустыни на юго-востоке Танаха. Их попытки совратить подданных Инмара богохульными сказками, уводя от истинного пути Белого Быка, не оставляют выбора королю Диперангу и Высшему Совету.
                    После того как коварные соседи отторгли южные территории, превратив их в выжженную землю, в королевстве остался лишь один ответ на их происки - беспощадное уничтожение.
                </p>
                <img className={classes.imageModalHistory} src={KingOfInmar} alt="KingOfInmar" draggable={"false"} style={{borderRight: "solid 1vw darkred", borderBottom: "solid 1vw darkred"}}/>
                <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal2} id={"2"} onClick={() => {handleOpenModal("2")}}><p className={classes.titleChapterHistory} style={{color: "darkred", WebkitTextStroke: "1px black"}}>Глава 2</p></button>
            {showModalId === "2" && (<div className={buttonClassRight} id={"2"} style={{border: "solid 0.3vw darkred"}}>
                <h4 style={{color: "darkred"}}>Глава 2</h4>
                <p style={{color: "darkred"}}>
                    В самом сердце королевства застыло свидетельство былого величия человеческой расы. Среди густых лесов возвышаются монументальные дворцы, чьи искусно вырезанные барельефы пронзают кроны деревьев. 
                    В полуразрушенных залах величественно замерли скульптуры - земные воплощения богов в зверином облике. 
                    Особое место среди них занимает Бык. Владыка и Создатель, он взирает на своих подданных с каменного пьедестала, и в его глазах читаются и укор, и надежда - каждый входящий во дворец чувствует этот пронзительный взгляд в самой глубине души.
                    Священная история гласит:
                    Именно здесь Белый Бык сошёл на землю, вдохнув жизнь в холодный безжизненный камень и создав первое человеческое существо. 
                    Его же дети - боги в облике животных - наполнили мир разнообразием и гармонией. На этих землях процветала могущественная цивилизация с богатейшей культурой, от которой нынешнее человечество ведёт свой род.
                    Но идиллия была разрушена. Разгневанный человеческим неблагодарностью и недостаточным почитанием, Белый Бык наслал на мир катаклизм Вечной Зимы. Лишь пройдя через ледяное чистилище, уцелевшие люди осознали свою ошибку.
                    Сегодня праведники бдительно охраняют истинную веру, а по всему королевству звучат мессы, прославляющие Белого Быка, - чтобы ужас прошлого никогда не повторился.  
                </p>
                <img className={classes.imageModalHistory} src={Ruin} alt="Ruin" draggable={"false"} style={{borderRight: "solid 1vw darkred", borderBottom: "solid 1vw darkred"}}/> 
                <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal3} id={"3"} onClick={() => {handleOpenModal("3")}}><p className={classes.titleChapterHistory} style={{color: "darkred", WebkitTextStroke: "1px black"}}>Глава 3</p></button>
            {showModalId === "3" && (<div className={buttonClassLeft} id={"3"} style={{border: "solid 0.3vw darkred"}}>
                <h4 style={{color: "darkred"}}>Глава 3</h4>
                <p style={{color: "darkred"}}>
                    Церковь Белого Быка и её последователи не только восхваляют бога и несут свет истины в умы прихожан. 
                    Сама суть веры располагает к всеобщему почитанию человеческой расы и обязывает каждого помогать ближнему своему.
                    Они дают кров и пропитание тем, кому это требуется, ухаживают за стариками и немощными, а их проповедники оказывают помощь больным и раненым в своих приходах. 
                    На базе монастырей построены огромные подворья, где воспитываются множество сирот, потерявших своих родных при разных обстоятельствах. 
                    Многие простые люди стараются пристроить своих детей в лоно церкви, отдавая их учиться в семинарии при монастырях.
                    Ведь только так молодой человек или девушка может получить не только образование, но и перспективы на будущее, устроившись во дворы к знатным вельможам или же остаться служить на благо церкви.
                    Даже в Высшем Совете всегда имеются представители Белого Быка. Без их одобрения и совета не исполняется ни один закон в королевстве. 
                    Любой человек в Инмаре может обратиться за помощью и получить её в многочисленных храмах и церквях безвозмездно.
                    Исключения имеются только для еретиков, искажающих веру, и остальных рас континента. 
                    Так как по догматам учения Белого Быка, все остальные расы когда-то были людьми, но предали божество. За что тот проклял их, превратив в изуродованное подобие людей. Они могут стремиться к истине, но за грехи предков останутся чудовищами до конца своих дней. Лишь после смерти, получив прощение, они войдут в запретный мир Быка, где будут жить вечно с остальными праведными.
                </p>
                <img className={classes.imageModalHistory} src={Mesa} alt="Mesa" draggable={"false"} style={{borderRight: "solid 1vw darkred", borderBottom: "solid 1vw darkred"}}/> 
                <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal4} id={"4"} onClick={() => {handleOpenModal("4")}}><p className={classes.titleChapterHistory} style={{color: "darkred", WebkitTextStroke: "1px black"}}>Глава 4</p></button>
            {showModalId === "4" && (<div className={buttonClassRight} id={"4"} style={{border: "solid 0.3vw darkred"}}>
                <h4 style={{color: "darkred"}}>Глава 4</h4>
                <p style={{color: "darkred"}}>
                    Когда королевство раздирали междоусобные конфликты, Алгорех, король тех времён, приказал создать тайную организацию, которая доносила бы ему информацию о делах в стране и следила за исполнением его воли.
                    Спустя столетия этот скрытый инструмент власти стал самоуправляемым. Он по-прежнему подчинялся королю, но уже с оглядкой на собственные интересы.
                    В его ряды мог вступить кто угодно - от простого свинопаса до дворцового чиновника. От них требовалось только безусловное подчинение магистрам и служение на благо Ордена Ключей.
                    Новообращённый неофит отдавал часть своего имущества в пользу ордена, получая взамен полное покровительство. 
                    Также действовал строгий запрет на обсуждение дел организации вне стен форумов ордена. Исключение делалось только для тех, кто участвовал в выполнении заданий - для них существовала система условных жестов и фраз.
                    Орденом управляют шесть магистров - по числу регионов королевства. Они имеют право распоряжаться всеми ресурсами организации. Исторически так сложилось, что в каждом регионе Инмара требовался свой руководитель для контроля за исполнением приказов.
                    Эта система сохранилась до наших дней, но не вызывает раздоров, так как все магистры имеют равные права. Спорные вопросы решаются на собраниях в штабе Ордена Ключей в столице.
                    Ключники имеют шпионов по всему Танаху, включая представителей других рас и стран. Однако наибольшее влияние орден имеет в самом Инмаре.
                    Многие люди не понимают, что означает маленький ключ, расположенный в верхней части герба их любимого королевства, и даже не догадываются, насколько сильно влияние Ордена Ключей.
                </p>
                <img className={classes.imageModalHistory} src={SecretOrder} alt="SecretOrder" draggable={"false"} style={{borderRight: "solid 1vw darkred", borderBottom: "solid 1vw darkred"}}/> 
                <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal5} id={"5"} onClick={() => {handleOpenModal("5")}}><p className={classes.titleChapterHistory} style={{color: "darkred", WebkitTextStroke: "1px black"}}>Глава 5</p></button>
            {showModalId === "5" && (<div className={buttonClassLeft} id={"5"} style={{border: "solid 0.3vw darkred"}}>
                <h4 style={{color: "darkred"}}>Глава 5</h4>
                <p style={{color: "darkred"}}>
                    На службе Короны состоят три слоя населения. Это простолюдины, решившие связать свою жизнь с армией, так как она находится на полном обеспечении королевства.
                    Но особых перспектив в профессии такие особы не имеют. Лишь в редких исключениях простой солдат может добиться повышения по службе в случае явного проявления храбрости и выполнения грандиозного подвига.
                    В их арсенал входит простое в производстве оружие, такое как копья, топоры, кистени, луки и даже обычные сельскохозяйственные инструменты.
                    Второй слой - это сыны местных господ и богатых владельцев имеющих своё дело, которые поступают на службу, уже имея финансы для покупки снаряжения и продвинутого обучения у опытных инструкторов.
                    Ввиду достатка они могут себе позволить более дорогое оружие: мечи, алебарды и арбалеты, и облачаются в доспехи среднего качества.
                    Третьи же, в свою очередь, являются либо чиновниками, либо их родственниками. Здесь уже имеет значение не только кошелёк, но и благородное происхождение вступившего в ряды армии. 
                    Это элита, способная нанять наставников себе ко двору и располагающая средствами на покупку лошадей и снаряжения высшего качества.
                    По закону таких вельмож можно вызывать только в случае войны или угрозы королевству. Но несколько раз в месяц они проходят военные сборы с себе подобными для прохождения слаженности в случае реального боя.
                    В основной массе это кавалерия, хотя их высокие чины могут вызывать подозрения в халатности, на деле эти воины служат по призванию. Позорить честь рода для них немыслимо - это означало бы вечный позор для всей семьи.
                </p>
                <img className={classes.imageModalHistory} src={SoldierOfInmar} alt="SoldierOfInmar" draggable={"false"} style={{borderRight: "solid 1vw darkred", borderBottom: "solid 1vw darkred"}}/> 
                <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Закрыть</button></div>)}
        </div>
    )
}