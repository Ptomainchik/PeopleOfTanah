import { useState } from "react"
import classes from "../../../Styles/StylesConfederationOfTribes/HistoryConfederation.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

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
        <div className={classes.historyPage}>
            <div className={classes.topbar}><HomeButton/>History Confederation of tribes<BackButton/></div>
            <p>History Confederation of tribes</p>
            <button className={classes.buttonOpenModal1} id={"1"} onClick={() => {handleOpenModal("1")}}>Chapter 1</button>
            {showModalId === "1" && (<div className={buttonClassLeft} id={"1"}><button className={classes.buttonCloseModalLeft} id={"1"} onClick={handleCloseModal}>Close</button><p>111111111111111111111111111111111111111111111111111111111111111111111111111111111</p></div>)}
            <button className={classes.buttonOpenModal2} id={"2"} onClick={() => {handleOpenModal("2")}}>Chapter 2</button>
            {showModalId === "2" && (<div className={buttonClassRight} id={"2"}><button className={classes.buttonCloseModalRight} id={"2"} onClick={handleCloseModal}>Close</button><p>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222</p></div>)}
            <button className={classes.buttonOpenModal3} id={"3"} onClick={() => {handleOpenModal("3")}}>Chapter 3</button>
            {showModalId === "3" && (<div className={buttonClassLeft} id={"3"}><button className={classes.buttonCloseModalLeft} id={"3"} onClick={handleCloseModal}>Close</button><p>33333333333333333333333333333333333333333333333333333333333333333333333</p></div>)}
            <button className={classes.buttonOpenModal4} id={"4"} onClick={() => {handleOpenModal("4")}}>Chapter 4</button>
            {showModalId === "4" && (<div className={buttonClassRight} id={"4"}><button className={classes.buttonCloseModalRight} id={"4"} onClick={handleCloseModal}>Close</button><p>444444444444444444444444444444444444444444444444444444444444444444444444444444</p></div>)}
            <button className={classes.buttonOpenModal5} id={"5"} onClick={() => {handleOpenModal("5")}}>Chapter 5</button>
            {showModalId === "5" && (<div className={buttonClassLeft} id={"5"}><button className={classes.buttonCloseModalLeft} id={"5"} onClick={handleCloseModal}>Close</button><p>55555555555555555555555555555555555555555555555555555555555555555555555</p></div>)}
        </div>
    )
}