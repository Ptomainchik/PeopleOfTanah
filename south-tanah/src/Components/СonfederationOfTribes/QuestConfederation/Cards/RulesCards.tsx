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
    });

    function handleMessage() {
        if(showMessageRules.Message1 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: true, 
                Message3: false, 
                Message4: false,
            });
    }
        else if(showMessageRules.Message2 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: true, 
                Message4: false,
            }); 
    }
        else if(showMessageRules.Message3 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: true,
            }); 
    }
        else if(showMessageRules.Message4 === true){
            setShowMessageRules({
                Message1: false, 
                Message2: false, 
                Message3: false, 
                Message4: false,
            });
             setButtonDisabled(false);
    }
    }
    
    return (
        <div className={classes.rulesPage}>
            {showMessageRules.Message1 && <div className={classes.messageRules}> 
                <p>
                    "Глухой король" - запрещённая карточная игра в Инмаре, но популярная среди простолюдинов благодаря своему сатирическому характеру, высмеивающему монарха.
                    Играют двое, цель которых - собрать максимальное количество карт в своём 'королевстве' (отбой).
                    Есть две одинаковые колоды карт, которые изначально перетасовываются отдельно друг от друга. Помимо колод, каждому игроку выдаются дополнительные элементы: собственное 'королевство' (место сброса выигранных карт), общий нейтральный 'король' (место сброса карт в случае ничьи) и три специальные карты ('бастард', 'ассасин', 'вассал'), каждая из которых имеет собственные условия и эффекты, но используется лишь однократно.
                    Каждый игрок по очереди достаёт карту из своей колоды. Карта с большим номиналом побеждает, обе карты переходят в его 'королевство'. Если номиналы карт равны, они сбрасываются в 'короля'.
                    Используя специальные карты ('бастарда', 'ассасина', 'вассала') игроки получают возможность повлиять на исход хода или розыгрыш определённых комбинаций.
                    Победителем становится участник, собравший наибольшее число карт в своем 'королевстве' по окончании партии.
                </p> 
                <h3 className={classes.buttonRules} onClick={handleMessage}>---Продолжить---</h3>
            </div>}
            {showMessageRules.Message2 && <div> <div className={classes.message}> 
                <p> 
                    Колоды - из которых игроки вытягивают свои карты в ходе игры. Используются две отдельные колоды, принадлежащие разным игрокам.
                </p> 
                <h3 className={classes.buttonRules} onClick={handleMessage}>---Продолжить---</h3></div> <div className={classes.arrow1}></div> <div className={classes.arrow12}></div> 
            </div> }
            {showMessageRules.Message3 && <div> <div className={classes.message}> 
                <p> 
                    Это специальные карты, каждую из которых любой игрок может использовать по одному разу в игре.
                </p> 
                <h3 className={classes.buttonRules} onClick={handleMessage}>---Продолжить---</h3></div> <div className={classes.arrow2}></div> <div className={classes.arrow3}></div> 
            </div>}
            {showMessageRules.Message4 && <div> <div className={classes.message}> 
                <p> 
                    Это королевства, куда игроки собирают карты, если кто-то из них побеждает в раунде. Если же происходит ничья, карты переходят к королю.
                </p> 
                <h3 className={classes.buttonRules} onClick={handleMessage}>---Начать---</h3></div> <div className={classes.arrow4}></div> <div className={classes.arrow5}></div> <div className={classes.arrow6}></div> 
            </div>}
        </div>
    )
}

interface RulesDiceProps {
    setButtonDisabled: (value: boolean) => void;
}