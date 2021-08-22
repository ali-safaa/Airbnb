function Banner() {
    return (
        <div>
            <div className="relative">
                <img className="w-[100%]" src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="/" layout="fill" objectFit="cover" />
            </div>
            <div className="absolute top-1/3 sm:top-1/2 w-full text-center font-bold">
                <p>you sure where to go perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">im flexbile</button>
            </div>
        </div>
    )
}

export default Banner
