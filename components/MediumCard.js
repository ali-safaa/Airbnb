function MediumCard(props) {
    return (
        <div className="relative cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative w-55 sm:w-80">
            <img className="h-55 w-55 rounded-xl sm:h-80 sm:w-80" src={props.image} alt="/" layout="fill" />
            </div>
            <h3 className="text-xl mt-3 sm:text-2xl">{props.title}</h3>
        </div>
    )
}

export default MediumCard
