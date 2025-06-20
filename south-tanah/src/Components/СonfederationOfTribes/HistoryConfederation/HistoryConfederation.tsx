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
            <div className={classes.topbar} style={{background: "goldenrod"}}><HomeButton/>История Конфедерации племён<BackButton/></div>
            <button className={classes.buttonOpenModal1} id={"1"} onClick={() => {handleOpenModal("1")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 1</p></button>
            {showModalId === "1" && (<div className={buttonClassLeft} id={"1"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 1</h4> 
                <p style={{color:"goldenrod"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <img className={classes.imageModalHistory} src={Eltabar} alt="Eltabar" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button>
            </div>)}
            <button className={classes.buttonOpenModal2} id={"2"} onClick={() => {handleOpenModal("2")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 2</p></button>
            {showModalId === "2" && (<div className={buttonClassRight} id={"2"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 2</h4>
                <p style={{color:"goldenrod"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <img className={classes.imageModalHistory} src={Insurrection} alt="Insurrection" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal3} id={"3"} onClick={() => {handleOpenModal("3")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 3</p></button>
            {showModalId === "3" && (<div className={buttonClassLeft} id={"3"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 3</h4>
                <p style={{color:"goldenrod"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <img className={classes.imageModalHistory} src={Temple} alt="Image3" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal4} id={"4"} onClick={() => {handleOpenModal("4")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 4</p></button>
            {showModalId === "4" && (<div className={buttonClassRight} id={"4"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 4</h4>
                <p style={{color:"goldenrod"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <img className={classes.imageModalHistory} src={Caravans} alt="Caravans" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Закрыть</button></div>)}
            <button className={classes.buttonOpenModal5} id={"5"} onClick={() => {handleOpenModal("5")}}><p className={classes.titleChapterHistory} style={{color: "goldenrod", WebkitTextStroke: "1px black"}}>Глава 5</p></button>
            {showModalId === "5" && (<div className={buttonClassLeft} id={"5"} style={{border: "solid 0.3vw goldenrod"}}>
                <h4 style={{color:"goldenrod"}}>Глава 5</h4>
                <p style={{color:"goldenrod"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <img className={classes.imageModalHistory} src={SoldierOfRegistan} alt="SoldierOfRegistan" draggable={"false"} style={{borderRight: "solid 1vw goldenrod", borderBottom: "solid 1vw goldenrod"}}/> 
                <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Закрыть</button></div>)}
        </div>
    )
}