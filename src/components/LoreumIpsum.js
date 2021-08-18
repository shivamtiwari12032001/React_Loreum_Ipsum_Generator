import React, { useState } from "react";
import data from "./data.js";
import styles from "./LoreumIpsum.module.css";

const LoreumIpsum = (props) => {
  const [amount, setAmount] = useState(1);
  const [para, setpara] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setpara(data.slice(0, amount));
    //   let text =;
  };

  return (
    <div className={styles.complete_loreum_ipsum}>
      <h1 className={styles.heading}>TIRED OF BORING LOREM IPSUM?</h1>
      <form className={styles.form}>
        <label htmlFor="amount" className={styles.para_label}>
          Paragraph :
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          className={styles.input_number}
        />
        <input
          type="submit"
          value="GENERATE"
          onClick={(e) => submitHandler(e)}
          className={styles.generate_button}
        />
      </form>
      {para.map((item) => (
        <li className={styles.single_para}>{item}</li>
      ))}
    </div>
  );
};

export default LoreumIpsum;
