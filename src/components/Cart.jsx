import { Link, useOutletContext } from "react-router-dom"

import ProductCart from "./ProductCart"
import styles from "./Cart.module.css"
const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext()

  let productsComponents = cartItems.map((item) => {
    return (
      <ProductCart
        name={item.name}
        price={item.price}
        imgURL={item.imgURL}
        key={item.id}
        id={item.id}
        quantity={item.quantity}
      />
    )
  })

  return cartItems.length > 0 ? (
    <div className={styles.main__shop}>
      <div className={styles.container}>{productsComponents}</div>
    </div>
  ) : (
    <div className={styles.noItemContainer}> No items in the Cart yet.</div>
  )
}

export default Cart
