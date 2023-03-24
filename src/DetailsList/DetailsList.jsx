import DetailsItem from "../DetailsItem/DetailsItem";
import styles from "./DetailsList.module.css"

export default function DetailsList () {
    return(
        <ul className={styles.list}>
            <DetailsItem />
        </ul>
    )
}