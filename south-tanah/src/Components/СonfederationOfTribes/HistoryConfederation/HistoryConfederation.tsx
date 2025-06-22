import { useState } from "react";
import classes from "../../../Styles/History.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Background from "../../../Images/DesertConfederation.jpg";
import Eltabar from "../../../Images/Eltabar.jpg";
import Insurrection from "../../../Images/Insurrection.jpg";
import Temple from "../../../Images/Temple.jpg";
import Caravans from "../../../Images/Caravans.jpg";
import SoldierOfRegistan from "../../../Images/SoldierOfRegistan.jpg";
import CoatOfArmsOfTheConfederationOfTribes from "../../../Images/CoatOfArmsOfTheConfederationOfTribes.webp";

export const HistoryConfederation = () => {
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
            <div className={classes.topbar} style={{background: "goldenrod"}}><HomeButton/>История<BackButton/></div>
            <div className={classes.coatOfArms}>
                <h2 style={{color:"goldenrod"}}>Конфедерация племён</h2>
                <img src={CoatOfArmsOfTheConfederationOfTribes} alt="CoatOfTheConfederationOfTribes" title="Герб Конфедерации племён"  draggable={"false"}/>
            </div>
            <button className={classes.buttonOpenModal1} id={"1"} onClick={() => {handleOpenModal("1")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 1</p></button>
            {showModalId === "1" && (<div className={buttonClassLeft} id={"1"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 1</h4> 
                <p style={{color:"goldenrod"}}>
                    Озарённый солнечными лучами, этот край раскинулся на бескрайних просторах великой пустыни. 
                    На западе его омывает Живое море, способное накормить весь континент. 
                    С юга и востока простираются раскалённые пески, где лишь немногие способны выжить. 
                    А с севера нависает оскалившийся безрассудный зверь, жаждущий лишь момента слабости, чтобы обрушить свою алчность и присвоить эти земли.
                    Именно здесь живёт и процветает одно из мудрейших обществ, отбросившее глупость остального мира ради созидания. 
                    Конфедерация племён - в прошлом разрозненные малочисленные группы - объединилась перед лицом врага и создала это могущественное государство. 
                    Правит им старейший из них - эльтабар Сигет, приложивший немало усилий для становления союза.
                </p>
                <img className={classes.imageModalHistory} src={Eltabar} alt="Eltabar" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button>
            </div>)}
            <button className={classes.buttonOpenModal2} id={"2"} onClick={() => {handleOpenModal("2")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 2</p></button>
            {showModalId === "2" && (<div className={buttonClassRight} id={"2"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 2</h4>
                <p style={{color:"goldenrod"}}>
                    В те времена, когда Конфедерации племён ещё не существовало, север этих земель находился под протекторатом Королевства Инмар. 
                    Местное население подвергалось всевозможным ущемлениям прав и свобод, считаясь людьми второго сорта.
                    Мелкие правители, разбросанные по Великой пустыне, не собирались освобождать своих сородичей, будучи озабоченными лишь собственной безопасностью и процветанием. 
                    Все эти города-государства связывала лишь одна вещь - торговля посредством караванов. Никто даже не задумывался о чём-то большем... кроме одного регистана.
                    Адепт Сигет, в те годы постигавший глубинный смысл существования в религии, уже тогда был разочарован происходящим в пустыне. Он понимал: при таком подходе к жизни, как у тогдашних правителей, в будущем их народ ждёт только рабство.
                    Собрав немногие пожитки, он отправился проповедовать и искать единомышленников. 
                    Спустя годы ему удалось создать целую подпольную сеть прямо под носом у правителей. 
                    Эта сеть имела своих людей даже на оккупированных территориях. Когда всё было готово, Сигет дал сигнал к действию.
                    Огонь восстания охватил весь север - повсюду полыхали поджоги. Горели казармы, арсеналы и дворцы иноземных наместников. 
                    Бунт охватил все слои населения, и местные власти Великой пустыни были вынуждены заключить союз между собой под натиском этого яростного духа свободы - иначе их ждала бы участь инмарцев.
                    С северных территорий инмарцы попросту бежали, неспособные противостоять лавине беспощадного возмездия, осуществляемого бывшими рабами.
                    Когда мятеж увенчался успехом и север окончательно освободился от захватчиков, вопрос о том, кто возглавит эту объединённую силу, даже не стоял - единогласно эльтабаром был избран Сигет.
                </p>
                <img className={classes.imageModalHistory} src={Insurrection} alt="Insurrection" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal3} id={"3"} onClick={() => {handleOpenModal("3")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 3</p></button>
            {showModalId === "3" && (<div className={buttonClassLeft} id={"3"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 3</h4>
                <p style={{color:"goldenrod"}}>
                    Зарождение религии, а если говорить точнее - мировоззрения Конфедерации племён, ведёт своё начало из древности, когда континент был охвачен Вечной Зимой.
                    До катаклизма регистаны населяли земли нынешнего Королевства Инмар, где созерцали природу и вдохновлялись ею, возводя грандиозные сооружения и монументы. 
                    На месте Великой пустыни тогда простиралось море. Когда холода стали медленно поглощать север континетна, на юге воды отступили, обнажив пески.
                    Из-за невыносимых условий нового климата большинству регистанов пришлось мигрировать в образовавшуюся южную пустыню, где они и обосновались до наших дней. 
                    Однако некоторые остались, продолжая бороться с суровыми холодами. За долгую эпоху Вечной Зимы оставшиеся регистаны изменились до неузнаваемости: их кожа побелела, они утратили в росте и стали походить на современных инмарцев. 
                    Сквозь тысячелетия они забыли свои истинные корни. Былое наследие в виде руин и каменных изваяний животных превратилось для них в объекты поклонения, став своеобразными богами.
                    Современные регистаны, подобно своим предкам, исповедуют безымянное учение - его сложно назвать религией в привычном понимании, поскольку оно не подразумевает ни богов, ни поклонения идолам. 
                    По сути, это скорее философия, основанная на почитании всех форм жизни и каждого проявления бытия в этом мире.
                    Попытки вернуть эволюционировавших сородичей к истокам не увенчались успехом, приводя лишь к распрям и локальным конфликтам. 
                    Инмарцы твёрдо убеждены, что являются потомками древних богов, в особенности Белого Быка, а истории с юга воспринимают как попытки исказить истину.
                </p>
                <img className={classes.imageModalHistory} src={Temple} alt="Image3" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal4} id={"4"} onClick={() => {handleOpenModal("4")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 4</p></button>
            {showModalId === "4" && (<div className={buttonClassRight} id={"4"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 4</h4>
                <p style={{color:"goldenrod"}}>
                    Одно из главных занятий, приносящих Конфедерации огромные богатства, - караванная торговля. 
                    Эта система способна поддержать союз в самые трудные времена, поскольку не имеет централизованного казначейства. 
                    Даже в критической ситуации любой из многочисленных караванов располагает собственными запасами для восполнения потерь.
                    Поэтому попытки разрушить союз путём его разграбления обречены на провал. 
                    Караваны подобны кровеносным сосудам организма - их маршруты простираются во всех направлениях и постоянно меняются.
                    Уникальная экономика Конфедерации, где каждый город обладает собственной казной и устанавливает свои налоги без централизованного управления, сохранила свои преимущества с тех времён, когда союза ещё не существовало.
                    Хотя и с осторожностью, многие караваны выходят за пределы Конфедерации племён, продвигая товары государства за рубежом и закупая иностранные. 
                    Таким образом они насыщают союз новой "свежей кровью", поддерживая его жизнеспособность.
                </p>
                <img className={classes.imageModalHistory} src={Caravans} alt="Caravans" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal5} id={"5"} onClick={() => {handleOpenModal("5")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 5</p></button>
            {showModalId === "5" && (<div className={buttonClassLeft} id={"5"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 5</h4>
                <p style={{color:"goldenrod"}}>
                    Армия Конфедерации племён представляет собой многообразие войск: кавалерию, инженеров с их боевыми машинами, но её основой остаётся первоклассная пехота.
                    В её рядах сражаются потомки смешанных браков между регистанами и инмарцами, по разным причинам переселившиеся в Великую пустыню. 
                    Это крепкие мужчины - не столь высокие, как чистые регистаны, но всё же внушительных размеров.
                    Казалось бы, их габариты должны делать движения скованными, однако действительность опровергает это предположение. 
                    Их грация в обращении с шамширами напоминает танец: подобно ветвям, качающимся на ветру, каждое движение отточено до совершенства, а удар наносится единожды, без шансов для противника.
                    Ловкость, с которой они устраивают засады, оставаясь незамеченными до рокового момента, вызывает одновременно ужас и восхищение. 
                    Они способны сутками лежать в раскалённых песках под своими накидками, подобно гадюкам, поджидающим добычу.
                    Когда ничего не подозревающий враг бредёт по барханам, вокруг него внезапно вырастают целые отряды, словно материализовавшиеся из самой пустыни. В панической неразберихе он уже обречён.
                    Неудивительно, что в Королевстве Инмар о них слагают жуткие легенды, а матери пугают непослушных детей: "Пустыник вылезет из-под земли и заберёт тебя!"
                </p>
                <img className={classes.imageModalHistory} src={SoldierOfRegistan} alt="SoldierOfRegistan" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Закрыть</button></div>)}
        </div>
    )
}