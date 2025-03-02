import { Link, Outlet, NavLink } from "react-router-dom"
import { useState } from "react"
import styles from "./NavBar.module.css"
import cartIcon from "../assets/svg_cart.svg"

const NavBar = () => {
  const [cartItems, setCartItems] = useState([])

  const cartNumber =
    cartItems.length > 0 ? (
      <div className={styles.cartNumber}>{cartItems.length}</div>
    ) : null
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="shop">Store</NavLink>
          </li>

          <li>
            <Link to="cart">
              <div className={styles.cartIcon}>
                <img src={cartIcon} alt="Cart" />

                {cartNumber}
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="outlet">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
    </>
  )
}

export default NavBar
