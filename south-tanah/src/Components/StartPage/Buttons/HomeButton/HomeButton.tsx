import { useNavigate } from 'react-router-dom';
import classes from "../../../../Styles/OverallButtons.module.css";

export function HomeButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <div className={classes.button}>
    <p className={classes.homeButton} title="Home" onClick={handleClick}>
      Home
    </p>
    </div>
  );
}