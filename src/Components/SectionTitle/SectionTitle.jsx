
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-1/2 mx-auto mb-12">
            <p className="text-yellow-500 pb-4">--- {subHeading} ---</p>
            <h3 className="border-y-4 py-5 text-4xl font-semibold uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;