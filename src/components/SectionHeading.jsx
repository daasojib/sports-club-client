
const SectionHeading = ({heading,subHeading}) => {
    return (
        <div className="my-10 md:w-1/2 text-center mx-auto">
            <h3 className="text-4xl uppercase py-4 text-red-400">{heading}</h3>
            <p className="mb-4 text-purple-500 text-xl mt-3">{subHeading}</p>
        </div>
    );
};

export default SectionHeading;