import { Link } from "react-router-dom"
import Product from "./Product"
import styles from "./Shop.module.css"
const Shop = () => {
  return (
    <div className={styles.main__shop}>
      <div className={styles.container}>
        <Product name="Shoes" price={10}></Product>
        <Product name="Shoes" price={10}></Product>
        <Product name="Shoes" price={10}></Product>
      </div>
    </div>
  )
}

export default Shop
