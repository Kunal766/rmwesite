import './Nav.css'
import home from '../../assets/images/home.png'
import library from '../../assets/images/library.png'
import course from '../../assets/images/course.png'
import store from '../../assets/images/store.png'
import more from '../../assets/images/more.png'
import { Outlet, Link } from 'react-router-dom'
function Nav() {
    return (<nav>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="item"> <img src={home} alt='home' /><div className='text'>home</div></div>
        </Link>
        <Link to='/library' style={{ textDecoration: 'none' }}>
            <div className="item"> <img src={library} alt='library' /><div className='text'>library</div></div>
        </Link>
        <Link to='/course' style={{ textDecoration: 'none' }}>
            <div className="item"> <img src={course} alt='course' /><div className='text'>course</div></div>
        </Link>
        <Link to='/store' style={{ textDecoration: 'none' }}>
            <div className="item"> <img src={store} alt='store' /><div className='text'>store</div></div>
        </Link>
        <Link to='/more' style={{ textDecoration: 'none' }}>
            <div className="item"> <img src={more} alt='more' /><div className='text'>more</div></div>
        </Link>
        <Outlet />
    </nav>)
}

export default Nav;