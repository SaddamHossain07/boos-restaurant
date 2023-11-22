import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover/Cover";
import bgImage from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../Hooks/useMenu/useMenu";
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div className="space-y-24">
            <Helmet>
                <title>Boss Restaurant | Menu</title>
            </Helmet>
            <Cover bgImage={bgImage} title='OUR MENU'></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory bgImage={dessertBg} title='desserts' items={dessert}></MenuCategory>
            <MenuCategory bgImage={pizzaBg} title='pizza' items={pizza}></MenuCategory>
            <MenuCategory bgImage={saladBg} title='salad' items={salad}></MenuCategory>
            <MenuCategory bgImage={soupBg} title='soup' items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;