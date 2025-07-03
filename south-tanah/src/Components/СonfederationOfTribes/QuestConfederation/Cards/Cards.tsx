import { useEffect, useState } from "react";
import classes from "../../../../Styles/StylesConfederationOfTribes/Cards.module.css";
import { RulesCards } from "./RulesCards";

interface CardsProps {
    setCountLoyal: (value: any) => void;
    setCountContra: (value: any) => void;
    setCountNeutral: (value: any) => void;
    handleNextMessage: () => void;
}

export const Cards = ({ 
    setCountLoyal, 
    setCountContra, 
    setCountNeutral,
    handleNextMessage
}: CardsProps) => {
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
    const [showRules, setShowRules] = useState(false);
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
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [stateButton, setStateButton] = useState(false);
    const [stateFinal, setStateFinal] = useState({win: false, lose: false, draw: false, kingWin: false});

    useEffect(() => {
        if (counterAttack > 0 && counterAttack % 2 === 1) {
            const timer = setTimeout(() => {
            handleClickDecks();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [counterAttack]);

    useEffect(() => {
    if (counterAttack > 0 && counterAttack % 2 === 1 && card !== 0 && cardOpponent !== 0) {
        const timer = setTimeout(() => {
            handleClickAtackCard();
        }, 3000);
        return () => clearTimeout(timer);
    }
}, [card, cardOpponent]);
        
    
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

    function handleClickDeck(){
        if (card === 0) {
            const drawnCard = drawRandomCard();
            if (drawnCard) {
                setCard(drawnCard);
                setShowCard(true);
            }
            else return;
        }
    }

    function handleClickDeckOpponent(){
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
        setStateButton(true);
        handleClickDeck();
        handleClickDeckOpponent();
    };

 function handleClickAtackCard(){
    setStateButton(false);
    
    const currentCard = card;
    const currentCardOpponent = cardOpponent;
    const currentKingdom = kingdom;
    const currentKingdomOpponent = kingdomOpponent;
    const currentKing = king;
    const currentCounterAttack = counterAttack + 1; 

    if(currentCard > currentCardOpponent){
        setKingdom(prev => prev + currentCard + currentCardOpponent);
    }
    else if(currentCardOpponent > currentCard){
        setKingdomOpponent(prev => prev + currentCardOpponent + currentCard);
    }
    else if(currentCardOpponent === currentCard){
        setKing(prev => prev + currentCardOpponent + currentCard);
    }
    
    setShowCardOpponent(false);
    setShowCard(false);
    setCardOpponent(0);
    setCard(0);
    setCounterAttack(currentCounterAttack);
    
    if(currentCounterAttack === 16){
        const finalKingdom = currentCard > currentCardOpponent ? 
            currentKingdom + currentCard + currentCardOpponent : currentKingdom;
        const finalKingdomOpponent = currentCardOpponent > currentCard ? 
            currentKingdomOpponent + currentCardOpponent + currentCard : currentKingdomOpponent;
        const finalKing = currentCardOpponent === currentCard ? 
            currentKing + currentCardOpponent + currentCard : currentKing;
        
        if(finalKingdom > finalKingdomOpponent && finalKingdom > finalKing){
            setCountLoyal((prev:any) => prev + 1);
            setStateFinal({win: true, lose: false, draw: false, kingWin: false});
        }
        else if(finalKingdomOpponent > finalKingdom && finalKingdomOpponent > finalKing){
            setCountContra((prev:any) => prev + 1);
            setStateFinal({win: false, lose: true, draw: false, kingWin: false});
        }
        else if(finalKingdom === finalKingdomOpponent){
            setCountNeutral((prev:any) => prev + 1);
            setStateFinal({win: false, lose: false, draw: true, kingWin: false});
        }
        else if(finalKing > finalKingdom && finalKing > finalKingdomOpponent){
            setCountNeutral((prev:any) => prev + 1);
            setStateFinal({win: false, lose: false, draw: false, kingWin: true});
        }
    }

        if(randomNumberVassal > 0){
            setOpponentCounterVassal(prev => prev + 1);
        }
        if(opponentCounterVassal === 1){
            setKingdomOpponent(prev => prev + currentCard + currentCardOpponent);
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
            setOpponentCounterAssasin(prev => prev + 1);
        }
        if(opponentCounterAssasin === 1 && currentKingdom >= 7){
            setShowAssassinOpponent(false);
            setKingdom(prev => prev - 7);
        }
        if(counterAttack >= 8 && counterAttack <= 15){
            const newRandom = Math.random();
            setRandomNumberBastard(newRandom); 
        }
        if(randomNumberBastard > 0){
            setOpponentCounterBastard(prev => prev + 1);
        }
        if(opponentCounterBastard === 1 && currentKing >= 10){
            setShowBastardOpponent(false);
            setKing(prev => prev - 10);
            setKingdomOpponent(prev => prev + 10);
        }
        if(counterAttack >= 10 && counterAttack <= 15){
            const newRandom = Math.random();
            setRandomNumberVassal(newRandom); 
        }
    }

    function handleClickAssassin(){
        if(kingdomOpponent >= 7){
            setShowAssassin(false);
            setKingdomOpponent(prev => prev - 7);
        }else{
            return
        }
    }

    function handleClickBastard(){
        if(king >= 10){
            setShowBastard(false);
            setKing(prev => prev - 10);
            setKingdom(prev => prev + 10);
        }else{
            return
        }
    }

    function handleClickVassal(){
       
        if(cardOpponent !== 0){
            setKingdom(prev => prev + card + cardOpponent);
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

    function handleOpenModalRules(){
        setShowRules(true);
    }

    function handleCloseModalRules(){
        setShowRules(false);
    }

    let vassalClass;
    let vassalClassOpponent;

    if(counterAttack > 14){
        vassalClass = classes.vassalNotPlayable;
        vassalClassOpponent = classes.vassalNotPlayable;
    }
    else{
        vassalClass = classes.vassalCard;
        vassalClassOpponent = classes.vassalCardOpponent;
    }

    return (
        <div className={classes.miniGamePage}>
            <RulesCards setButtonDisabled={setButtonDisabled}/>
            <div>
                <div className={classes.kingdomCardOpponent} title="Очки оппонента"><h1>Очки королевства: {kingdomOpponent}</h1></div>
                <div className={classes.kingdomCard} title="Очки игрока"><h1>Очки королевства: {kingdom}</h1></div>
            </div>

            <button className={classes.rulesButton} onClick={handleOpenModalRules} disabled={buttonDisabled === true}>Правила</button>

            {showRules && <div className={classes.rules}>
                    <div className={classes.block1}><span>Колоды игроков.</span></div>
                    <div className={classes.block2}><span>Король(отбой при ничьей).</span></div>
                    <div className={classes.block3}><span>Королевства игроков.</span></div>
                    <div className={classes.block4}><span>Бастард - уникальная карта, используемая один раз в игре. Она ворует у короля десять очков из его королевства в своё, но только в том случае, если они у него имеются.</span></div>
                    <div className={classes.block5}><span>Ассасин - уникальная карта, используемая один раз в игре. Она отнимает у королевства противника семь очков, но не забирает их себе и только в том случае, если они у него имеются.</span></div>
                    <div className={classes.block6}><span>Вассал - уникальная карта, используемая один раз в игре. Она гарантирует победу в текущем раунде, даже в том случае, если по номиналу выпавшей карты использующий её игрок уступает противнику и при выпадении ничьей. Однако "вассала" нельзя использовать в последнем раунде.</span></div>
                <button className={classes.closeButton} onClick={handleCloseModalRules}>Закрыть</button>
            </div>}

            <div className={classes.king} title="Очки короля">
                <h1>
                    Очки короля: {king}
                </h1>
            </div>

            <div>
                {showCardOpponent && <div className={cardO}  title="Карта оппонента"><h1 className={classes.top}>{cardOpponent}</h1><h1 className={classes.bottom}>{cardOpponent}</h1></div>}
                {showCard && <div className={cardP} title="Карта игрока"><h1 className={classes.top}>{card}</h1><h1 className={classes.bottom}>{card}</h1></div>}
            </div>

            <button className={classes.cardReset} onClick={handleClickAtackCard} disabled={buttonDisabled === true || stateButton === false || counterAttack % 2 === 1} >Сбросить карты</button>

            <div>
                {showBastardOpponent && <button className={classes.bastardCardOpponent} title="Бастард" disabled={buttonDisabled === true}><h1 className={classes.top}>B</h1><h1 className={classes.bottom}>B</h1></button>}
                {showBastard && <button className={classes.bastardCard} onClick={handleClickBastard} title="Бастард" disabled={buttonDisabled === true || counterAttack % 2 === 1}><h1 className={classes.top}>B</h1><h1 className={classes.bottom}>B</h1></button>}
            </div>
            
            <div>
                {showAssassinOpponent && <button className={classes.assassinCardOpponent} title="Ассасин" disabled={buttonDisabled === true}><h1 className={classes.top}>A</h1> <h1 className={classes.bottom}>A</h1></button>}
                {showAssassin && <button className={classes.assassinCard} onClick={handleClickAssassin} title="Ассасин" disabled={buttonDisabled === true || counterAttack % 2 === 1}><h1 className={classes.top}>A</h1> <h1 className={classes.bottom}>A</h1></button>}
            </div>
            
            <div>
                {showVassalOpponent && <button className={vassalClassOpponent} title="Вассал" disabled={buttonDisabled === true || counterAttack > 15}><h1 className={classes.top}>V</h1><h1 className={classes.bottom}>V</h1></button>}
                {showVassal && <button className={vassalClass} onClick={handleClickVassal} title="Вассал" disabled={buttonDisabled === true || counterAttack > 15 || counterAttack % 2 === 1}><h1 className={classes.top}>V</h1><h1 className={classes.bottom}>V</h1></button>}
            </div>
            
            <div>
                <button className={classes.deck} onClick={handleClickDecks} title="Колода" disabled={buttonDisabled === true || counterAttack % 2 === 1}></button><h1 className={classes.deckTitle}>Колода: {deck.length}</h1>
                <div className={classes.deckOpponent} title="Колода противника"></div><h1 className={classes.deckOpponentTitle}>Колода: {deckOpponent.length}</h1>
            </div>

            {stateFinal.win && <div className={classes.finalModal}>
                <h3>
                    Твоя взяла. Однако приятно проиграть такому настойчивому сопернику. Не всё так плохо у вас, как мне рассказывали, - удивленно промолвил хозяин таверны.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {stateFinal.lose && <div className={classes.finalModal}>
                <h3>
                    Ты проиграл. Да, видимо, слабеет ваш брат. Нынче у вас не та хватка, как у ваших предшественников, - ехидно промолвил хозяин таверны и сгрёб все карты со стола в руки.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {stateFinal.draw && <div className={classes.finalModal}>
                <h3>
                    Ничья. Как ни крути, а мы с тобой чем-то похожи. Видимо, мы учились у одних учителей, - потрескивая костяшками пальцев, произнес хозяин таверны.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

            {stateFinal.kingWin && <div className={classes.finalModal}>
                <h3>
                    Хозяин таверны весело рассмеялся и, вытирая слезы от смеха, произнес:- Король победил! Даже в этой глупой игре, где короля выставили полным идиотом и возможность его выигрыша крайне мала, бывают казусы.
                </h3>
                <p onClick={handleNextMessage}>---Продолжить---</p>
            </div>}

        </div>
    )
}


