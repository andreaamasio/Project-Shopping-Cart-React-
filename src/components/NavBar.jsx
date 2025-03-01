import { Link, Outlet, NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
const NavBar = () => {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Store</NavLink>
            <NavLink to="cart">Cart</NavLink>
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
