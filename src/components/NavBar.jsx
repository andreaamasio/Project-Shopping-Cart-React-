import { Link, Outlet, NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import cartIcon from "../assets/svg_cart.svg"
const NavBar = () => {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Store</NavLink>

            <Link to="cart">
              <div className=".cartIcon">
                <a href="">
                  <img src={cartIcon} alt="" />
                </a>
              </div>
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
