import { useOutletContext } from "react-router-dom"
import styles from "./Product.module.css"
const Product = ({ name, price, imgURL, id }) => {
  const [cartItems, setCartItems] = useOutletContext()
  function addToCart(e) {
    let productToAddId = e.target.id
    // setCartItems(
    //   cartItems.map((item) =>
    //     item.id === productToAddId
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : item
    //   )
    // )
    //check if product is in cart
    let productInCart = cartItems.find((item) => item.id === productToAddId)
    console.log(productInCart)
    if (productInCart === undefined) {
      // new product
      setCartItems([
        {
          id: productToAddId,
          quantity: 1,
          name: name,
          price: price,
          imgURL: imgURL,
        },
        ...cartItems,
      ])
    } else {
      //update quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === productToAddId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    console.log(cartItems)
    //showSnackBar()
  }
  function showSnackBar() {
    // Get the snackbar DIV
    var x = document.querySelector(".snackbar")

    // Add the "show" class to DIV
    x.className = "show"

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "")
    }, 3000)
  }
  return (
    <div className={styles.product}>
      <div className={styles.img__container}>
        <img src={imgURL} />
      </div>
      <p>{name}</p>
      <p>${price}</p>
      <button className={styles.buy__button} id={id} onClick={addToCart}>
        Add to Cart
      </button>
      {/* <div className={styles.snackbar}>Added to the Cart!</div> */}
    </div>
  )
}

export default Product
