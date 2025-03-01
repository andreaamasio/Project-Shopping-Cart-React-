import styles from "./Product.module.css"
const Product = ({ name, price, imgURL }) => {
  return (
    <div className={styles.product}>
      <div className={styles.img__container}>
        <img src={imgURL} />
      </div>
      <p>{name}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
