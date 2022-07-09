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
  const [openModal, setOpenModal] = useState(false);
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
    setOpenModal(false);
  };
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        s: searchInput,
        startDate: startDate.toLocaleString(),
        endDate: endDate.toDateString(),
        numberGuests,
      },
    });
  };
  return (
    <header className="bg-white grid items-center shadow-md p-5 md:px-10">
      <div className="flex items-center justify-between">
        <img
          onClick={() => router.push('/')}
          className="w-[100px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="logo"
        />
        <div className=" mx-2 py-2 pl-2 sm:w-[400px] w-[200px] space-x-2 rounded-full flex items-center bg-transparent md:bg-gray-100">
          <input
            onClick={() => setOpenModal(true)}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-transparent w-full pl-3 outline-none placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <i className="fas fa-search pr-3"></i>
        </div>
        <div className="user-auth section flex items-center justify-end my-2">
          <p className="mr-5 font-semibold hidden sm:inline-flex">
            become a host
          </p>
          <div className="flex items-center rounded-full p-2 text-gray-500 shadow-md bg-gray-100">
            <i className="fas fa-bars px-3"></i>
            <i className="fas fa-user" />
          </div>
        </div>
      </div>

      {openModal && (
        <div className="mx-auto rounded-md">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['red']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b pb-2">
            <h2 className="font-bold text-gray-500 flex-grow">
              Number of Guests
            </h2>

            <i className="fas fa-user"></i>
            <input
              type="number"
              className="pl-2 w-12 outline-none text-xl text-red-400"
              value={numberGuests}
              min={0}
              onChange={(e) => setNumberGuests(e.target.value)}
            />
          </div>
          <div className="flex items-center my-3">
            <button
              onClick={resetInput}
              className="flex-grow cursor-pointer font-semibold"
            >
              Cancel
            </button>
            <button
              disabled={!searchInput}
              onClick={search}
              className={`${
                !searchInput && 'text-red-300'
              } flex-grow font-semibold text-red-700`}
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
