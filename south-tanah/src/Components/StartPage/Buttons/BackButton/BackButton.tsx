import { useNavigate } from 'react-router-dom';
import classes from "../../../../Styles/OverallButtons.module.css"

export function BackButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div className={classes.button}>
    <button className={classes.backButton} type="button" title="Back" onClick={handleClick}>
      Back
    </button>
    </div>
  );
}