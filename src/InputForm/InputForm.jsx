import { useEffect, useState } from "react";
import styles from "./InputForm.module.css";

export default function InputForm({ onFormSubmit }) {
    const [textValue, setTextValue] = useState("");

    function handleChange(e) {
        const value = e.target.value;
        setTextValue(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        //submit logic and props here
        onFormSubmit(textValue)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                autoFocus
                type="text"
                value={textValue}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}
