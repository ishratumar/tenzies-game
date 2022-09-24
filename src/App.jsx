import React from 'react'
import Die from "./Components/Die"
import {nanoid} from 'nanoid'


export default function App() {

    const [dice, setDice] = React.useState(allNewDice())

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    const diceElements = dice.map(die => (
        <Die key={die.id}
         value={die.value} 
         isHeld={die.isHeld} 
         holdDice={() => holdDice(die.id)} />
    ))
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    )
}