import './Display.css'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home/Home.js'
import Course from '../../pages/Course/Course.js'
import Store from '../../pages/Store/Store.js'
import More from '../../pages/More/More.js'
import Library from '../../pages/Library/Library.js'
import Nopage from '../../pages/Nopage/Nopage.js'
import Cart from '../../pages/Cart/Cart.js'
import User from '../../pages/User/User.js'
import Notifications from '../../pages/Notifications/Notifications.js'

function Display() {
    return (<div id='disp'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/store" element={<Store />} />
            <Route path="/more" element={<More />} />
            <Route path="/library" element={<Library />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path='/*' element={<Nopage />} />
        </Routes>
    </div>)
}

export default Display;