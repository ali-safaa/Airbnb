import React from 'react';

function InfoCard(props) {
  return (
    <div className="flex mt-3 border-b mb-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out">
      <div className="relative">
        <img
          className="h-24 w-40 md:h-[300px] md:w-[500px] rounded-lg"
          src={props.image}
          alt="/"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="ml-5 flex-grow">
        <h1 className="text-sm font-semibold sm:text-xl">{props.title}</h1>
        <h4 className="text-xs sm:text-sm">{props.location}</h4>
        <p className="text-xs text-gray-500 mt-2 sm:text-sm">
          {props.numberGuest}
        </p>
        <div className="space-x-2 my-4">
          <i className="fas fa-star text-yellow-500"></i>
          <span>{props.star}</span>
        </div>
      </div>
      <div>
        <h3 className="text-sm sm:text-lg">
          {props.total}{' '}
          <span className="text-sm text-gray-500">For a month</span>
        </h3>
        <h3 className="text-sm sm:text-lg mr-2">
          {props.forNight}{' '}
          <span className="text-sm text-gray-500">For a Night</span>
        </h3>
      </div>
    </div>
  );
}

export default InfoCard;
