import useClasses from "../../../hooks/useClasses";

const Classes = () => {
    const [classes] = useClasses()
    console.log(classes)
    return (
        <div className="pt-20">
            <h2>All the available classes are appear here</h2>
        </div>
    );
};

export default Classes;