import { useState } from "react";
import classes from "../../../../Styles/StylesConfederationOfTribes/Cards.module.css";

export const RulesCards = ({ 
    setButtonDisabled
}: RulesDiceProps) => {
    const [showMessageRules, setShowMessageRules] = useState({
        Message1: true, 
        Message2: false, 
        Message3: false, 
        Message4: false,
        Message5: false,});

    function handleMessage() {
        if(showMessageRules.Message1 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: true, 
                Message3: false, 
                Message4: false,
                Message5: false,
            });
    }
        else if(showMessageRules.Message2 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: true, 
                Message4: false,
                Message5: false,
            }); 
    }
        else if(showMessageRules.Message3 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: true,
                Message5: false,
            }); 
    }
        else if(showMessageRules.Message4 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
                Message5: true,
            });
    }
        else if(showMessageRules.Message5 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
                Message5: false,
            });
            setButtonDisabled(false);
    }
    }
    
    return (
        <div className={classes.rulesPage}>
            {showMessageRules.Message1 && <div className={classes.message}> <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum eius sed ipsum dolor? Eius in natus, quod tempora numquam accusamus eos sed sequi cupiditate illum iste accusantium optio nihil.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div>}
            {showMessageRules.Message2 && <div> <div className={classes.message}> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est cumque veritatis, omnis fuga explicabo cupiditate ad accusamus unde doloremque esse accusantium voluptatem ab error. Porro dolorem totam adipisci doloremque?</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow1}></div> </div> }
            {showMessageRules.Message3 && <div> <div className={classes.message}> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti recusandae laudantium rerum nemo distinctio laboriosam aperiam ratione totam, qui laborum est modi aliquid maiores blanditiis. Unde molestias dolor est ducimus!</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow2}></div> <div className={classes.arrow3}></div> </div>}
            {showMessageRules.Message4 && <div> <div className={classes.message}> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus. Voluptatem in, dolorum provident commodi porro quae velit illo explicabo fugiat quas. Alias unde velit itaque, fuga voluptatum numquam. Dolores.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Продолжить-----</p></div> <div className={classes.arrow4}></div> <div className={classes.arrow5}></div> <div className={classes.arrow6}></div> </div>}
            {showMessageRules.Message5 && <div> <div className={classes.message}> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ducimus. Voluptatem in, dolorum provident commodi porro quae velit illo explicabo fugiat quas. Alias unde velit itaque, fuga voluptatum numquam. Dolores.</p> <p className={classes.buttonRules} onClick={handleMessage}>-----Начать-----</p></div> <div className={classes.arrow7}></div> <div className={classes.arrow8}></div> </div>}
        </div>
    )
}

interface RulesDiceProps {
    setButtonDisabled: (value: boolean) => void;
}