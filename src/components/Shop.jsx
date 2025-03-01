import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Product from "./Product"
import styles from "./Shop.module.css"
const Shop = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.slice(0, 4)))
  }, [])
  let productsComponents = products.map((product) => {
    return (
      <Product
        name={product.title}
        price={product.price}
        imgURL={product.image}
      />
    )
  })
  return (
    <div className={styles.main__shop}>
      <div className={styles.container}>{productsComponents}</div>
    </div>
  )
}

export default Shop
