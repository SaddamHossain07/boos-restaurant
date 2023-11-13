
const MenuItem = ({ menu }) => {
    const { image, name, recipe, price } = menu
    return (
        <div className="flex items-center gap-6">

            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />

            <div >
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">{name}---------</h3>
                    <p className="text-yellow-600">$ {price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;