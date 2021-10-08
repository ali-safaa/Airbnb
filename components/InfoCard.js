import React from 'react'

function InfoCard(props) {
    return (
        <div className="flex mt-3 border-b mb-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
            <div className="relative">
                <img className="h-24 w-40 md:h-[300px] md:w-[500px] rounded-lg" src={props.image} alt="/" layout="fill" objectFit="cover" />
            </div>
           <div className="ml-2 flex-grow">
               <h1 className="text-sm font-bold sm:text-xl">{props.title}</h1>
               <h4 className="text-xs sm:text-sm">{props.location}</h4>
               <p className="text-xs text-gray-500 mt-2 sm:text-sm">{props.numberGuest}</p>
              <div className="space-x-2 mt-2">
               <i className="fas fa-star"></i>
               <span>{props.star}</span>
              </div>
           </div>
           <div>
               <h3 className="text-sm sm:text-lg">{props.total} $</h3>
               <h3 className="text-sm sm:text-lg mr-2">{props.forNight}</h3>
               </div>
        </div>
    )
}

export default InfoCard
