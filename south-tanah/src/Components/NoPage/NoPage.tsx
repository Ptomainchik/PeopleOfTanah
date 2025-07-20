import { useNavigate } from "react-router-dom";
import classes from "../../Styles/StartPage.module.css";
import { useEffect } from "react";

export const NoPage = () => {

    function handleHome() {
        const navigate = useNavigate();
    
        navigate("/");
    }
    
 
    return (
        <div className={classes.noPage}>
            <button onClick={handleHome}>Home</button>
        </div>
    )
}