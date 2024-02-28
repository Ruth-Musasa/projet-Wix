export default function WixOption(props) {
    return (
        <select className="w-full bg-white py-6 text-xl border-b border-gray-400 ">
            <option>{props.option} </option>
            <option>Website Templates </option>
            <option>Website Builder </option>
            <option>Website Design </option>
            <option>Wix Features </option>
            <option>App Market </option>
            <option>Web Hosting </option>
            <option>Domain Names </option>
            <option>Website Accessibility </option>
            <option>Mobile App Builder </option>
        </select>
    )
}