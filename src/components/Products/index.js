// Write your JS code here
// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = () => {
  const jwtTokenExist = Cookies.get('jwt_token')
  if (jwtTokenExist === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="products-container">
      <Header />
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </div>
  )
}
export default Products
