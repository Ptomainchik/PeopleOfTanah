import { useState } from "react";
import classes from "../../../Styles/History.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Image from "../../../Images/InmarForestBackroundChoice.jpg"

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
        <div className={classes.historyPage}>
            <div className={classes.topbar}><HomeButton/>History Kingdom Inmar<BackButton/></div>
            <button className={classes.buttonOpenModal1} id={"1"} onClick={() => {handleOpenModal("1")}}><span className={classes.titleChapterHistory}>Chapter 1</span></button>
            {showModalId === "1" && (<div className={buttonClassLeft} id={"1"}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <div className={classes.overflowImageModalHistory}>
                    <img className={classes.imageModalHistory} src={Image} alt="Image1" /> 
                </div>
                <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Close</button></div>)}
            <button className={classes.buttonOpenModal2} id={"2"} onClick={() => {handleOpenModal("2")}}><span className={classes.titleChapterHistory}>Chapter 2</span></button>
            {showModalId === "2" && (<div className={buttonClassRight} id={"2"}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <div className={classes.overflowImageModalHistory}>
                    <img className={classes.imageModalHistory} src={Image} alt="Image2" /> 
                </div>
                <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Close</button></div>)}
            <button className={classes.buttonOpenModal3} id={"3"} onClick={() => {handleOpenModal("3")}}><span className={classes.titleChapterHistory}>Chapter 3</span></button>
            {showModalId === "3" && (<div className={buttonClassLeft} id={"3"}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <div className={classes.overflowImageModalHistory}>
                    <img className={classes.imageModalHistory} src={Image} alt="Image3" /> 
                </div>
                <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Close</button></div>)}
            <button className={classes.buttonOpenModal4} id={"4"} onClick={() => {handleOpenModal("4")}}><span className={classes.titleChapterHistory}>Chapter 4</span></button>
            {showModalId === "4" && (<div className={buttonClassRight} id={"4"}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <div className={classes.overflowImageModalHistory}>
                    <img className={classes.imageModalHistory} src={Image} alt="Image4" /> 
                </div>
                <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Close</button></div>)}
            <button className={classes.buttonOpenModal5} id={"5"} onClick={() => {handleOpenModal("5")}}><span className={classes.titleChapterHistory}>Chapter 5</span></button>
            {showModalId === "5" && (<div className={buttonClassLeft} id={"5"}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam doloremque, maiores hic dignissimos ad omnis. 
                Mollitia sunt minima ad minus quidem voluptatem soluta cum. Ad velit eligendi assumenda reiciendis aliquam?
                </p>
                <div className={classes.overflowImageModalHistory}>
                    <img className={classes.imageModalHistory} src={Image} alt="Image5" /> 
                </div>
                <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Close</button></div>)}
        </div>
    )
}