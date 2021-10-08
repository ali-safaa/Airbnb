function MediumCard(props) {
    return (
        <div className="relative cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
            <div className="relative w-60 sm:w-80">
            <img className=" rounded-xl h-60 w-60 sm:h-80 sm:w-80" src={props.image} alt="/" layout="fill" />
            </div>
            <h3 className="text-xl mt-3 sm:text-2xl">{props.title}</h3>
        </div>
    )
}

export default MediumCard
