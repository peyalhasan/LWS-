import { useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../Utils/Random";

export default function CardGame() {
    const [CardGame, setCard] = useState(null);
    const [goldCardCount, setGoldCardCoutn] = useState(0);
    const [round, setRound] = useState(1)

    const isGameOver = round > 5
    function handlePlaceCard(nextCard) {
        if (isGameOver){
            throw Error("Game already ended.");
        }
        setCard(nextCard);
        if(nextCard.gold){
            if(goldCardCount < 3){
                setGoldCardCoutn(goldCardCount + 1)
            }else{
            setGoldCardCoutn(0)
            setRound(round + 1)
            if(round === 5){
                alert("Good Game!");
            }}

        }
    }

    return (
        <div>

            <h1>Gold Game</h1>
            <div>
                <button
                    onClick={() => handlePlaceCard({
                        id: getRandomInteger(1, 100),
                        gold: getRandomBoolean(),
                    })} >Pleace Random Card</button>
            </div>
            <div>
                <span>Gold Card: {goldCardCount} </span>
                <span>Round: {round} </span>
            </div>
        </div>
    )
}
