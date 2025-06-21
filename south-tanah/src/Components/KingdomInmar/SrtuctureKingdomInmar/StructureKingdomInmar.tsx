import { useState } from "react";
import classes from "../../../Styles/StylesKingdomInmar/StructureKingdomInmar.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import North from "../../../Images/North.jpg";
import Northeast from "../../../Images/East.jpg";
import Northwest from "../../../Images/West.jpg";
import Center from "../../../Images/Center.jpg";
import Southeast from "../../../Images/Southeast.jpg";
import Southwest from "../../../Images/Southwest.jpg";
import BullMonument from "../../../Images/BullMonument.jpg";
import HighCouncil from "../../../Images/HighCouncil.jpg";
import Keys from "../../../Images/Keys.jpg";

export const StructureKingdomInmar = () => {
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
   
    let structureInmar

    if(activeOpenButton === true){
        structureInmar = classes.modalClassStructureInmar
    }
    
    return (
        <div className={classes.structureKindomInmarPage}>
            <div className={classes.topbar}><HomeButton/>Структура<BackButton/></div>
                <div>
                    <p className={classes.buttonModalNorth} id={"1"} onClick={() => {handleOpenModal("1")}}><p>Север</p></p>
                    <p className={classes.buttonModalNorthwest} id={"2"} onClick={() => {handleOpenModal("2")}}><p>Северо-Запад</p></p>
                    <p className={classes.buttonModalNortheast} id={"3"} onClick={() => {handleOpenModal("3")}}><p>Северо-Восток</p></p>
                    <p className={classes.buttonModalCenter} id={"4"} onClick={() => {handleOpenModal("4")}}><p>Центр</p></p>
                    <p className={classes.buttonModalSouthwest} id={"5"} onClick={() => {handleOpenModal("5")}}><p>Юго-Запад</p></p>
                    <p className={classes.buttonModalSoutheast} id={"6"} onClick={() => {handleOpenModal("6")}}><p>Юго-Восток</p></p>
                    <button className={classes.buttonModalRighteous} id={"7"} onClick={() => {handleOpenModal("7")}}><p>Праведники</p></button>
                    <button className={classes.buttonModalCouncil} id={"8"} onClick={() => {handleOpenModal("8")}}><p>Совет</p></button>
                    <button className={classes.buttonModalOrder} id={"9"} onClick={() => {handleOpenModal("9")}}><p>Орден</p></button>
                </div>

                <div>
                    {showModalId === "1" && (<div className={classes.modalStructure} id={"1"} style={{border: "solid 0.3vw blue"}}> 
                            <h4 style={{color: "blue"}}>Модхал</h4> 
                            <p style={{color: "blue"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                            Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.
                            </p>
                        <div>
                            <img style={{borderRight: "solid 1vw blue", borderBottom: "solid 1vw blue"}} src={North} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "2" && (<div className={classes.modalStructure} id={"2"} style={{border: "solid 0.3vw blueviolet"}}>
                        <h4 style={{color: "blueviolet"}}>Кива</h4> 
                        <p style={{color: "blueviolet"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw blueviolet", borderBottom: "solid 1vw blueviolet"}} src={Northwest} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "3" && (<div className={classes.modalStructure} id={"3"} style={{border: "solid 0.3vw yellow"}}>
                        <h4 style={{color: "yellow"}}>Явис</h4> 
                        <p style={{color: "yellow"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw yellow", borderBottom: "solid 1vw yellow"}} src={Northeast} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "4" && (<div className={classes.modalStructure} id={"4"} style={{border: "solid 0.3vw green"}}>
                        <h4 style={{color: "green"}}>Киллат</h4> 
                        <p style={{color: "green"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw green", borderBottom: "solid 1vw green"}} src={Center} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "5" && (<div className={classes.modalStructure} id={"5"} style={{border: "solid 0.3vw orange"}}>
                        <h4 style={{color: "orange"}}>Сикил</h4> 
                        <p style={{color: "orange"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw orange", borderBottom: "solid 1vw orange"}} src={Southwest} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "6" && (<div className={classes.modalStructure} id={"6"} style={{border: "solid 0.3vw red"}}>
                        <h4 style={{color: "red"}}>Лутут</h4> 
                        <p style={{color: "red"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw red", borderBottom: "solid 1vw red"}} src={Southeast} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"6"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "7" && (<div className={structureInmar} id={"7"} style={{border: "solid 0.3vw rgb(221, 221, 128)"}}>
                        <h4 style={{color: "rgb(221, 221, 128)"}}>Праведники</h4> 
                        <p style={{color: "rgb(221, 221, 128)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw rgb(221, 221, 128)", borderBottom: "solid 1vw rgb(221, 221, 128)"}} src={BullMonument} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"7"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "8" && (<div className={structureInmar} id={"8"} style={{border: "solid 0.3vw chartreuse"}}>
                        <h4 style={{color: "chartreuse"}}>Высший совет</h4> 
                        <p style={{color: "chartreuse"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw chartreuse", borderBottom: "solid 1vw chartreuse"}} src={HighCouncil} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"8"} onClick={handleCloseModal}>Закрыть</button></div>)}
                    {showModalId === "9" && (<div className={structureInmar} id={"9"} style={{border: "solid 0.3vw darkblue"}}>
                        <h4 style={{color: "darkblue"}}>Орден ключей</h4> 
                        <p style={{color: "darkblue"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw darkblue", borderBottom: "solid 1vw darkblue"}} src={Keys} alt="Image1" draggable={"false"}/>
                        </div>
                        <button className={classes.buttonCloseModal} id={"9"} onClick={handleCloseModal}>Закрыть</button></div>)}
                </div>
        </div>
    )
}