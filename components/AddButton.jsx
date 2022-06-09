
import styles from "../styles/Add.module.css";

const AddButton = ({setClose}) => {
  return (
  
  <div onClick={()=> setClose(false)} className={StyleSheet.mainAddButton}>Add New Pizza</div>
)
};

export default AddButton;
