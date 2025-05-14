import { useState } from "react";
import classes from "../../../Styles/StylesConfederationOfTribes/StructureConfederation.module.css";
import { BackButton } from "../../StartPage/Buttons/BackButton/BackButton";
import { HomeButton } from "../../StartPage/Buttons/HomeButton/HomeButton";
import Image from "../../../Images/DesertConfederation.jpg";

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
            <div className={classes.topbar}><HomeButton/>Структура Конфедерации племён<BackButton/></div>
            
            <div>
                <button className={classes.buttonModalHuman} onClick={() => {handleOpenModal("1")}} id={"1"}><span>Люди</span></button>
                <button className={classes.buttonModalDesertHuman} onClick={() => {handleOpenModal("2")}} id={"2"}><span>Пустынные люди</span></button>
                <button className={classes.buttonModalRegistan} onClick={() => {handleOpenModal("3")}} id={"3"}><span>Регистанцы</span></button>
            </div>

            <div>
                {showModalId === "1" && (<div className={structureConfederation} style={{border: "solid 0.3vw bisque"}}>
                    <h4 style={{color: "bisque"}}>Люди</h4>
                    <p style={{color: "bisque"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel, esse cum quos officiis hic nostrum placeat minima eveniet, 
                    quod, perspiciatis sequi obcaecati dolores neque debitis quidem exercitationem optio assumenda?
                    </p>
                    <img style={{borderRight: "solid 1vw bisque", borderBottom: "solid 1vw bisque"}} src={Image} alt="Image1" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"1"} onClick={handleCloseModal}>Закрыть</button></div>)}
                {showModalId === "2" && (<div className={structureConfederation} style={{border: "solid 0.3vw rgb(146, 112, 38)"}}>
                    <h4 style={{color: "rgb(146, 112, 38)"}}>Пустынные люди</h4>
                    <p style={{color: "rgb(146, 112, 38)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel, esse cum quos officiis hic nostrum placeat minima eveniet, 
                    quod, perspiciatis sequi obcaecati dolores neque debitis quidem exercitationem optio assumenda?
                    </p>
                    <img style={{borderRight: "solid 1vw rgb(146, 112, 38)", borderBottom: "solid 1vw rgb(146, 112, 38)"}} src={Image} alt="Image1" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"2"} onClick={handleCloseModal}>Закрыть</button></div>)}
                {showModalId === "3" && (<div className={structureConfederation} style={{border: "solid 0.3vw rgb(20, 107, 122)"}}>
                    <h4 style={{color: "rgb(20, 107, 122)"}}>Регистанцы</h4>
                    <p style={{color: " rgb(20, 107, 122)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel, esse cum quos officiis hic nostrum placeat minima eveniet, 
                    quod, perspiciatis sequi obcaecati dolores neque debitis quidem exercitationem optio assumenda?
                    </p>
                    <img style={{borderRight: "solid 1vw rgb(20, 107, 122)", borderBottom: "solid 1vw rgb(20, 107, 122)"}} src={Image} alt="Image1" draggable={"false"}/>
                    <button className={classes.buttonCloseModal} id={"3"} onClick={handleCloseModal}>Закрыть</button></div>)}
            </div>

        </div>
    )
}