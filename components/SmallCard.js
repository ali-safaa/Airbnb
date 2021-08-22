function SmallCard(props) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <img className="relative h-16 w-16 rounded" src={props.image} alt="/" />
            <div>
            <h4>{props.hour}</h4>
            <h1>{props.local}</h1>
            </div>
        </div>
    )
}

export default SmallCard
