import Image from "next/image";
import styles from "../page.module.css";

const ScoreBoard = ({score, activeMode}) => {
    return (
        <div className={styles.scoreBoard}>
            <div>
                <Image alt="logo" src={activeMode === "original"? "/images/logo.svg": "/images/logo-bonus.svg"} fill priority/>
            </div>
            <div className={styles.score}>
                <p>Score</p>
                <span>{score}</span>
            </div>
        </div>
    )
}

export default ScoreBoard;