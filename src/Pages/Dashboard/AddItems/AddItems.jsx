import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const imgUploadKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY
const imgUploadAPI = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgUploadAPI, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            // now send the data to the server 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Menu Item added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
            }
        }
    }

    return (
        <div className="p-16">
            <SectionTitle subHeading={"What's new?"} heading={'ADD AN ITEM'}></SectionTitle>
            <div className="bg-slate-100 w-full h-full p-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="block text-sm font-medium leading-6 text-gray-900">Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            placeholder="Recipe Name"
                            className="input input-bordered" required />
                    </div>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Category*</span>
                            </label>
                            <select
                                defaultValue={'default'}
                                {...register("category")}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Price</span>
                            </label>
                            <input
                                {...register("price")}
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="col-span-full form-control">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Recipe Details</label>
                        <div className="mt-2">
                            <textarea
                                {...register("recipe")}
                                placeholder="Recipe Details"
                                rows="9"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                    </div>
                    <div className="form-control">
                        <input
                            {...register("image")}
                            type="file"
                            className="file-input bg-slate-100 file-input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn bg-gradient-to-r from-orange-500 to-orange-300 text-white  px-6 py-4 max-w-[150px] mt-4 rounded-none">
                            Add Item <FaUtensils />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;