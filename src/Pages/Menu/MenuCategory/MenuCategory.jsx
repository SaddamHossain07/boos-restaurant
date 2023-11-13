import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../../Components/Shared/Cover/Cover";

const MenuCategory = ({ items, title, bgImage }) => {
    return (
        <div className="space-y-16">
            {title && <Cover bgImage={bgImage} title={title}></Cover>}
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} menu={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline px-10 border-0 border-orange-600 border-b-4 bg-slate-100">ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;