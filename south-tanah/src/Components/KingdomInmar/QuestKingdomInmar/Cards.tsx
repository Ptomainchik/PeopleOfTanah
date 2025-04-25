import { useState } from "react";
import classes from "../../../Styles/StylesKingdomInmar/Quest.module.css";

export const Cards = () => {
    const [cardOpponent, setCardOpponent] = useState<number>(0);
    const [card, setCard] = useState<number>(0);
    const [deck, setDeck] = useState<number[]>([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5]);
    const [choiceCard, setChioceCard] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showCardOpponent, setShowCardOpponent] = useState(false);
    const [showVassal, setShowVassal] = useState(true);
    const [showVassalOpponent, setShowVassalOpponent] = useState(true);
    const [showAssassin, setShowAssassin] = useState(true);
    const [showAssassinOpponent, setShowAssassinOpponent] = useState(true);
    const [showBastard, setShowBastard] = useState(true);
    const [showBastardOpponent, setShowBastardOpponent] = useState(true);
    const [kingdomOpponent, setKingdomOpponent] = useState(0);
    const [kingdom, setKingdom] = useState(0);
    const [king, setKing] = useState(0);
    const [counterAttack, setCounterAttack] = useState(0);
    const [randomNumberVassal, setRandomNumberVassal] = useState(0);
    const [opponentCounterVassal, setOpponentCounterVassal] = useState(0);
    const [randomNumberAssasin, setRandomNumberAssassin] = useState(0);
    const [opponentCounterAssasin, setOpponentCounterAssasin] = useState(0);
    const [randomNumberBastard, setRandomNumberBastard] = useState(0);
    const [opponentCounterBastard, setOpponentCounterBastard] = useState(0);
    
    
    

    function drawRandomCard(): number | null {
        if (deck.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck[randomIndex];
        
        setDeck(prevDeck => {
            const newDeck = [...prevDeck];
            newDeck.splice(randomIndex, 1);
            return newDeck;
        });
        
        return drawnCard;
    }

    function handleClickDeck() {
        if (cardOpponent === 0) {
            const drawnCard = drawRandomCard();
            if (drawnCard) {
                setCardOpponent(drawnCard);
                setShowCardOpponent(true);
            }
            else return;
        }
        if (card === 0) {
            const drawnCard = drawRandomCard();
            if (drawnCard) {
                setCard(drawnCard);
                setShowCard(true);
            }
            else return;
        }
    }

    function handleClickChoiceCard(){
        if(choiceCard === false){
            setChioceCard(true);
        }else{
            setChioceCard(false)
        }
    }

    function handleClickAtackCard() {
        if(card > cardOpponent){
            setKingdom(kingdom + card + cardOpponent)
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(counterAttack + 1);
        }
        if(cardOpponent > card){
            setKingdomOpponent(kingdomOpponent + cardOpponent + card)
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(counterAttack + 1);
        }
        if(cardOpponent === card){
            setKing(king + cardOpponent + card)
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(counterAttack + 1);
        }
        if(counterAttack >= 10 && counterAttack <= 16){
                    const newRandom = Math.random();
                    setRandomNumberVassal(newRandom); 
        }
        if(randomNumberVassal > 0){
            setOpponentCounterVassal(opponentCounterVassal + 1);
        }
        if(opponentCounterVassal === 1){
            setKingdomOpponent(kingdomOpponent + card + cardOpponent);
            setShowVassalOpponent(false);
            setShowCard(false);
            setShowCardOpponent(false);
            setCard(0);
            setCardOpponent(0);
        }
        if(counterAttack >= 8 && counterAttack <= 16){
            const newRandom = Math.random();
            setRandomNumberAssassin(newRandom); 
        }
        if(randomNumberAssasin > 0){
            setOpponentCounterAssasin(opponentCounterAssasin + 1);
        }
        if(opponentCounterAssasin === 1 && kingdom >= 7){
                setShowAssassinOpponent(false);
                setKingdom(kingdom - 7);
        }
        if(counterAttack >= 8 && counterAttack <= 16){
            const newRandom = Math.random();
            setRandomNumberBastard(newRandom); 
        }
        if(randomNumberBastard > 0){
            setOpponentCounterBastard(opponentCounterBastard + 1);
        }
        if(opponentCounterBastard === 1 && king >= 10){
            setShowBastardOpponent(false);
            setKing(king - 10);
            setKingdomOpponent(kingdomOpponent + 10);
        }
    }

    function handleClickAssassin(){
        if(kingdomOpponent >= 7){
            setShowAssassin(false);
            setKingdomOpponent(kingdomOpponent - 7);
        }else{
            return
        }
    }

    function handleClickBastard(){
        if(king >= 10){
            setShowBastard(false);
            setKing(king - 10);
            setKingdom(kingdom + 10);
        }else{
            return
        }
    }

    function handleClickVassal(){
        if(cardOpponent !== 0){
            setKingdom(kingdom + card + cardOpponent);
            setShowVassal(false);
            setShowCard(false);
            setShowCardOpponent(false);
            setCard(0);
            setCardOpponent(0);
        }
    }

    return (
        <div className={classes.miniGamePage}>
            <div>
                <div className={classes.kingdom1}>{kingdomOpponent}kingdom</div>
                <div className={classes.kingdom2}>{kingdom}kingdom</div>
            </div>
            <div className={classes.king}>
                {king}King attack{counterAttack}
            </div>
            <div>
                {showCardOpponent && <button className={classes.playerCard1} onClick={handleClickAtackCard}>{cardOpponent}card</button>}
                {showCard && <button className={classes.playerCard2} onClick={handleClickChoiceCard}>{card}card</button>}
                
            </div>
            <div>
                {showBastardOpponent && <button className={classes.bastard1}>Bastard</button>}
                {showBastard && <button className={classes.bastard2} onClick={handleClickBastard}>Bastard</button>}
            </div>
            <div>
                {showAssassinOpponent && <button className={classes.assassin1}>Assassin</button>}
                {showAssassin && <button className={classes.assassin2} onClick={handleClickAssassin}>Assassin</button>}
            </div>
            <div>
                {showVassalOpponent && <button className={classes.vassal1}>Vassal</button>}
                {showVassal && <button className={classes.vassal2} onClick={handleClickVassal}>Vassal</button>}
            </div>
            <div>
                <button className={classes.deck} onClick={handleClickDeck}>
                    Deck{deck.length}
                </button>
            </div>

        </div>
    )
}


