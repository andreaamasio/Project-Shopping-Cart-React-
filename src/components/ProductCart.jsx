import { useOutletContext } from "react-router-dom"
import styles from "./ProductCart.module.css"
const ProductCart = ({ name, price, imgURL, id, quantity }) => {
  const [cartItems, setCartItems] = useOutletContext()
  function addToCart(e) {
    let productToAddId = e.target.id
    setCartItems(
      cartItems.map((item) =>
        item.id === productToAddId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }
  function removeFromCart(e) {
    let productToRemoveId = e.target.id
    setCartItems(
      cartItems.map((item) =>
        item.id === productToRemoveId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
    setCartItems(cartItems.filter((item) => item.quantity != 0))
  }

  return (
    <div className={styles.product}>
      <div className={styles.img__container}>
        <img src={imgURL} />
      </div>
      <p>{name}</p>
      <p>${price}</p>
      <div className={styles.quantity__container}>
        <button className={styles.buy__button} id={id} onClick={removeFromCart}>
          -
        </button>
        <p>{quantity}</p>
        <button className={styles.buy__button} id={id} onClick={addToCart}>
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCart
