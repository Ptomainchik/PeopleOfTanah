import { useState } from "react";
import classes from "../../../Styles/StylesKingdomInmar/StructureKingdomInmar.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Image from "../../../Images/InmarForest.jpg";

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
            <div className={classes.topbar}><HomeButton/>Structure Kingdom Inmar<BackButton/></div>
                <div>
                    <p className={classes.buttonModalNorth} id={"1"} onClick={() => {handleOpenModal("1")}}><span>North Modhal</span></p>
                    <p className={classes.buttonModalNorthwest} id={"2"} onClick={() => {handleOpenModal("2")}}><span>Northwest Kiwa</span></p>
                    <p className={classes.buttonModalNortheast} id={"3"} onClick={() => {handleOpenModal("3")}}><span>Northeast Yawis</span></p>
                    <p className={classes.buttonModalCenter} id={"4"} onClick={() => {handleOpenModal("4")}}><span>Center Kilat</span></p>
                    <p className={classes.buttonModalSouthwest} id={"5"} onClick={() => {handleOpenModal("5")}}><span>Southwest Sikil</span></p>
                    <p className={classes.buttonModalSoutheast} id={"6"} onClick={() => {handleOpenModal("6")}}><span>Southeast Lutut</span></p>
                    <button className={classes.buttonModalRighteous} id={"7"} onClick={() => {handleOpenModal("7")}}><span>The righteous</span></button>
                    <button className={classes.buttonModalCouncil} id={"8"} onClick={() => {handleOpenModal("8")}}><span>High Council</span></button>
                    <button className={classes.buttonModalOrder} id={"9"} onClick={() => {handleOpenModal("9")}}><span>Order of the Keys</span></button>
                </div>

                <div>
                    {showModalId === "1" && (<div className={classes.modalStructure} id={"1"}> 
                            <h4>North</h4> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                            Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.
                            </p>
                        <div>
                            <img style={{borderRight: "solid 1vw blue", borderBottom: "solid 1vw blue"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "2" && (<div className={classes.modalStructure} id={"2"}>
                        <h4>Northwest</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw blueviolet", borderBottom: "solid 1vw blueviolet"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "3" && (<div className={classes.modalStructure} id={"3"}>
                        <h4>Northeast</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw yellow", borderBottom: "solid 1vw yellow"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "4" && (<div className={classes.modalStructure} id={"4"}>
                        <h4>Center</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw green", borderBottom: "solid 1vw green"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "5" && (<div className={classes.modalStructure} id={"5"}>
                        <h4>Southwest</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw orange", borderBottom: "solid 1vw orange"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "6" && (<div className={classes.modalStructure} id={"6"}>
                        <h4>Southest</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw red", borderBottom: "solid 1vw red"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"6"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "7" && (<div className={structureInmar} id={"7"}>
                        <h4>Righteous</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw rgb(221, 221, 128)", borderBottom: "solid 1vw rgb(221, 221, 128)"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"7"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "8" && (<div className={structureInmar} id={"8"}>
                        <h4>Council</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw chartreuse", borderBottom: "solid 1vw chartreuse"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"8"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "9" && (<div className={structureInmar} id={"9"}>
                        <h4>Order</h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore nobis facilis voluptates, consequuntur officiis. 
                        Quaerat, ducimus dolor voluptas fugiat maiores veritatis ab dolorem sint incidunt ea, corrupti quidem sapiente.</p>
                        <div>
                            <img style={{borderRight: "solid 1vw darkblue", borderBottom: "solid 1vw darkblue"}} src={Image} alt="Image1" />
                        </div>
                        <button className={classes.buttonCloseModal} id={"9"} onClick={handleCloseModal}>Close</button></div>)}
                </div>
        </div>
    )
}