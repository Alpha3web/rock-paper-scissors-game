import Image from "next/image";
import styles from "../page.module.css";


const GameSymbol = ({id}) => {
    return (
        <div className={id? styles.gameChar: styles.empty} id={id}>
            {id && <Image name={id} alt={`icon ${id}`} src={`/images/icon-${id}.svg`} width={50} height={50} priority/>}
        </div>
    )
}

export default GameSymbol;