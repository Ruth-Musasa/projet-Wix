export function FAQs(props) {
    return (
        <div className="border-b border-black py-8 leading-7 border-gray-400 text-base px-8 md:text-xl">
            <div className="flex justify-between">
                <div>
                    <h3><strong>{props.title} </strong></h3>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                </div>
            </div>
            <p className="hidden">{props.text}</p>
        </div>
    )

}