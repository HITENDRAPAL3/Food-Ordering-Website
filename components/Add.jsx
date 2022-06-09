import { useState } from "react"
import styles from "../styles/Add.module.css";
import axios from "axios";
import {userouter} from "next/router";

const Add = ({setClose}) => {
 
  const [file ,setFile]= useState(null);
  const [title ,setTitle]= useState(null);
  const [desc ,setDesc]= useState(null);
  const [prices ,setPrices]= useState(null);
  const [extra ,setExtra]= useState(null);
  const [extraOptions ,setExtraOptions]= useState([]);

  return (
    <div classname={styles.container}>
      <div className={styles.wrapper}>
           <span onClick={()=>setClose(true)} classname={styles.close}>
            X
            </span>
            <h1>
              Add a new Pizza
            </h1>
            <div className={styles.item}>
              <label className={styles.label}>Choose an Image</label>
               <input type="file"/>
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Title</label>
              <input
              className={styles.input}
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Desc</label>
              <textarea
              row={4}
              type="text"
              onChange={(e)=>setDesc(e.target.value)}
              />
            </div>
            <div classname={styles.item}>
              <label className={styles.label}>Prices</label>
              <input 
              className={`${styles.input} ${styles.inputSm}`}
              type="number" 
              placeholder="small" 
              onChange={(e)=>changePrice(e,0)}
              />
              <input 
              className={`${styles.input} ${styles.inputSm}`}
              type="number" 
              placeholder="small" 
              onChange={(e)=>changePrice(e,1)}
              /><input 
              className={`${styles.input} ${styles.inputSm}`}
              type="number" 
              placeholder="small" 
              onChange={(e)=>changePrice(e,2)}
              />
            </div>
      </div>
     
    </div>
  )
}

export default Add;