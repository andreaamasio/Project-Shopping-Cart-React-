import shoppingImage from "../assets/shopping.jpg"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.container}>
      <img
        src={shoppingImage}
        alt="A blonde woman with several white bags of shopped items."
      />
    </div>
  )
}

export default Home
