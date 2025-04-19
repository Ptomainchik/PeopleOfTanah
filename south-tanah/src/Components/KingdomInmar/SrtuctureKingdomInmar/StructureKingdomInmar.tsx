import { useState } from "react"
import classes from "../../../Styles/StylesKingdomInmar/StructureKingdomInmar.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const StructureKingdomInmar = () => {
    const [showModalId, setShowModalId] = useState(null);

    function handleOpenModal(id: any){
        setShowModalId(id);
    }

    function handleCloseModal(id: any){
        setShowModalId(null);
    }
   
    return (
        <div className={classes.structureKindomInmarPage}>
            <div className={classes.topbar}><HomeButton/>Structure Kingdom Inmar<BackButton/></div>
                <div>
                    <button className={classes.buttonModalNorth} id={"1"} onClick={() => {handleOpenModal("1")}}><span>North Modhal</span></button>
                    <button className={classes.buttonModalNorthwest} id={"2"} onClick={() => {handleOpenModal("2")}}><span>Northwest Kiwa</span></button>
                    <button className={classes.buttonModalNortheast} id={"3"} onClick={() => {handleOpenModal("3")}}><span>Northeast Yawis</span></button>
                    <button className={classes.buttonModalCenter} id={"4"} onClick={() => {handleOpenModal("4")}}><span>Center Kilat</span></button>
                    <button className={classes.buttonModalSouthwest} id={"5"} onClick={() => {handleOpenModal("5")}}><span>Southwest Sikil</span></button>
                    <button className={classes.buttonModalSoutheast} id={"6"} onClick={() => {handleOpenModal("6")}}><span>Southeast Lutut</span></button>
                    <button className={classes.buttonModalRighteous} id={"7"} onClick={() => {handleOpenModal("7")}}><span>The righteous</span></button>
                    <button className={classes.buttonModalCouncil} id={"8"} onClick={() => {handleOpenModal("8")}}><span>High Council</span></button>
                    <button className={classes.buttonModalOrder} id={"9"} onClick={() => {handleOpenModal("9")}}><span>Order of the Keys</span></button>
                </div>

                <div>
                    {showModalId === "1" && (<div className={classes.modalDistrict} id={"1"}>North <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "2" && (<div className={classes.modalDistrict} id={"2"}>Northwest <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "3" && (<div className={classes.modalDistrict} id={"3"}>Northeast <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "4" && (<div className={classes.modalDistrict} id={"4"}>Center <button className={classes.buttonCloseModal} id={"4"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "5" && (<div className={classes.modalDistrict} id={"5"}>Southwest <button className={classes.buttonCloseModal} id={"5"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "6" && (<div className={classes.modalDistrict} id={"6"}>Southeast <button className={classes.buttonCloseModal} id={"6"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "7" && (<div className={classes.modalRighteous} id={"7"}>Righteous <button className={classes.buttonCloseModal} id={"7"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "8" && (<div className={classes.modalCouncil} id={"8"}>Council <button className={classes.buttonCloseModal} id={"8"} onClick={handleCloseModal}>Close</button></div>)}
                    {showModalId === "9" && (<div className={classes.modalOrder} id={"9"}>Order <button className={classes.buttonCloseModal} id={"9"} onClick={handleCloseModal}>Close</button></div>)}
                </div>
        </div>
    )
}