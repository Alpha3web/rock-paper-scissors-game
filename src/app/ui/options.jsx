import { forwardRef } from "react";
import Rules from "./rules";
import Mode from "./mode";
import styles from "../page.module.css";
import Custombutton from "./custom-button";

const Options = ({ ruleRef, modeRef, toggleClass }, ref) => {
    return (
        <div className={`${styles.menu} ${styles.hidden}`} ref={ref}>
            <Custombutton innerText="RULES" classList={styles.menuBtns}
                onClick={() => {
                    toggleClass(ruleRef);
                    toggleClass(ref);
                    modeRef.current.classList.add(styles.hidden);
                }}
            />
            <Custombutton classList={styles.menuBtns} innerText="MODE"
                onClick={() => toggleClass(modeRef)}
            />
        </div>
    )
} 

export default forwardRef(Options);