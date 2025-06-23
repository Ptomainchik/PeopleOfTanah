import { useState } from "react";
import classes from "../../../Styles/StylesConfederationOfTribes/StructureConfederation.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Farmer from "../../../Images/Farmer.jpg";
import Caravaner from "../../../Images/Caravaner.jpg";
import Meditation from "../../../Images/Meditation.jpg";

export const StructureConfederation = () => {
    const [showModalId, setShowModalId] = useState(null);
    const [activeOpenButton, setActiveOpenButton] = useState(false);
    
        function handleOpenModal(id: any){
            setShowModalId(id);
            setActiveOpenButton(true);
        }
    
        function handleCloseModal(id: any){
            setShowModalId(null);
            setActiveOpenButton(false);
        }

        let structureConfederation;

        if(activeOpenButton === true){
            structureConfederation = classes.modalStructureConfederation
        }

    return (
        <div className={classes.structureConfederationPage}>
            <div className={classes.topbar}><HomeButton/>Структура<BackButton/></div>
            
            <div>
                <button className={classes.buttonModalHuman} onClick={() => {handleOpenModal("1")}} id={"1"}><p>Люди</p></button>
                <button className={classes.buttonModalDesertHuman} onClick={() => {handleOpenModal("2")}} id={"2"}><p>Пустынные люди</p></button>
                <button className={classes.buttonModalRegistan} onClick={() => {handleOpenModal("3")}} id={"3"}><p>Регистаны</p></button>
            </div>

            <div>
                {showModalId === "1" && (<div className={structureConfederation} style={{border: "solid 0.3vw bisque"}}>
                    <h4 style={{color: "bisque"}}>Люди</h4>
                    <p style={{color: "bisque"}}>
                        Треть населения Конфедерации племён составляют обычные люди. Их можно разделить на три группы: 
                        Первая это потомки тех - кто проживал в пустыне ещё до восстания и всегда считал эти земли своими, полностью приняв регистанскую культуру как родную.
                        Во вторую группу входят - люди которые остались на севере после освобождения этих земель и стали обживаться в новом государстве.
                        Третьи же - переселенцы из королевства Инмар, которые по разным причинам предпочли этот удивительный край жёстким догмам своей бывшей родины.
                        Основные занятия этого слоя населения - земледелие, скотоводство, рыбный промысел и различные ремёсла. На вопрос о возможном возвращении в Инмар каждый ответит однозначно: "Никогда!". 
                        Для них Союз стал настоящим домом - свободным от предрассудков и ограничений, которые сковывали их в прежней стране. Все остальные расы Конфедерации относятся к людям как к равноправным братьям, не акцентируя внимание на их происхождении.
                    </p>
                    <img style={{borderRight: "solid 1vw bisque", borderBottom: "solid 1vw bisque"}} src={Farmer} alt="Farmer" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button></div>)}
                {showModalId === "2" && (<div className={structureConfederation} style={{border: "solid 0.3vw rgb(146, 112, 38)"}}>
                    <h4 style={{color: "rgb(146, 112, 38)"}}>Пустынные люди</h4>
                    <p style={{color: "rgb(146, 112, 38)"}}>
                        Пустынные люди, или "Пустынники", как их называют в Инмаре, - потомки смешанных браков между людьми и регистанами. 
                        Эти метисы вобрали в себя лучшие качества обоих народов: неприхотливость людей и физические данные с высоким интеллектом регистанов.
                        Обладая столь выдающимися природными характеристиками, многие Пустынники находят себя в военном деле, составляя элиту армии Конфедерации племён. 
                        Однако не меньшее их число избирает морскую стезю, проявляя себя как: 
                        искусные мореплаватели и капитаны, не раз доказывавшие свою доблесть в морских сражениях,
                        талантливые кораблестроители, чьи верфи рождают совершенные суда, мастера военной инженерии.
                        Их корабли - это шедевры практичности и изящества, где каждый миллиметр продуман до мелочей. 
                        А боевые машины, одни из самых смертоносных во всём Танахе.
                        Но и в гражданской жизни они преуспевают не меньше, составляя основной костяк караванного дела. Здесь в полной мере проявляется унаследованный от регистанов интеллект. 
                        Торговые способности, точные расчёты доходов и расходов, природная деловая хватка - всё это делает пустынников первоклассными торговцами. 
                        Их караваны неизменно приносят Конфедерации стабильную прибыль.
                    </p>
                    <img style={{borderRight: "solid 1vw rgb(146, 112, 38)", borderBottom: "solid 1vw rgb(146, 112, 38)"}} src={Caravaner} alt="Caravaner" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
                {showModalId === "3" && (<div className={structureConfederation} style={{border: "solid 0.3vw rgb(20, 107, 122)"}}>
                    <h4 style={{color: "rgb(20, 107, 122)"}}>Регистаны</h4>
                    <p style={{color: " rgb(20, 107, 122)"}}>
                        Регистаны по праву считаются олицетворением Конфедерации племён. 
                        Эти высокие, темнокожие мужчины и женщины обладают утончённым мировосприятием и выдающимся интеллектом. 
                        Они несут просвещение другим народам Великой пустыни, выводя их из тьмы невежества, царящего в иных странах. 
                        Исповедуя безымянную религию, регистаны живут в уединённых храмах, вдали от мирской суеты, и появляются среди людей лишь тогда, когда обретают истинное знание. 
                        Таких просветлённых называют Идераками, и их советам следуют безоговорочно. В военном искусстве регистаны проявляют себя как гениальные стратеги.
                        Они занимают высшие командные посты в армии, способны предугадать исход битвы ещё до её начала и не раз побеждали численно превосходящего противника, доводя вражеских военачальников до отчаяния своими нестандартными решениями. 
                        Их творческий гений не знает границ - будь то поэзия, живопись, архитектура или скульптура. Именно они создавали те загадочные руины в Инмаре с изысканными барельефами, которым теперь поклоняются их заблудшие северные соседи.
                        В кузнечном деле регистаны не уступают мастерам Медвежьих Вершин. Недаром среди пустынников ходит поговорка: "Нет вернее друга, чем регистанский шамшир".
                    </p>
                    <img style={{borderRight: "solid 1vw rgb(20, 107, 122)", borderBottom: "solid 1vw rgb(20, 107, 122)"}} src={Meditation} alt="Meditation" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
            </div>

        </div>
    )
}