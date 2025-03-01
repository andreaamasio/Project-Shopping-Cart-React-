import styles from "./Product.module.css"
const Product = ({ name, price }) => {
  return (
    <div className={styles.product}>
      <p>{name}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
