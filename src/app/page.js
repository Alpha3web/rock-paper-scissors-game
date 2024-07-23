"use client";

import styles from "./page.module.css";
import ScoreBoard from "./ui/score-board";
import GameSymbol from "./ui/game-symbol";
import Rules from "./ui/rules";
import BonusInitial from "./ui/bonus-initial";
import Custombutton from "./ui/custom-button";
import { useRef, useState } from "react";
import Mode from "./ui/mode";
import OriginalInitial from "./ui/original-initial";
import Options from "./ui/options";


export default function Home() {
  const [mode, setMode] = useState("original");
  const [currentScore, updateScore] = useState({score: 0, result: ""});
  const [gameStage, updateGameStage] = useState({initial: true, second: false, final: false});
  const userChoice = useRef(null);
  const ruleRef = useRef(null);
  const modeRef = useRef(null);
  const optionsRef = useRef(null);
  const [houseChoice, setHouseChoice] = useState("")
  const symbols = ["scissors", "rock", "paper"];

  const houseIsPicking = () => {
    const choice = symbols[Math.floor(Math.random() * 3)]
    setTimeout(() => {
      setHouseChoice(choice);
      outcome(choice);
    }, 1000)  
  }

  const handleClick = e => {
    userChoice.current = e.target.id || e.target.name;
    updateGameStage(preV => {
      return ({...preV, initial: false, second: true})
    });
    houseIsPicking();
  }

  const toggleClass = (componentRef) => componentRef.current.classList.toggle(styles.hidden);


  const outcome = (asHouseChoice) => {
    setTimeout(() => {
      updateGameStage(preV => ({...preV, second: false, final: true}))
      
      if (userChoice.current === asHouseChoice) {
        updateScore(preV => ({...preV, result: "Draw"}));
      } else if (
        userChoice.current === "scissors" && asHouseChoice === "paper" ||
        userChoice.current === "scissors" && asHouseChoice === "spock" ||
        userChoice.current === "paper" && asHouseChoice === "rock" ||
        userChoice.current === "paper" && asHouseChoice === "scissors" ||
        userChoice.current === "rock" && asHouseChoice === "lizard" ||
        userChoice.current === "rock" && asHouseChoice === "paper" ||
        userChoice.current === "lizard" && asHouseChoice === "spock" ||
        userChoice.current === "lizard" && asHouseChoice ===  "rock" ||
        userChoice.current === "spock" && asHouseChoice === "scissors" ||
        userChoice.current === "spock" && asHouseChoice ===  "lizard"
      ) {
        updateScore(preV => ({...preV, score: currentScore.score + 1, result: "YOU WIN"}));
      } else {
        updateScore(preV => ({...preV, result: "YOU LOSE"}));
      }
    }, 1300)
    
  }

  return (
    <main className={styles.main}>
      <ScoreBoard activeMode={mode} score={currentScore.score}/>

      {
        gameStage.initial &&
        <>{ mode === "original"? <OriginalInitial onClick={handleClick}/>: <BonusInitial onClick={handleClick} /> }</>
      }

      {
        gameStage.second && 
          <div className={styles.second}>
            <div>
              <p>YOU PICKED</p>
                <GameSymbol id={userChoice.current} />
            </div>
            <div>
              <p>THE HOUSE PICKED</p>
              {houseChoice? <GameSymbol id={houseChoice} />: <GameSymbol />}
            </div>
          </div>
      }
      {
        gameStage.final && 
          <div className={styles.final}>
            <div>
              <p>YOU PICKED</p>
                <GameSymbol id={userChoice.current} />
            </div>
            <div id={styles.outcome}>
              <p>{currentScore.result}</p>
              <button 
                type="button" 
                onClick={() => {
                  updateGameStage(preV => ({...preV, initial: true, final: false}));
                  userChoice.current = null;
                  setHouseChoice("");
                }}
              >
                PLAY AGAIN
              </button>
            </div>
            <div>
              <p>THE HOUSE PICKED</p>
              {houseChoice && <GameSymbol id={houseChoice} />}
            </div>
          </div>
      } 

      <Custombutton innerText="RULES" classList={styles.rulesBtn} 
        onClick={() => toggleClass(ruleRef)}
      />
      <Custombutton classList={styles.modeBtn} innerText="MODE"
        onClick={() => toggleClass(modeRef)}
      />
      <Custombutton classList={styles.optionsBtn}
        innerText="MENU"
        onClick={() => {
          toggleClass(optionsRef);
          if(!modeRef.current.classList.contains(styles.hidden)){toggleClass(modeRef)}
        }}
      />
      <Rules ref={ruleRef} />
      <Mode toggleClass={toggleClass} ref={modeRef} changeMode={setMode} optionsRef={optionsRef}/>
      <Options toggleClass={toggleClass} ruleRef={ruleRef} modeRef={modeRef} ref={optionsRef}/> 

    </main>
  );
}
