import { forwardRef, useState } from "react";
import styles from "../page.module.css";

const Mode = ({changeMode, toggleClass, optionsRef}, ref) => {
    const [lastChecked, setLastChecked] = useState("original");
    const handleChange = (e) => {
        setLastChecked(e.target.value);
        changeMode(e.target.value);
        toggleClass(ref);
        optionsRef.current.classList.add(styles.hidden);
    }
    return (
        <div className={`${styles.mode} ${styles.hidden}`} ref={ref}>
            <div>
                <input type="radio" name="mode" id="normal" value="original" onChange={handleChange} checked={lastChecked === "original"}/>
                <label htmlFor="normal">Rock Paper Scissors</label>
            </div>
            <div>
                <input type="radio" name="mode" id="hard" value="bonus" onChange={handleChange} checked={lastChecked === "bonus"}/>
                <label htmlFor="hard">Rock Paper Scissors Lizard Spock</label>
            </div>

        </div>
    )
}



export default forwardRef(Mode);