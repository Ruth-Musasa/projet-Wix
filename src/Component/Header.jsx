export default function Header(props) {

    return (
        <div>
            <div className="fixed bg-white w-full md:hidden">
                <div className="h-14 flex justify-around items-stretch ">
                    <div className="text-3xl self-center"><img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="" /></div>
                    <button className="self-center bg-[#166aea] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5">Get started</button>
                    {props.children}
                </div>
            </div>
            <div className="invisible h-0 md:visible md:h-16 md:bg-white md:fixed md:w-full md:flex justify-between md:px-10">
                <div className="h-14 flex  items-stretch ">
                    <div className="text-3xl self-center"><img src="src/assets/Capture_d_écran_du_2024-02-28_15-21-51-removebg-preview.png" alt="" /></div>
                    <div className="self-center md:flex md:gap-12"><span>Product </span>
                        <span>Solution</span>
                        <span>Ressources</span>
                        <span className="md:border-r md:pr-12">Pricing</span>
                        <span>Wix Studio</span>
                        <span>Enterprise</span></div>
                </div>
                <div className="self-center md:flex md:gap-6">
                    <span>Login</span>
                    <button className="self-center bg-[#166aea] rounded-full text-white text-sm font-normal leading-5 py-1.5 px-5">Get started</button>
                </div>
            </div>
        </div>
    )
}