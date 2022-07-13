// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const jwtTokenExist = Cookies.get('jwt_token')
  if (jwtTokenExist === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="cart-container">
      <Header />
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </div>
  )
}
export default Cart
