import React, {useState} from "react"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";
function Header(props) {
    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberGuest, setNumberGuest] = useState(1)
    const router = useRouter()
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    const handleSelection = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput("");
    }
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberGuest,
            },
        })
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
           <div className="relative flex items-center my-auto">
               <img onClick={() => router.push("/")} className="h-10 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="/" layout="fill"objectFit="contain"objectPosition="left" />
           </div> 
           <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
               <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" type="text" placeholder={props.placeholder || "start your search"} />
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
           {searchInput &&  (
               <div className="flex flex-col col-span-3 sm:mx-auto">
                   <DateRangePicker
                   ranges={[selectionRange]}
                   minDate={new Date()}
                   rangeColors={["blue"]}
                   onChange={handleSelection}
                   />
                   <div className="flex items-center border-b mb-4">
                       <h1 className="text-sm sm:text-xl pl-2 flex-grow font-bold">number of guest</h1>
                       <i className="fas fa-user"></i>
                       <input value={numberGuest} min={0} onChange={(e) => setNumberGuest(e.target.value)} className="w-12 pl-2 text-lg outline-none text-red-400" type="number"/>
                   </div>
                   <div className="flex text-xs">
                       <button onClick={resetInput} className="flex-grow text-gray-600">cancel</button>
                       <button onClick={search} className="flex-grow text-red-500">search</button>
                       </div>
               </div>
           )}
        </header>
    )
}

export default Header
