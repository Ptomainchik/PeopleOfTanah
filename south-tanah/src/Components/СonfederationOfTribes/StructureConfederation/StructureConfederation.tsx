import { useState } from "react";
import classes from "../../../Styles/StylesConfederationOfTribes/StructureConfederation.module.css"
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton"
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton"

export const StructureConfederation = () => {
    const [showModalId, setShowModalId] = useState(null);
    
        function handleOpenModal(id: any){
            setShowModalId(id)
        }
    
        function handleCloseModal(id: any){
            setShowModalId(null)
        }

    return (
        <div className={classes.structureConfederationPage}>
            <div className={classes.topbar}><HomeButton/>Structure Confederation of tribes<BackButton/></div>
            
            <div>
                <button className={classes.buttonModalHuman} onClick={() => {handleOpenModal("1")}} id={"1"}><span>Human</span></button>
                <button className={classes.buttonModalDesertHuman} onClick={() => {handleOpenModal("2")}} id={"2"}><span>Desert Human</span></button>
                <button className={classes.buttonModalRegistan} onClick={() => {handleOpenModal("3")}} id={"3"}><span>Registan</span></button>
            </div>

            <div>
                {showModalId === "1" && (<div className={classes.modalRace}>Human <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Close</button></div>)}
                {showModalId === "2" && (<div className={classes.modalRace}>Desert Human <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Close</button></div>)}
                {showModalId === "3" && (<div className={classes.modalRace}>Registan <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Close</button></div>)}
            </div>

        </div>
    )
}