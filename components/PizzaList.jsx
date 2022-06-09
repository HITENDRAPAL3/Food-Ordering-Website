import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GET YOUR MEALS NOW!!</h1>
      <p className={styles.desc}>
        Order Different variety of Meals
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza}/>
          ))}
      </div>
    </div>
  );
};

export default PizzaList;