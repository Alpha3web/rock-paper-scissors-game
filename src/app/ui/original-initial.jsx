import Image from "next/image";
import GameSymbol from "./game-symbol";
import styles from "../page.module.css";


const OriginalInitial = ({ onClick }) => {
    return (
        <div className={styles.initial}>
            <Image alt="bg" src="/images/bg-triangle.svg" fill />

            <div onClick={onClick}>
                <GameSymbol id="paper" />
                <GameSymbol id="rock" />
                <GameSymbol id="scissors" />
            </div>
        </div>
    )
}
export default OriginalInitial;