import './Header.css'
import logo from '../../logo.svg'
import cart from '../../assets/images/cart.png'
import notification from '../../assets/images/notification.png'
import user from '../../assets/images/user.png'
import { Outlet, Link } from 'react-router-dom'
function Header() {
    return (<header>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo">
                <img src={logo} alt='logo' />
                <h2 className='headtext'>ABCDE</h2>
            </div>
        </Link>
        <div className='cart_notifications'>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
                <img src={cart} alt='cart' />
            </Link>
            <Link to="/notifications" style={{ textDecoration: 'none' }}>

                <img src={notification} alt='notifications' />
            </Link>
            <Link to="/user" style={{ textDecoration: 'none' }}>
                <img src={user} alt='user' />
            </Link>
        </div>
        <Outlet />

    </header>)
}

export default Header;