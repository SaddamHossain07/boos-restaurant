import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} menu={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline px-10 mt-10 border-0 border-orange-600 border-b-4 bg-slate-100">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;