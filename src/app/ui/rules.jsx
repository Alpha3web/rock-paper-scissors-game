import Image from "next/image";
import { forwardRef } from "react";
import styles from "../page.module.css"
import { HiMiniXMark } from "react-icons/hi2";

export default forwardRef(
    function Rules(props, ref) {
        return (
            <div ref={ref} className={`${styles.wrapper} ${styles.hidden}`}>

                <div>
                    <div id={styles.heading}>
                        <span>Rules</span> 
                        <HiMiniXMark id={styles.reactIcon} onClick={() => ref.current.classList.add(styles.hidden)}/>
                    </div>

                    <div id={styles.imgDiv}>
                        <Image alt="rules" src="/images/image-rules.svg" fill />
                    </div>

                </div>


            </div>
        )
    }
)