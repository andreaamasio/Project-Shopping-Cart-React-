import { Link, Outlet, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <>
      <div className="nav">
        <ul className="nav-list">
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
