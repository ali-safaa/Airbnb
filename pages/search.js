import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import { DateRange } from 'react-date-range'
import { toDate } from 'date-fns/esm'
function Search() {
    const router = useRouter();
    const {location, startDate, endDate, numberGuests} = router.query;
    const formatStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formatEndDate = format(new Date(endDate), "dd MMMM yyyy");
    const range = `${formatStartDate} - ${formatEndDate}`;
    return (
        <div>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
       </Head>
       <Header />
          <main className="flex">
             <section className="flex-grow pt-10 px-6 ">
                 <p className="text-xs sm:text-sm"> {range} - for {numberGuests} of guest</p>
                 <h1 className="text-lg sm:text-xl font-bold mb-2">stays in {location}</h1>
                 <div className="hidden items-center mb-5 text-gray-500 whitespace-nowrap space-x-2 sm:inline-flex">
                     <p className="button">cancel flexbilty</p>
                     <p className="button">type of place</p>
                     <p className="button">prices</p>
                     <p className="button">rooms and beds</p>
                 </div>
                 <div className="flex flex-col">
                 <InfoCard 
                 image="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 location={location}
                 title="nature"
                 numberGuest= {`Nice room for ${numberGuests} of Guest`}
                 star="4.5"
                 forNight="100.99 $ For a Night"
                 total="500.99"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 location={location}
                 title="nature"
                 numberGuest= {`Nice room for ${numberGuests} of Guest`}
                 star="4.5"
                 total="200.99"
                 forNight="100.99 $ For a Night"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/7511701/pexels-photo-7511701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                 location={location}
                 title="nature"
                 numberGuest= {`Nice room for ${numberGuests} of Guest`}
                 star="4.5"
                 total="200.99"
                 forNight="100.99 $ For a Night"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                 location={location}
                 title="nature"
                 numberGuest= {`Nice room for ${numberGuests} of Guest`}
                 star="4.5"
                 total="200.99"
                 forNight="100.99 $ For a Night"
                 />
                 <InfoCard 
                 image="https://images.pexels.com/photos/7587820/pexels-photo-7587820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 title="nature"
                 location={location}
                 numberGuest= {`Nice room for ${numberGuests} of Guest`}
                 star="4.5"
                 total="200.99"
                 forNight="100.99 $ For a Night"
                 />
                 </div>
             </section>
          </main>
          <Footer />
        </div>
    )
}

export default Search
