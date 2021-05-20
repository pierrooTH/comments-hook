import React, {useState} from 'react'

export default function Counter() {
    /*
    score: valeur de votre état
    useState(0): entre parenthèses, valeur initiale de l'état

    en POO:
    state = {score: 0}

    en hooks:
    const {score, setScore} = useState(0);
    */
    const [score, setScore] = useState(0);
    function incrementScore() {
        /*
        Equivalent de 
        this.setState({score: this.state.score + 1})
        */
        setScore(score+1);
    }
    return (
        <button onClick={incrementScore}>Clique {score} fois</button>
    )
}
