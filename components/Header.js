import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(0);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput('');
  };
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        q: searchInput,
        startDate: startDate.toLocaleString(),
        endDate: endDate.toDateString(),
        numberGuests,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <img
          className="logo h-10 my-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="logo"
        />
      </div>

      <div className="search-section mx-2 py-2 pl-2 space-x-2 rounded-full flex items-center flex-grow bg-transparent md:bg-gray-100">
        <i className="fas fa-search pl-3"></i>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="search"
        />
      </div>

      <div className="user-auth section flex items-center justify-end my-2">
        <p className="mr-5 font-semibold">become a host</p>
        <div className="flex items-center rounded-full p-2 text-gray-500 shadow-md bg-gray-100">
          <i className="fas fa-bars px-3"></i>
          <i className="fas fa-user" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['blue']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b pb-2">
            <h2 className="font-bold text-gray-500 flex-grow">
              Number of Guests
            </h2>

            <i className="fas fa-user"></i>
            <input
              type="number"
              className="w-12 pl-2 outline-none text-xl text-red-400"
              value={numberGuests}
              min={0}
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>
          <div className="flex items-center mt-3">
            <button
              onClick={resetInput}
              className="flex-grow cursor-pointer font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow font-semibold text-red-700"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
