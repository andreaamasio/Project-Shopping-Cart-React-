import { Link, Outlet } from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="shop">Store</Link>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
export default NavBar
