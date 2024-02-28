export default function Header(props) {

    return (
        <div className="fixed bg-white w-full">
            <div className="h-14 flex justify-around items-stretch ">
                <div className="text-3xl self-center"><img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="" /></div>
                <button className="self-center bg-[#166aea] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5">Get started</button>
                {props.children}
            </div>
        </div>
    )
}