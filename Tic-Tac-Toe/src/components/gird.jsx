import { useState } from "react"
import Card from "./react-card";
import './grid.css';
import isWinner from "../helpers/winner,";

function Grid({numberBord}) {
    const [borad, setborad] = useState(Array(numberBord).fill("")) 
    const [turn, setTurn] = useState(true)
    const [winner,setWiner]=useState(null)
    function play(index) {
        if (turn == true) {
            borad[index] = "O"; 
        } else {
            borad[index] = "X";
        }
        const win = isWinner(borad, turn ? 'O' : 'X');
        if (win) {
            setWiner(win);
        }
        
        setborad([...borad]);
        setTurn(!turn);
    }
    function rest() {
        setTurn(true)
        setWiner(null)
        setborad(Array(numberBord).fill(""))
    }
    return (

       
        <div className="grid-wrapper">
             {
            winner && (
            <>
                   <h1 className="trun-Heighlight"> winner is {winner}</h1>
                    <button className="rest" onClick={rest}>Rest Game Bro</button>
            </>
            )
        }
            <h1 className="trun-Heighlight"> Current Turn:{(turn) ? 'O' : 'X'} </h1>
            
             <div className="grid">
            {borad.map((el,idx) => {
                return <Card gameEnd={winner ?true:false} key={idx} onPlay={play} player={el} index={idx}/>
           })}
        </div>
       </div>
   );
}

export default Grid;

/**
 * 012
 * 345
 * 678
 */