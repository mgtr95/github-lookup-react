import { useState } from "react";
import styles from "./InputForm.module.css"

export default function InputForm() {
  const [textValue, setTextValue] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setTextValue(value);
  }

  function handleSubmit (e) {
    e.preventDefault();
    //submit logic and props here
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
