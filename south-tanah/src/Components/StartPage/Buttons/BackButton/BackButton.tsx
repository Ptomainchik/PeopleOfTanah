import { useNavigate } from 'react-router-dom';
import classes from "../../../../Styles/OverallButtons.module.css"

export function BackButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div className={classes.button}>
    <p className={classes.backButton} title="Назад" onClick={handleClick}>
      Назад
    </p>
    </div>
  );
}