function LargeCard(props) {
    return (
        <section className="relative py-16 cursor-pointer text-white">
            <div className="relative px-2">
                <img className="h-96 sm:w-[700px] xl:w-[1000px] rounded-2xl" src={props.image} alt="/" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3">{props.title}</h3>
                <p>{props.bio}</p>
                <button className="text-sm text-white bg-gray-900 py-2 px-2 rounded-lg mt-5">{props.buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
