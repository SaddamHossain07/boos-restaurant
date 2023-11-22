import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from 'react-icons/fa';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import useCart from "../../Hooks/useCart/useCart";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
const Dashboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    // const isAdmin = true

    return (
        <div>
            <div className="flex max-w-7xl mx-auto border">
                <div className="w-2/12 min-h-screen bg-orange-300">
                    <h2 className="text-2xl font-bold p-4 underline italic">BossRestaurant</h2>
                    <ul className="menu p-4 text-xs uppercase">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook />
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUser />
                                        All User
                                    </NavLink>
                                </li>
                            </>
                                : <>
                                    <li>
                                        <NavLink to='/dashboard/userHome'>
                                            <FaHome></FaHome>
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/userHome'>
                                            <FaCalendar></FaCalendar>
                                            Reservation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/cart'>
                                            <FaShoppingCart></FaShoppingCart>
                                            My Cart  ({cart.length})
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/review'>
                                            <MdFormatListBulletedAdd />
                                            Add a review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>
                                            <FaList></FaList>
                                            Payment History
                                        </NavLink>
                                    </li>
                                </>

                        }


                        <div className="divider"></div>

                        <li>
                            <NavLink to='/'>
                                <IoMdHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'>
                                <RiMenuSearchLine />
                                Menus
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/menu'>
                                <FaEnvelope />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-10/12 min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;