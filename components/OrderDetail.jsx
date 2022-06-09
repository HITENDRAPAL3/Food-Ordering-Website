import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";


const OrderDetail = ({total, createOrder}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
      createOrder({ customer, address, total, method: 0})
  };
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
       <h1 className={styles.title}>You will pay $12 after delivery.</h1>
       <div className={styles.item}>
          <label className={styles.label}>Name Surname</label>
          <input placeholder="John Doe" type="text" className={styles.input} 
          onChange={(e)=>setCustomer(e.target.value)}/>
       </div>
       <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input 
          placeholder="+12 345 678 9123" 
          type="text" 
          className={styles.input} 
         />
       </div>
       <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
          rows={5}
          placeholder="House No, City, Landmark, Pin"
          type="text"
          className={styles.textarea}
          onChange={(e) => setAddress(e.target.value)}
          />
          
       </div>
       <button className={styles.button} onClick={handleClick}> 
          Order
       </button>
    </div>
    </div>
  )
}

export default OrderDetail