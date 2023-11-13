import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <section className="featuredItemBg text-white">
            <div className="w-full h-full bg-black bg-opacity-25 py-16">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>

                <div className="flex items-center justify-center gap-16 pb-20 px-36">
                    <div>
                        <img src={featuredImage} alt="" />
                    </div>
                    <div className="space-y-2">
                        <p>March 20, 2023</p>
                        <h3 className="uppercase text-xl">WHERE CAN I GET SOME?</h3>
                        <p className="pb-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline px-10 mt-10 border-0 border-orange-600 border-b-4 bg-slate-100">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;