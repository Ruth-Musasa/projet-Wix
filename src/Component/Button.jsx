export default function ButtonAction(props) {
    return (
        <div className="flex text-lg rounded-xl h-14 border border-white mt-4 text-white justify-start w-full">
            <div className="m-auto">
                {props.children}
            </div>
            <span className=" m-auto">{props.name}</span>
        </div>
    )
}