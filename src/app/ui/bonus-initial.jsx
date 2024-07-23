import Image from "next/image";
import GameSymbol from "./game-symbol";
import styles from "../page.module.css";


const BonusInitial = ({ onClick }) => {
    return (
        <div className={styles.bonusInitial}>
            <Image alt="bg" src="/images/bg-pentagon.svg" fill />

            <div onClick={onClick}>
                <GameSymbol id="paper" />
                <GameSymbol id="rock" />
                <GameSymbol id="scissors" />
                <GameSymbol id="spock" />
                <GameSymbol id="lizard" />
            </div>
        </div>
    )
}

export default BonusInitial;