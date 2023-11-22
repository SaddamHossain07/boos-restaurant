import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalItem = cart.length
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Want to remove this item from your cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been removed.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }
    return (
        <div className="bg-slate-100 min-h-screen overflow-hidden pt-16">
            <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></SectionTitle>
            <div className="rounded-lg bg-white m-16 p-8 ">
                <div className="flex items-center justify-between mb-2 py-2">
                    <h3 className="text-xl font-bold">Items : {totalItem} </h3>
                    <h3 className="text-xl font-bold">Total Price : ${totalPrice} </h3>
                    {cart.length ? <Link to='/dashboard/payment'>
                        <button className="btn btn-md bg-orange-300">Pay Now</button>
                    </Link> :
                        <button disabled className="btn btn-md bg-orange-300">Pay Now</button>
                    }
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-300">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-24 h-16">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold">{item.name}</div>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn-sm text-red-500 font-bold">
                                            <FaTrash></FaTrash>
                                        </button>

                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;