export default function NavBar(props) {
    return (
        <div className="h-full w-full space-y-5 flex items-stretch ">
            {props.children}
            <div className="text-xl pr-6">
                <select className="w-full bg-white p-6  mt-16">
                    <option>Creation</option>
                    <option>Website Design</option>
                    <option>Website Templates</option>
                    <option>Advanced Web Development</option>
                    <option>Mobile App</option>
                    <option>Hire a Professional</option>
                </select>
                <div className="fixed w-full">
                    <div className=" w-full bg-white p-6 mt-80">
                        <button className="bg-white border-4 text-[#166aea] rounded-full p-5 w-full mb-2">Login</button>
                        <button className="bg-[#166aea] border text-white rounded-full p-5 w-full">Get started</button>
                    </div>
                </div>
                <select className="w-full bg-white p-6">
                    <option>Busness</option>
                    <option>Website Design</option>
                    <option>Website Templates</option>
                    <option>Advanced Web Development</option>
                    <option>Mobile App</option>
                    <option>Hire a Professional</option>
                </select>
                <div className="p-6 w-full" > Resources</div>
                <div className="p-6 w-full"> Pricing </div>
                <div className="p-6 w-full"> Support</div>
                <div className="p-6 w-full"> Mobile App</div>
                <div className="p-6 w-full"> Wix Studio</div>
                <div className="p-6 w-full"> Enterprise</div>
                <select className="w-full bg-white p-6 mb-80">
                    <option >English</option>
                </select>
            </div>
        </div>
    )
}