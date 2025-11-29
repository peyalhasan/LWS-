
export default function CardGame() {
  return (
    <div>

        <h1>Gold Game</h1>
        <div>
            <button 
            onClick={()=> handlePlaceCard({
                id: getRandomInteger(1, 100),
                gold: getRandomBoolean(),
            })} >Pleace Random Card</button>
        </div>
    </div>
  )
}
