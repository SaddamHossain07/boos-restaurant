import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover/Cover";
import shopBg from '../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Boss Restaurant | Order</title>
            </Helmet>
            <Cover bgImage={shopBg} title='OUR SHOP'></Cover>
        </div>
    );
};

export default Order;