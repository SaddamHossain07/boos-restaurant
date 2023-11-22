import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>CONTACT us</Link></li>
        <li><Link to='/dashboard'>DASHBOARD</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Our Shop</Link></li>
        {
            user ? <>
                <div className="flex items-center gap-4">
                    <Link to='/dashboard/cart'>
                        <div className="badge badge-sm ml-2">+{cart.length}</div>
                        <FaShoppingCart className="text-2xl" />
                    </Link>
                    <button onClick={handleLogOut} className="uppercase">Sign Out</button>
                    <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" />
                </div>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>
    return (
        <div className="navbar max-w-7xl fixed z-10 bg-black bg-opacity-40 text-white flex justify-between">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box uppercase">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Boos Restaurant</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;