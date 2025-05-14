import { useState } from "react";
import classes from "../../../Styles/StylesKingdomInmar/Quest.module.css";

export const Cards = () => {
    const [cardOpponent, setCardOpponent] = useState(0);
    const [card, setCard] = useState(0);
    const [deck, setDeck] = useState([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]);
    const [deckOpponent, setDeckOpponent] = useState([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,]);
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
        if (card === 0) {
            const drawnCard = drawRandomCard();
            if (drawnCard) {
                setCard(drawnCard);
                setShowCard(true);
            }
            else return;
        }
    }

    function handleClickDeckOpponent() {
        if (cardOpponent === 0) {
            const drawnCardOpponent = drawRandomCardOpponent();
            if (drawnCardOpponent) {
                setCardOpponent(drawnCardOpponent);
                setShowCardOpponent(true);
            }
            else return;
        }
    }
    
    function drawRandomCardOpponent(): number | null {
        if (deckOpponent.length === 0) return null;
        
        const randomIndexOpponent = Math.floor(Math.random() * deckOpponent.length);
        const drawnCardOpponent = deckOpponent[randomIndexOpponent];
        
        setDeckOpponent(prevDeck => {
            const newDeckOpponent = [...prevDeck];
            newDeckOpponent.splice(randomIndexOpponent, 1);
            return newDeckOpponent;
        });
        
        return drawnCardOpponent;
    }

    function handleClickDecks(){
        handleClickDeck()
        handleClickDeckOpponent()
    }

    function handleClickAtackCard() {
        if(card > cardOpponent){
            setKingdom(kingdom + card + cardOpponent);
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(prev => prev + 1)
        }
        else if(cardOpponent > card){
            setKingdomOpponent(kingdomOpponent + cardOpponent + card);
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(prev => prev + 1)
        }
        else if(cardOpponent === card){
            setKing(king + cardOpponent + card);
            setShowCardOpponent(false);
            setShowCard(false);
            setCardOpponent(0);
            setCard(0);
            setCounterAttack(prev => prev + 1)
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
            setCounterAttack(prev => prev + 1);
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
        if(counterAttack >= 8 && counterAttack <= 15){
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
        if(counterAttack >= 10 && counterAttack <= 15){
            const newRandom = Math.random();
            setRandomNumberVassal(newRandom); 
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
            setCounterAttack(prev => prev +1);
        }
    }

    let cardO;
    let cardP;

    if(cardOpponent === 0){
        cardO = classes.cards
    }
    else if(cardOpponent === 5){
        cardO = classes.orderCardOpponent
    }
    else if(cardOpponent === 4){
        cardO = classes.monkCardOpponent
    }
    else if(cardOpponent === 3){
        cardO = classes.tradesmanCardOpponent
    }
    else if(cardOpponent === 2){
        cardO = classes.fishermanCardOpponent
    }
    else if(cardOpponent === 1){
        cardO = classes.squireCardOpponent
    }

    if(card === 0){
        cardP = classes.cards
    }
    else if(card === 5){
        cardP = classes.orderCard
    }
    else if(card === 4){
        cardP = classes.monkCard
    }
    else if(card === 3){
        cardP = classes.tradesmanCard
    }
    else if(card === 2){
        cardP = classes.fishermanCard
    }
    else if(card === 1){
        cardP = classes.squireCard
    }

    return (
        <div className={classes.miniGamePage}>
            
            <div>
                <div className={classes.kingdomCardOpponent} title="Очки оппонента"><h1>Очки королевства: {kingdomOpponent}</h1></div>
                <div className={classes.kingdomCard} title="Очки игрока"><h1>Очки королевства: {kingdom}</h1></div>
            </div>

            <div className={classes.king} title="Очки короля">
                <h1>Очки короля: {king}</h1>
            </div>

            <div>
                {showCardOpponent && <button className={cardO} onClick={handleClickAtackCard} title="Карта оппонента"><h1 className={classes.top}>{cardOpponent}</h1><h1 className={classes.bottom}>{cardOpponent}</h1></button>}
                {showCard && <button className={cardP} onClick={handleClickAtackCard} title="Карта игрока"><h1 className={classes.top}>{card}</h1><h1 className={classes.bottom}>{card}</h1></button>}
            </div>

            <div>
                {showBastardOpponent && <button className={classes.bastardCardOpponent} title="Бастард"><h1 className={classes.top}>B</h1><h1 className={classes.bottom}>B</h1></button>}
                {showBastard && <button className={classes.bastardCard} onClick={handleClickBastard} title="Бастард"><h1 className={classes.top}>B</h1><h1 className={classes.bottom}>B</h1></button>}
            </div>
            
            <div>
                {showAssassinOpponent && <button className={classes.assassinCardOpponent} title="Ассасин"><h1 className={classes.top}>A</h1> <h1 className={classes.bottom}>A</h1></button>}
                {showAssassin && <button className={classes.assassinCard} onClick={handleClickAssassin} title="Ассасин"><h1 className={classes.top}>A</h1> <h1 className={classes.bottom}>A</h1></button>}
            </div>
            
            <div>
                {showVassalOpponent && <button className={classes.vassalCardOpponent} title="Вассал"><h1 className={classes.top}>V</h1><h1 className={classes.bottom}>V</h1></button>}
                {showVassal && <button className={classes.vassalCard} onClick={handleClickVassal} title="Вассал"><h1 className={classes.top}>V</h1><h1 className={classes.bottom}>V</h1></button>}
            </div>
            
            <div>
               <button className={classes.deck} onClick={handleClickDecks} title="Колода"><h1>Колода: {deck.length + deckOpponent.length}</h1></button>
            </div>

        </div>
    )
}


