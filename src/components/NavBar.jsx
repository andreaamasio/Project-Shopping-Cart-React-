import { Link, Outlet } from "react-router-dom"
const NavBar = () => {
  return (
    <>
      <div className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
            <Link to="shop">Store</Link>
            <Link to="cart">Cart</Link>
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
