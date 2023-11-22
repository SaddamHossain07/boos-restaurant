import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../Hooks/useCart/useCart";

const FoodCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        if (user && user.email) {
            // send data to the database 
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                recipe
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            Swal.fire({
                title: "You are not login yet!",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page 
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white px-4 py-1 rounded absolute right-2 top-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-6">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline px-10 border-0 border-orange-600 border-b-4 bg-slate-100">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;