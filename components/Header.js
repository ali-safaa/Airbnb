function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
           <div className="relative flex items-center my-auto">
               <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="/" layout="fill"objectFit="contain"objectPosition="left" />
           </div> 
           <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
               <input className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" type="text" placeholder="start your search" />
               <i className="fas fa-search bg-red-400 hidden md:inline md:mx-2 text-white rounded-full p-2 cursor-pointer"></i>
           </div>
           <div className="flex items-center space-x-4 justify-end text-gray-400">
               <p className="hidden md:inline">become a host</p>
               <i class="fas fa-globe-asia cursor-pointer"></i>
               <div className="flex items-center border-2 space-x-2 rounded-full p-2">
                   <i className="fas fa-bars cursor-pointer"></i>
                   <i className="fas fa-user cursor-pointer"></i>
               </div>
           </div>
        </header>
    )
}

export default Header
