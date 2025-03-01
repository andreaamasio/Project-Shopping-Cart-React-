import { Link, Outlet, NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import cartIcon from "../assets/svg_cart.svg"

const NavBar = () => {
  console.log(cartIcon)

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
            <Link to="cart" className={styles.cartIcon}>
              <span className={styles.cartIcon}>
                <img src={cartIcon} alt="Cart" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

export default NavBar
